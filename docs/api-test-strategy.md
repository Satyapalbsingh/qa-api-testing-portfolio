# API Test Strategy

## 1. Document Overview

This document defines the QA strategy for testing the fictional **Employee Management & Benefits API**.

> **Project Type:** Personal QA Portfolio Project
> **Application:** Employee Management & Benefits API
> **Company:** NovaTech Solutions (Fictional)

The objective is to demonstrate practical API testing skills using REST APIs, HTTP methods, request/response validation, negative testing, authentication, data validation, and regression testing.

---

## 2. Testing Objectives

The main objectives are to verify that the API:

* Returns accurate and expected responses
* Uses correct HTTP status codes
* Validates request data correctly
* Handles invalid requests gracefully
* Maintains data integrity
* Enforces authentication and authorization rules
* Returns the expected JSON response structure
* Handles missing or invalid parameters
* Handles boundary conditions
* Provides meaningful error responses
* Maintains consistent behavior across regression cycles

---

## 3. Application Overview

The fictional application provides APIs for managing employee information and retrieving employee-related benefits and leave information.

### Employee APIs

```text
POST   /employees
GET    /employees
GET    /employees/{id}
PUT    /employees/{id}
DELETE /employees/{id}
```

### Benefits API

```text
GET    /employees/{id}/benefits
```

### Leave API

```text
GET    /employees/{id}/leave
```

---

## 4. API Testing Scope

### 4.1 Functional API Testing

Validate:

* HTTP methods
* Request parameters
* Request body
* Response body
* HTTP status codes
* Response headers
* CRUD operations
* Business rules

### 4.2 Positive Testing

Verify that the API behaves correctly with valid:

* Request bodies
* Parameters
* Employee IDs
* Authentication credentials
* Data combinations

### 4.3 Negative Testing

Verify API behavior for:

* Missing required fields
* Invalid data types
* Invalid employee IDs
* Invalid parameters
* Empty request bodies
* Malformed JSON
* Unsupported HTTP methods
* Unauthorized requests

### 4.4 Boundary Testing

Test values at and around defined limits.

Examples:

* Minimum and maximum field lengths
* Minimum and maximum numeric values
* Empty strings
* Null values
* Large input values

### 4.5 Data Validation

Validate:

* Required fields
* Data types
* Field formats
* Unique employee IDs
* Response values
* Data consistency between requests and responses

### 4.6 Authentication Testing

Verify:

* Valid authentication credentials
* Missing authentication
* Invalid authentication
* Expired/invalid tokens where applicable

### 4.7 Authorization Testing

Verify that users can access only the resources permitted for their role.

Example scenarios:

* Authorized user accessing employee information
* Unauthorized user attempting to access restricted information
* User attempting to modify resources without required permissions

### 4.8 Error Handling

Verify that the API:

* Returns appropriate HTTP status codes
* Provides meaningful error messages
* Does not expose unnecessary internal information
* Handles invalid requests gracefully

### 4.9 Regression Testing

Previously validated API functionality will be re-tested after changes to ensure that existing behavior has not been broken.

---

## 5. HTTP Methods

The following HTTP methods will be covered:

| Method | Purpose                       |
| ------ | ----------------------------- |
| GET    | Retrieve employee information |
| POST   | Create a new employee         |
| PUT    | Update an existing employee   |
| DELETE | Delete an employee            |

---

## 6. HTTP Status Code Validation

Expected status codes will be validated based on the API operation.

Examples:

| Status Code | Meaning               | Example                              |
| ----------- | --------------------- | ------------------------------------ |
| 200         | OK                    | Successful GET/PUT request           |
| 201         | Created               | Successful employee creation         |
| 204         | No Content            | Successful deletion where applicable |
| 400         | Bad Request           | Invalid request data                 |
| 401         | Unauthorized          | Missing/invalid authentication       |
| 403         | Forbidden             | Insufficient permissions             |
| 404         | Not Found             | Employee does not exist              |
| 409         | Conflict              | Duplicate/conflicting data           |
| 500         | Internal Server Error | Unexpected server-side failure       |

> Actual expected status codes will be validated against the API contract when the API implementation is available.

---

## 7. Request Validation

The following request components will be validated:

* HTTP method
* Endpoint URL
* Path parameters
* Query parameters
* Request headers
* Authentication
* Request body
* Content-Type

Example:

```json
{
  "firstName": "Rahul",
  "lastName": "Sharma",
  "email": "rahul.sharma@example.com",
  "department": "Engineering"
}
```

---

## 8. Response Validation

API responses will be validated for:

### Status Code

Verify that the returned HTTP status code matches the expected behavior.

### Response Body

Verify:

* Required fields
* Expected values
* Data types
* Nested objects
* Arrays
* Null handling

### Response Headers

Validate important headers such as:

* Content-Type
* Authorization-related headers where applicable
* Cache-related headers where applicable

### Response Time

Verify that API responses are returned within the defined performance expectation.

> Response-time thresholds will be defined once the API behavior and test environment are available.

---

## 9. CRUD Testing

The project will cover complete CRUD functionality.

```text
Create
  ↓
Read
  ↓
Update
  ↓
Read Updated Data
  ↓
Delete
  ↓
Verify Deletion
```

This allows API workflows to be validated across multiple dependent requests.

---

## 10. API Test Data Strategy

Test data will include:

### Valid Data

* Valid employee information
* Valid email addresses
* Valid department values
* Valid employee IDs

### Invalid Data

* Invalid email formats
* Missing required fields
* Invalid employee IDs
* Incorrect data types
* Empty values
* Null values

### Boundary Data

* Minimum allowed values
* Maximum allowed values
* Values just below the minimum
* Values just above the maximum

### Duplicate Data

Examples:

* Duplicate employee email
* Duplicate employee ID where applicable

---

## 11. API Security Testing

Basic API security scenarios will be included.

