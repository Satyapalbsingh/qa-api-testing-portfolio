# API Test Execution Report

## 1. Project Overview

This document summarizes the API tests executed against the local mock API developed for the personal QA portfolio project **Employee Management & Benefits API**.

**Application:** Employee Management & Benefits API
**Company:** NovaTech Solutions *(fictional)*
**Environment:** Local mock API
**Base URL:** `http://localhost:3000/api/v1`
**Testing Tool:** Postman
**API Implementation:** Node.js + Express
**Test Data:** JSON-based local data store

> **Disclaimer:** This is a personal QA portfolio project using a fictional application and fictional company. The results represent testing performed against a locally developed mock API and should not be interpreted as production API testing or production-level certification.

---

## 2. Test Scope

The executed testing covered:

* REST API functional testing
* CRUD operations
* Positive testing
* Negative testing
* Boundary testing
* Request validation
* Response validation
* Authentication
* Authorization
* Duplicate data validation
* Employee ID validation
* API chaining / persistence verification
* Benefits API
* Leave API
* DELETE endpoint regression testing

---

## 3. Test Environment

| Item            | Details                            |
| --------------- | ---------------------------------- |
| API             | Employee Management & Benefits API |
| Environment     | Local                              |
| Host            | `localhost`                        |
| Port            | `3000`                             |
| Client          | Postman                            |
| Authentication  | Bearer Token                       |
| Admin Token     | `admin-token`                      |
| Read-only Token | `readonly-token`                   |
| Data Store      | `employees.json`                   |
| API Framework   | Express.js                         |
| Runtime         | Node.js                            |

---

## 4. Execution Summary

The executed tests covered the major functional and validation areas of the API.

| Area                            | Execution Result |
| ------------------------------- | ---------------- |
| Health Check                    | PASS             |
| Employee CRUD                   | PASS             |
| Benefits API                    | PASS             |
| Leave API                       | PASS             |
| Authentication                  | PASS             |
| Authorization                   | PASS             |
| Negative Testing                | PASS             |
| Boundary Validation             | PASS             |
| Employee ID Validation          | PASS             |
| Duplicate Email Validation      | PASS             |
| PUT Validation                  | PASS             |
| DELETE Validation               | PASS             |
| DELETE Persistence Verification | PASS             |

The results above represent the executed scenarios documented in this portfolio and are not a claim that every test case in the complete 30-case test suite was executed.

---

# 5. Executed Test Scenarios

## 5.1 Health Check

### GET `/`

**Expected:** `200 OK`

**Actual:** `200 OK`

Response confirmed:

```json
{
  "message": "NovaTech Employee Management API is running"
}
```

**Result:** PASS

---

## 5.2 Employee CRUD Testing

### Create Employee

**POST** `/employees`

A valid employee was created successfully.

Example:

```json
{
  "firstName": "Rahul",
  "lastName": "Sharma",
  "email": "rahul.sharma@example.com",
  "department": "Engineering",
  "role": "Software Engineer",
  "status": "ACTIVE"
}
```

**Expected:** `201 Created`

**Result:** PASS

---

### Get All Employees

**GET** `/employees`

**Expected:** `200 OK`

**Result:** PASS

---

### Get Employee by ID

**GET** `/employees/EMP1001`

**Expected:** `200 OK`

**Result:** PASS

---

### Get Non-existing Employee

**GET** `/employees/EMP9999`

**Expected:** `404 Not Found`

**Result:** PASS

---

### Update Employee

**PUT** `/employees/{employeeId}`

Employee department and role were updated successfully.

**Expected:** `200 OK`

Persistence was verified using a subsequent GET request.

**Result:** PASS

---

### Delete Employee

A dedicated employee was created for DELETE validation:

```json
{
  "employeeId": "EMP1011",
  "firstName": "Delete",
  "lastName": "Test",
  "email": "delete.test@example.com",
  "department": "QA",
  "role": "QA Engineer",
  "status": "ACTIVE"
}
```

**DELETE** `/employees/EMP1011`

**Expected:** `204 No Content`

**Actual:** `204 No Content`

**Result:** PASS

A subsequent GET request confirmed that the employee was no longer available.

**GET** `/employees/EMP1011`

**Expected:** `404 Not Found`

**Result:** PASS

