const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
// Authentication Middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Authentication required"
    });
  }

  const token = authHeader.substring(7);

  if (token === "admin-token") {
    req.userRole = "ADMIN";
  } else if (token === "readonly-token") {
    req.userRole = "READ_ONLY";
  } else {
    return res.status(401).json({
      error: "Invalid or expired token"
    });
  }

  next();
}
// Authorization Middleware
function authorizeWrite(req, res, next) {
  if (req.userRole !== "ADMIN") {
    return res.status(403).json({
      error: "Insufficient permissions"
    });
  }

  next();
}
const dataFile = path.join(__dirname, "data", "employees.json");

// Read employees from JSON file
function getEmployees() {
  const data = fs.readFileSync(dataFile, "utf8");
  return JSON.parse(data);
}

// Save employees to JSON file
function saveEmployees(employees) {
  fs.writeFileSync(
    dataFile,
    JSON.stringify(employees, null, 2)
  );
}

// Health Check
app.get("/", (req, res) => {
  res.json({
    message: "NovaTech Employee Management API is running"
  });
});

// Create Employee
// Create Employee
app.post("/api/v1/employees", authenticate, authorizeWrite, (req, res) => {
  const employee = req.body;
  const employees = getEmployees();

  if (
    !employee.firstName ||
    !employee.lastName ||
    !employee.email ||
    !employee.department ||
    !employee.role
  ) {
    return res.status(400).json({
      error: "Required employee fields are missing"
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(employee.email)) {
    return res.status(400).json({
      error: "Invalid email format"
    });
  }

  const duplicateEmail = employees.find(
    (emp) => emp.email.toLowerCase() === employee.email.toLowerCase()
  );

  if (duplicateEmail) {
    return res.status(409).json({
      error: "Employee with this email already exists"
    });
  }

  if (
    typeof employee.firstName !== "string" ||
    employee.firstName.length < 2 ||
    employee.firstName.length > 50
  ) {
    return res.status(400).json({
      error: "firstName must be between 2 and 50 characters"
    });
  }

  if (
    typeof employee.lastName !== "string" ||
    employee.lastName.length < 2 ||
    employee.lastName.length > 50
  ) {
    return res.status(400).json({
      error: "lastName must be between 2 and 50 characters"
    });
  }

  const allowedDepartments = [
    "Engineering",
    "QA",
    "Finance",
    "HR",
    "Product"
  ];

  if (!allowedDepartments.includes(employee.department)) {
    return res.status(400).json({
      error: "Invalid department"
    });
  }

  const allowedStatuses = [
    "ACTIVE",
    "INACTIVE"
  ];

  if (
    employee.status !== undefined &&
    !allowedStatuses.includes(employee.status)
  ) {
    return res.status(400).json({
      error: "Invalid status"
    });
  }

  const nextEmployeeNumber =
    employees.length === 0
      ? 1001
      : Math.max(
          ...employees.map(
            (emp) => parseInt(emp.employeeId.replace("EMP", ""), 10)
          )
        ) + 1;

  const newEmployee = {
    employeeId: `EMP${nextEmployeeNumber}`,
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    department: employee.department,
    role: employee.role,
    status: employee.status || "ACTIVE"
  };

  employees.push(newEmployee);
  saveEmployees(employees);

  res.status(201).json(newEmployee);
});// Get Employee by ID
app.get("/api/v1/employees/:employeeId", authenticate, (req, res) => {
const employeeIdPattern = /^EMP\d{4}$/;

if (!employeeIdPattern.test(req.params.employeeId)) {
  return res.status(400).json({
    error: "Invalid employee ID format"
  });
}
  const employees = getEmployees();

  const employee = employees.find(
    (emp) => emp.employeeId === req.params.employeeId
  );

  if (!employee) {
    return res.status(404).json({
      error: "Employee not found"
    });
  }

  res.status(200).json(employee);
});
// Update Employee
app.put("/api/v1/employees/:employeeId", authenticate, authorizeWrite, (req, res) => {

  console.log("PUT body received:", req.body);

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Request body cannot be empty"
    });
  }

  const employeeIdPattern = /^EMP\d{4}$/;

  if (!employeeIdPattern.test(req.params.employeeId)) {
    return res.status(400).json({
      error: "Invalid employee ID format"
    });
  }

  const allowedFields = [
    "firstName",
    "lastName",
    "email",
    "department",
    "role",
    "status"
  ];

  const unknownFields = Object.keys(req.body).filter(
    (field) => !allowedFields.includes(field)
  );

  if (unknownFields.length > 0) {
    return res.status(400).json({
      error: `Unknown field: ${unknownFields[0]}`
    });
  }

  const employees = getEmployees();

  const employeeIndex = employees.findIndex(
    (emp) => emp.employeeId === req.params.employeeId
  );

  if (employeeIndex === -1) {
    return res.status(404).json({
      error: "Employee not found"
    });
  }

  if (req.body.email !== undefined) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(req.body.email)) {
      return res.status(400).json({
        error: "Invalid email format"
      });
    }

    const duplicateEmail = employees.find(
      (emp) =>
        emp.employeeId !== req.params.employeeId &&
        emp.email.toLowerCase() === req.body.email.toLowerCase()
    );

    if (duplicateEmail) {
      return res.status(409).json({
        error: "Employee with this email already exists"
      });
    }
  }

  if (req.body.firstName !== undefined) {
    if (
      typeof req.body.firstName !== "string" ||
      req.body.firstName.length < 2 ||
      req.body.firstName.length > 50
    ) {
      return res.status(400).json({
        error: "firstName must be between 2 and 50 characters"
      });
    }
  }

  if (req.body.lastName !== undefined) {
    if (
      typeof req.body.lastName !== "string" ||
      req.body.lastName.length < 2 ||
      req.body.lastName.length > 50
    ) {
      return res.status(400).json({
        error: "lastName must be between 2 and 50 characters"
      });
    }
  }

  if (req.body.department !== undefined) {

    const allowedDepartments = [
      "Engineering",
      "QA",
      "Finance",
      "HR",
      "Product"
    ];

    if (!allowedDepartments.includes(req.body.department)) {
      return res.status(400).json({
        error: "Invalid department"
      });
    }
  }

  if (req.body.status !== undefined) {

    const allowedStatuses = [
      "ACTIVE",
      "INACTIVE"
    ];

    if (!allowedStatuses.includes(req.body.status)) {
      return res.status(400).json({
        error: "Invalid status"
      });
    }
  }

  if (req.body.role !== undefined) {

    if (
      typeof req.body.role !== "string" ||
      req.body.role.trim() === ""
    ) {
      return res.status(400).json({
        error: "Invalid role"
      });
    }
  }

  const updatedEmployee = {
    ...employees[employeeIndex],
    ...req.body,
    employeeId: employees[employeeIndex].employeeId
  };

  employees[employeeIndex] = updatedEmployee;

  saveEmployees(employees);

  console.log("Updated employee:", updatedEmployee);

  return res.status(200).json(updatedEmployee);
});
// Delete Employee
app.delete("/api/v1/employees/:employeeId", authenticate, authorizeWrite, (req, res) => {
  const employeeIdPattern = /^EMP\d{4}$/;

  if (!employeeIdPattern.test(req.params.employeeId)) {
    return res.status(400).json({
      error: "Invalid employee ID format"
    });
  }

  const employees = getEmployees();

  const employeeIndex = employees.findIndex(
    (emp) => emp.employeeId === req.params.employeeId
  );

  if (employeeIndex === -1) {
    return res.status(404).json({
      error: "Employee not found"
    });
  }

  employees.splice(employeeIndex, 1);
  saveEmployees(employees);

  res.status(204).send();
});
// Get Employee Benefits
app.get("/api/v1/employees/:employeeId/benefits", authenticate, (req, res) => {
const employeeIdPattern = /^EMP\d{4}$/;

if (!employeeIdPattern.test(req.params.employeeId)) {
  return res.status(400).json({
    error: "Invalid employee ID format"
  });
}
  const employees = getEmployees();

  const employee = employees.find(
    (emp) => emp.employeeId === req.params.employeeId
  );

  if (!employee) {
    return res.status(404).json({
      error: "Employee not found"
    });
  }

  res.status(200).json({
    employeeId: employee.employeeId,
    healthInsurance: true,
    lifeInsuranceCoverage: 1000000,
    learningAllowance: 25000,
    internetAllowance: 1000
  });
});
// Get Employee Leave Information
app.get("/api/v1/employees/:employeeId/leave", authenticate, (req, res) => {
const employeeIdPattern = /^EMP\d{4}$/;

if (!employeeIdPattern.test(req.params.employeeId)) {
  return res.status(400).json({
    error: "Invalid employee ID format"
  });
}
  const employees = getEmployees();

  const employee = employees.find(
    (emp) => emp.employeeId === req.params.employeeId
  );

  if (!employee) {
    return res.status(404).json({
      error: "Employee not found"
    });
  }

  res.status(200).json({
    employeeId: employee.employeeId,
    annualLeaveEntitlement: 20,
    carryForwardLimit: 5
  });
});
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});