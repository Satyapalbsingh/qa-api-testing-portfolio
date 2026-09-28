# QA API Testing Portfolio

> A practical QA portfolio project demonstrating REST API testing, Postman automation, CRUD validation, negative testing, boundary testing, authentication, authorization, API chaining, data persistence, defect analysis, and regression testing.

**Application:** Employee Management & Benefits API
**Type:** Fictional REST API
**Environment:** Local Node.js + Express Mock API
**Testing Tool:** Postman

---

## 📊 Project Highlights

| Area               | Coverage                                   |
| ------------------ | ------------------------------------------ |
| API Test Cases     | 30 designed scenarios                      |
| Postman Regression | **45/45 assertions passed**                |
| API Operations     | CRUD + Benefits + Leave                    |
| Testing Types      | Functional, Negative, Boundary, Regression |
| Security Testing   | Authentication & Authorization             |
| API Chaining       | Dynamic `employeeId`                       |
| API Implementation | Node.js + Express                          |
| Test Data          | JSON + CSV                                 |
| Version Control    | Git + GitHub                               |

---

## 🎯 Project Objective

The objective of this project is to demonstrate a practical API testing workflow from API requirements and contract definition through test design, execution, defect identification, retesting, and regression validation.

The project demonstrates the following QA activities:

* API test strategy
* API contract validation
* REST API testing
* CRUD testing
* Positive testing
* Negative testing
* Boundary testing
* Request validation
* Response validation
* Authentication testing
* Authorization testing
* API chaining
* Data persistence validation
* Regression testing
* Defect identification and retesting

---

## 🏢 Application Under Test

### Employee Management & Benefits API

A fictional REST API created specifically for this personal QA portfolio project.

The API provides employee management functionality along with employee benefits and leave information.

**Fictional Company:** NovaTech Solutions

> **Note:** NovaTech Solutions and the Employee Management & Benefits API are fictional. This project is not connected to a real production system.

---

## 🛠️ Technology Stack

| Technology     | Purpose                                  |
| -------------- | ---------------------------------------- |
| **Postman**    | API testing and automated assertions     |
| **Node.js**    | Local API runtime                        |
| **Express.js** | REST API implementation                  |
| **JavaScript** | API implementation and Postman scripting |
| **JSON**       | Local API data persistence               |
| **CSV**        | Test cases and test data                 |
| **Git**        | Version control                          |
| **GitHub**     | Portfolio repository                     |

---

## 🔗 API Endpoints

| Method   | Endpoint                                  | Description                    |
| -------- | ----------------------------------------- | ------------------------------ |
| `POST`   | `/api/v1/employees`                       | Create employee                |
| `GET`    | `/api/v1/employees`                       | Get all employees              |
| `GET`    | `/api/v1/employees/{employeeId}`          | Get employee                   |
| `PUT`    | `/api/v1/employees/{employeeId}`          | Update employee                |
| `DELETE` | `/api/v1/employees/{employeeId}`          | Delete employee                |
| `GET`    | `/api/v1/employees/{employeeId}/benefits` | Get employee benefits          |
| `GET`    | `/api/v1/employees/{employeeId}/leave`    | Get employee leave information |

---

## 🧪 Test Coverage

### Functional Testing

* Create employee
* Retrieve employee
* Retrieve all employees
* Update employee
* Delete employee
* Retrieve employee benefits
* Retrieve employee leave information

### Negative Testing

* Missing required fields
* Invalid email
* Invalid data types
* Null values
* Empty values
* Non-existing employee IDs
* Invalid employee ID formats
* Invalid department
* Invalid status
* Invalid role
* Duplicate employee email
* Empty PUT request
* Unknown PUT fields

### Boundary Testing

* First name minimum length
* First name maximum length
* First name exceeding maximum length
* Last name minimum length
* Last name maximum length
* Last name exceeding maximum length

### Authentication Testing

* Valid authentication token
* Missing authentication
* Invalid authentication token

### Authorization Testing

* Admin access
* Read-only access
* Read-only POST restriction
* Read-only PUT restriction
* Read-only DELETE restriction

---

## 🔄 Postman Regression Testing

The Postman collection contains an end-to-end employee lifecycle regression flow.

```text
Health Check
     ↓
Create Employee
     ↓
Get Employee
     ↓
Update Employee
     ↓
Verify Update
     ↓
Get Benefits
     ↓
Get Leave
     ↓
Delete Employee
     ↓
Verify Deleted Employee
```

### Regression Result

**45/45 Postman assertions passed ✅**

The regression flow validates the employee lifecycle from creation through deletion and verifies dependent API operations.

---

## 🔗 API Chaining

The project demonstrates dynamic API chaining using Postman collection variables.

```text
POST /employees
       ↓
Save generated employeeId
       ↓
GET /employees/{employeeId}
       ↓
PUT /employees/{employeeId}
       ↓
GET /employees/{employeeId}
       ↓
DELETE /employees/{employeeId}
       ↓
GET /employees/{employeeId}
       ↓
404 Employee Not Found
```

The employee ID generated during the Create Employee request is automatically stored as a collection variable and reused by subsequent requests.

This demonstrates:

* Dynamic test data
* Request dependency management
* Collection variables
* End-to-end API workflows

---

## 🔐 Authentication & Authorization

The fictional API supports two access levels.

### ADMIN

Allowed operations:

* `GET`
* `POST`
* `PUT`
* `DELETE`

### READ_ONLY

Allowed operations:

* `GET`

Restricted operations:

* `POST`
* `PUT`
* `DELETE`

The Postman collection validates:

* Missing authentication
* Invalid authentication
* Valid authentication
* Admin authorization
* Read-only authorization
* Restricted write operations

---

## 🐞 QA Findings & Fixes

During testing of the local mock API, several validation gaps were ident
