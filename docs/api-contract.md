# Employee Management & Benefits API Contract

## 1. Overview

This document defines the expected behavior and data contract for the fictional **Employee Management & Benefits API**.

> **Project Type:** Personal QA Portfolio Project
> **Application:** Employee Management & Benefits API
> **Company:** NovaTech Solutions (Fictional)

This contract is used as the source of truth for API test design and execution.

---

## 2. Base URL

For this portfolio project, the API base URL is:

```text
https://api.novatech.example/v1
```

> This is a fictional/example URL and is not a real production API.

---

## 3. Employee Object

An employee record contains:

| Field      | Data Type | Required | Description                |
| ---------- | --------- | -------- | -------------------------- |
| employeeId | String    | Yes      | Unique employee identifier |
| firstName  | String    | Yes      | Employee first name        |
| lastName   | String    | Yes      | Employee last name         |
| email      | String    | Yes      | Unique employee email      |
| department | String    | Yes      | Employee department        |
| role       | String    | Yes      | Employee job role          |
| status     | String    | Yes      | Employment status          |

### Allowed Status Values

```text
ACTIVE
INACTIVE
```

### Supported Departments

```text
Engineering
QA
Finance
HR
Product
```

---

## 4. Field Validation Rules

### employeeId

* Must be a string
* Must be unique
* Format:

```text
EMP + 4 digits
```

Examples:

```text
EMP1001
EMP1002
EMP9999
```

### firstName

* Required
* Must be a string
* Minimum length: 2 characters
* Maximum length: 50 characters
* Must not be empty
* Must not be null

### lastName

* Required
* Must be a string
* Minimum length: 2 characters
* Maximum length: 50 characters
* Must not be empty
* Must not be null

### email

* Required
* Must be a string
* Must follow a valid email format
* Must be unique
* Must not be empty
* Must not be null

Example:

```text
rahul.sharma@example.com
```

### department

* Required
* Must be a string
* Must contain one of the supported department values

### role

* Required
* Must be a string
* Must not be empty

### status

* Required
* Must be either:

```text
ACTIVE
INACTIVE
```

---

## 5. Authentication

The API uses Bearer Token authentication.

Example:

```text
Authorization: Bearer <access-token>
```

Requests that require authentication must include a valid access token.

### Authentication Rules

| Scenario      |  Expected Status |
| ------------- | ---------------: |
| Valid token   |  Request allowed |
| Missing token | 401 Unauthorized |
| Invalid token | 401 Unauthorized |
| Expired token | 401 Unauthorized |

---

## 6. Authorization

The API supports role-based access.

### ADMIN

Can:

* View employees
* Create employees
* Update employees
* Delete employees
* View benefits
* View leave information

### READ_ONLY

Can:

* View employees
* View benefits
* View leave information

Cannot:

* Create employees
* Update employees
* Delete employees

### Authorization Rules

| User Role | GET     | POST      | PUT       | DELETE    |
| --------- | ------- | --------- | --------- | --------- |
| ADMIN     | Allowed | Allowed   | Allowed   | Allowed   |
| READ_ONLY | Allowed | Forbidden | Forbidden | Forbidden |

---

# 7. Employee Endpoints

## 7.1 Create Employee

```text
POST /employees
```

### Request Headers

```text
Content-Type: application/json
Authorization: Bearer <access-token>
```

### Request Body

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

### Success Response

**Status:**

```text
201 Created
```

Example:

```json
{
  "employeeId": "EMP1001",
  "firstName": "Rahul",
  "lastName": "Sharma",
  "email": "rahul.sharma@example.com",
  "department": "Engineering",
  "role": "Software Engineer",
  "status": "ACTIVE"
}
```

---

## 7.2 Get All Employees

```text
GET /employees
```

### Success Response

**Status:**

```text
200 OK
```

Example:

```json
[
  {
    "employeeId": "EMP1001",
    "firstName": "Rahul",
    "lastName": "Sharma",
    "email": "rahul.sharma@example.com",
    "department": "Engineering",
    "role": "Software Engineer",
    "status": "ACTIVE"
  }
]
```

---

## 7.3 Get Employee By ID

```text
GET /employees/{employeeId}
```

Example:

```text
GET /employees/EMP1001
```

### Success

```text
200 OK
```

### Employee Not Found

```text
404 Not Found
```

---

## 7.4 Update Employee

```text
PUT /employees/{employeeId}
```

Example:

```text
PUT /employees/EMP1001
```

### Request Body

```json
{
  "firstName": "Rahul",
  "lastName": "Sharma",
  "email": "rahul.sharma@example.com",
  "department": "QA",
  "role": "Senior QA Engineer",
  "status": "ACTIVE"
}
```

### Success

```text
200 OK
```

---

## 7.5 Delete Employee

```text
DELETE /employees/{employeeId}
```

Example:

```text
DELETE /employees/EMP1001
```

### Success

```text
204 No Content
```

### Employee Not Found

```text
404 Not Found
```

---

# 8. Benefits Endpoint

```text
GET /employees/{employeeId}/benefits
```

Example:

```text
GET /employees/EMP1001/benefits
```

### Success

```text
200 OK
```

Example response:

```json
{
  "employeeId": "EMP1001",
  "healthInsurance": true,
  "lifeInsuranceCoverage": 1000000,
  "learningAllowance": 25000,
  "internetAllowance": 1000
}
```

---

# 9. Leave Endpoint

```text
GET /employees/{employeeId}/leave
```

Example:

```text
GET /employees/EMP1001/leave
```

### Success

```text
200 OK
```

Example response:

```json
{
  "employeeId": "EMP1001",
  "annualLeaveEntitlement": 20,
  "carryForwardLimit": 5
}
```

---

# 10. Standard Error Response

The API should return a consistent error structure.

Example:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

---

# 11. Expected HTTP Status Codes

| Status Code | Meaning                            |
| ----------- | ---------------------------------- |
| 200         | Successful request                 |
| 201         | Resource created                   |
| 204         | Resource successfully deleted      |
| 400         | Invalid request                    |
| 401         | Authentication required or invalid |
| 403         | Insufficient permissions           |
| 404         | Resource not found                 |
| 409         | Duplicate/conflicting resource     |
| 500         | Unexpected server error            |

---

# 12. Content Type

Requests containing JSON data must use:

```text
Content-Type: application/json
```

Expected JSON responses should return:

```text
Content-Type: application/json
```

---

# 13. Boundary Rules

The following field limits apply:

### firstName

```text
Minimum: 2 characters
Maximum: 50 characters
```

### lastName

```text
Minimum: 2 characters
Maximum: 50 characters
```

### employeeId

```text
EMP + 4 digits
```

Examples:

```text
EMP1001
EMP9999
```

---

# 14. Duplicate Employee Rules

Employee email addresses must be unique.

If an employee is created using an email address that already exists, the API should return:

```text
409 Conflict
```

---

# 15. Test Environment Assumption

This API contract defines the expected behavior of the fictional API for portfolio testing.

The contract is used to create test cases and expected results before actual API execution.

No production API is represented by this project.

---

# 16. Contract Version

**Version:** 1.0

**Status:** Test Automation Preparation

**Last Updated:** September 2026
