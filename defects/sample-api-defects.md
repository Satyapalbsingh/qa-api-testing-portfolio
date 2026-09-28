# Sample API Findings

This document records API issues identified and fixed during testing of the local mock Employee Management & Benefits API.

These are findings from a personal QA portfolio project. They are not production defects from a real company or production API.

---

## Finding 1 — Invalid Employee ID Returned 404 Instead of 400

Finding ID: API-FIND-001
Area: Employee API
Endpoint: GET /api/v1/employees/{employeeId}
Type: Validation

### Scenario

Send a request using an incorrectly formatted employee ID.

Example:

GET /api/v1/employees/INVALID123

### Initial Behavior

The API returned:

404 Employee not found

### Expected Behavior

The API should reject the request as invalid input:

400 Invalid employee ID format

### Fix

Added employee ID format validation using the pattern:

/^EMP\d{4}$/

### Retest

The same invalid employee ID returned:

400 Bad Request

Status: Fixed and retested.

---

## Finding 2 — firstName Accepted More Than 50 Characters

Finding ID: API-FIND-002
Area: Employee Validation
Endpoint: POST /api/v1/employees
Type: Boundary Testing

### Scenario

Create an employee with a firstName containing more than 50 characters.

### Initial Behavior

The API accepted the value.

### Expected Behavior

The API should reject a firstName longer than 50 characters.

Expected response:

400 Bad Request

### Fix

Added validation requiring:

2–50 characters

### Retest

A 51-character firstName returned:

400 Bad Request

Status: Fixed and retested.

---

## Finding 3 — Invalid Department Accepted

Finding ID: API-FIND-003
Area: Employee Validation
Endpoint: POST /api/v1/employees
Type: Negative Testing

### Scenario

Create an employee using an unsupported department.

Example:

{
"department": "Marketing"
}

### Initial Behavior

The API accepted the unsupported department.

### Expected Behavior

The API should reject departments outside the defined contract.

Allowed departments:

* Engineering
* QA
* Finance
* HR
* Product

Expected response:

400 Bad Request

### Fix

Added department validation against the allowed department list.

### Retest

The invalid department returned:

400 Invalid department

Status: Fixed and retested.

---

## Finding 4 — Invalid Status Accepted

Finding ID: API-FIND-004
Area: Employee Validation
Endpoint: POST /api/v1/employees
Type: Negative Testing

### Scenario

Create an employee using an unsupported status.

Example:

{
"status": "PENDING"
}

### Initial Behavior

The API accepted the unsupported status.

### Expected Behavior

Only the following statuses should be accepted:

ACTIVE
INACTIVE

Expected response:

400 Bad Request

### Fix

Added status validation against the allowed status values.

### Retest

The invalid status returned:

400 Invalid status

Status: Fixed and retested.

---

## Finding 5 — PUT Accepted Unknown Fields

Finding ID: API-FIND-005
Area: Employee Update API
Endpoint: PUT /api/v1/employees/{employeeId}
Type: Schema Validation

### Scenario

Send an update request containing a field that is not part of the employee contract.

Example:

{
"unknownField": "test"
}

### Initial Behavior

The API accepted the unknown field.

### Expected Behavior

The API should reject fields that are not defined by the API contract.

Expected response:

400 Bad Request

### Fix

Added validation against the allowed employee fields:

* firstName
* lastName
* email
* department
* role
* status

### Retest

The unknown field returned:

400 Unknown field

Status: Fixed and retested.

---

## Finding 6 — PUT Accepted an Empty Request Body

Finding ID: API-FIND-006
Area: Employee Update API
Endpoint: PUT /api/v1/employees/{employeeId}
Type: Negative Testing

### Scenario

Send a PUT request without any fields in the request body.

### Initial Behavior

The API processed the request.

### Expected Behavior

The API should reject an empty update request.

Expected response:

400 Bad Request

### Fix

Added empty request-body validation.

### Retest

The empty request body returned:

400 Request body cannot be empty

Status: Fixed and retested.

---

## Finding 7 — Invalid Role Accepted During Update

Finding ID: API-FIND-007
Area: Employee Update API
Endpoint: PUT /api/v1/employees/{employeeId}
Type: Field Validation

### Scenario

Update an employee with an invalid role value.

Example:

{
"role": ""
}

### Initial Behavior

The API accepted the invalid role value.

### Expected Behavior

The API should reject an empty or invalid role value.

Expected response:

400 Bad Request

### Fix

Added role validation requiring a non-empty string.

### Retest

The invalid role returned:

400 Invalid role

Status: Fixed and retested.

---

## QA Validation Approach

The findings above were handled using the following QA workflow:

Test Scenario
↓
Execute API Request
↓
Observe Actual Behavior
↓
Compare With API Contract
↓
Document Finding
↓
Implement Fix
↓
Retest
↓
Confirm Expected Behavior

## Scope

These findings were identified during testing of the local Node.js + Express mock API created specifically for this personal QA portfolio project.

They demonstrate practical QA activities including:

* Negative testing
* Boundary testing
* Input validation
* Schema validation
* API contract validation
* Defect identification
* Retesting
* Regression validation

## Important Note

NovaTech Solutions and the Employee Management & Benefits API are fictional.

The findings documented here represent issues identified during development and testing of the local mock API.

They should not be interpreted as defects found in a real production system.