---

# 6. Authentication Testing

The API uses Bearer Token authentication.

### No Authentication

**GET** `/employees`

**Expected:** `401 Unauthorized`

**Actual:**

```json
{
  "error": "Authentication required"
}
```

**Result:** PASS

---

### Invalid Token

**GET** `/employees`

An invalid token was supplied.

**Expected:** `401 Unauthorized`

**Actual:**

```json
{
  "error": "Invalid or expired token"
}
```

**Result:** PASS

---

### Valid Admin Token

**GET** `/employees`

Using:

```text
admin-token
```

**Expected:** `200 OK`

**Result:** PASS

---

### Valid Read-Only Token

**GET** `/employees`

Using:

```text
readonly-token
```

**Expected:** `200 OK`

**Result:** PASS

---

# 7. Authorization Testing

## READ_ONLY POST

A READ_ONLY user attempted to create an employee.

**Expected:** `403 Forbidden`

**Result:** PASS

---

## READ_ONLY PUT

A READ_ONLY user attempted to update an employee.

**Expected:** `403 Forbidden`

**Result:** PASS

---

## READ_ONLY DELETE

A READ_ONLY user attempted to delete an employee.

**Expected:** `403 Forbidden`

**Result:** PASS

---

## ADMIN POST

An ADMIN user successfully created an employee.

**Expected:** `201 Created`

**Result:** PASS

---

## ADMIN PUT

An ADMIN user successfully updated an employee.

**Expected:** `200 OK`

**Result:** PASS

---

## ADMIN DELETE

An ADMIN user successfully deleted an employee.

**Expected:** `204 No Content`

**Result:** PASS

---

# 8. Negative Testing

The following negative scenarios were executed.

| Scenario                            | Expected Status | Result |
| ----------------------------------- | --------------: | ------ |
| Missing required field              |             400 | PASS   |
| Invalid email format                |             400 | PASS   |
| Invalid firstName type              |             400 | PASS   |
| Invalid lastName type               |             400 | PASS   |
| Empty/null firstName                |             400 | PASS   |
| Empty/null lastName                 |             400 | PASS   |
| Invalid department                  |             400 | PASS   |
| Invalid status                      |             400 | PASS   |
| Invalid role                        |             400 | PASS   |
| Duplicate email                     |             409 | PASS   |
| Duplicate email with different case |             409 | PASS   |
| Non-existing employee               |             404 | PASS   |
| Invalid employee ID format          |             400 | PASS   |
| Invalid authentication token        |             401 | PASS   |
| Missing authentication              |             401 | PASS   |
| READ_ONLY write operation           |             403 | PASS   |

---

# 9. Boundary Testing

Boundary validation was performed for employee name fields.

## firstName

| Input         | Expected | Result |
| ------------- | -------- | ------ |
| 1 character   | 400      | PASS   |
| 2 characters  | Accepted | PASS   |
| 50 characters | Accepted | PASS   |
| 51 characters | 400      | PASS   |

## lastName

| Input         | Expected | Result |
| ------------- | -------- | ------ |
| 1 character   | 400      | PASS   |
| 2 characters  | Accepted | PASS   |
| 50 characters | Accepted | PASS   |
| 51 characters | 400      | PASS   |

---

# 10. PUT Request Validation

PUT validation included:

* Invalid email format
* Duplicate email
* Invalid firstName
* Invalid lastName
* Invalid department
* Invalid status
* Invalid role
* Empty request body
* Unknown request fields
* Invalid employee ID format
* Non-existing employee
* Employee ID modification attempt
* Multi-field update
* Boundary values

The valid update scenarios were also verified through subsequent GET requests to confirm persistence.

---

# 11. Benefits API Testing

### GET `/employees/{employeeId}/benefits`

Valid employee:

**Expected:** `200 OK`

**Result:** PASS

The response included benefit information such as:

* Health insurance
* Life insurance coverage
* Learning allowance
* Internet allowance

### Negative Testing

Invalid employee ID format:

**Expected:** `400 Bad Request`

**Result:** PASS

Non-existing employee:

**Expected:** `404 Not Found`

**Result:** PASS

Missing authentication:

**Expected:** `401 Unauthorized`

**Result:** PASS

---

# 12. Leave API Testing

### GET `/employees/{employeeId}/leave`

Valid employee:

**Expected:** `200 OK`

**Result:** PASS

The response included:

* Annual leave entitlement
* Carry-forward limit

### Negative Testing

Invalid employee ID format:

**Expected:** `400 Bad Request`

**Result:** PASS

Non-existing employee:

**Expected:** `404 Not Found`

**Result:** PASS

Missing authentication:

**Expected:** `401 Unauthorized`

**Result:** PASS

---

# 13. DELETE Endpoint Regression Testing

The DELETE endpoint was specifically tested across authentication, authorization, validation, negative, positive, and persistence scenarios.

| Scenario                    | Expected | Actual | Result |
| --------------------------- | -------: | -----: | ------ |
| No token                    |      401 |    401 | PASS   |
| Invalid token               |      401 |    401 | PASS   |
| READ_ONLY token             |      403 |    403 | PASS   |
| Invalid ID `12345`          |      400 |    400 | PASS   |
| Non-existing `EMP9999`      |      404 |    404 | PASS   |
| Existing employee `EMP1011` |      204 |    204 | PASS   |
| GET after deletion          |      404 |    404 | PASS   |

This confirmed both the deletion response and the resulting resource state.

---

# 14. API Chaining / Persistence Validation

Multiple scenarios used a request sequence to validate state changes.

Example:

```text
POST Employee
      ↓
GET Employee
      ↓
PUT Employee
      ↓
GET Employee
      ↓
DELETE Employee
      ↓
GET Employee
```

The sequence was used to verify that:

* Created employees could be retrieved.
* Updated employee information persisted.
* Deleted employees were no longer retrievable.

**Result:** PASS

---

# 15. Validation Improvements Identified During Testing

During testing of the local mock API, several validation gaps were identified and subsequently addressed in the API implementation.

Examples included:

* firstName length validation
* lastName length validation
* department validation
* status validation
* employee ID format validation
* PUT email validation
* PUT firstName/lastName validation
* PUT role validation
* empty PUT body validation
* unknown PUT field validation

These findings demonstrate the use of **test execution → defect identification → code correction → retesting** within the portfolio project.

> These were findings in the local portfolio mock API and should not be interpreted as defects in a real production system.

---

# 16. Test Data

Test data included:

* Valid employee records
* Invalid email values
* Invalid field types
* Empty and null values
* Boundary-length names
* Duplicate emails
* Invalid employee IDs
* Non-existing employee IDs
* Authentication tokens
* Authorization scenarios
* Valid and invalid departments
* Valid and invalid status values

---

# 17. Defect / Finding Management

Testing identified validation gaps during development of the local mock API.

The findings were used to improve the mock API implementation and were followed by retesting.

Examples:

```text
Invalid boundary value accepted
        ↓
Validation added
        ↓
Test executed again
        ↓
Expected 400 response received
```

This demonstrates a basic QA defect lifecycle within the portfolio project.

---

# 18. Tools Used

* Postman
* Node.js
* Express.js
* JavaScript
* JSON
* Git
* GitHub

---

# 19. QA Testing Approach Demonstrated

This project demonstrates practical experience with:

* Test planning
* API test design
* Positive testing
* Negative testing
* Boundary testing
* CRUD testing
* Authentication testing
* Authorization testing
* Request validation
* Response validation
* Data validation
* API chaining
* Persistence verification
* Regression testing
* Defect identification
* Retesting
* Test documentation

---

# 20. Final Notes

The API testing project is designed as a personal QA portfolio demonstrating API testing concepts and practical test execution using a locally developed mock API.

The execution results documented here are limited to scenarios actually tested during development and should not be interpreted as complete coverage of the entire API test-case suite.

Future enhancements may include:

* Automated API tests
* Postman collection execution through Newman
* CI/CD integration
* API performance testing
* Automated reporting
* OpenAPI/Swagger integration
* Playwright API automation
* Integration with the AI/LLM QA portfolio project

---

## Project Status

**API Testing Portfolio: Test Execution Completed**

Next planned activities:

1. Finalize Postman collection
2. Add automated Postman assertions
3. Export Postman collection/environment
4. Add API test report to GitHub
5. Add sample API findings documentation
6. Create project README
7. Integrate API testing with Playwright automation
