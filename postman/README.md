# Postman API Testing

This folder contains the Postman collection and environment used for testing the fictional NovaTech Employee Management & Benefits API.

## Project

The API testing project covers:

* REST API testing
* CRUD operations
* Request and response validation
* Positive testing
* Negative testing
* Boundary testing
* Authentication
* Authorization
* API chaining
* Data persistence
* Regression testing

## Files

### Postman Collection

`NovaTech-Employee-Management-API.postman_collection.json`

Contains the complete Postman API request collection, including request configurations and automated post-response test scripts.

### Postman Environment

`NovaTech-Employee-Management-API.postman_environment.json`

Contains the local environment variables required to execute the API collection.

## Prerequisites

Before running the Postman collection:

1. Install Node.js.
2. Install Postman.
3. Clone or download this repository.
4. Start the local API server.

## Start the Local API

Navigate to the API directory:

```bash
cd api
```

Install the required dependencies:

```bash
npm install
```

Start the local API server:

```bash
node server.js
```

The local API runs at:

```text
http://localhost:3000
```

The API base path is:

```text
http://localhost:3000/api/v1
```

## Import into Postman

### 1. Import the Collection

Open Postman and select:

`Import`

Then select:

`NovaTech-Employee-Management-API.postman_collection.json`

### 2. Import the Environment

Import:

`NovaTech-Employee-Management-API.postman_environment.json`

### 3. Select the Environment

From the Postman environment selector, select:

`NovaTech Employee Management API - Local`

## Environment Variables

The local environment contains the following variables:

| Variable        | Purpose                        |
| --------------- | ------------------------------ |
| `baseUrl`       | Local API base URL             |
| `adminToken`    | Admin authentication token     |
| `readonlyToken` | Read-only authentication token |

Dynamic employee IDs such as `employeeId` and `regressionEmployeeId` are managed as collection variables by Postman scripts.

## Regression Testing

The `Regression` folder contains an end-to-end API regression flow:

1. Health Check
2. Create Employee
3. Get Employee
4. Update Employee
5. Verify Update
6. Get Benefits
7. Get Leave
8. Delete Employee
9. Verify Deleted Employee

### Regression Result

The regression suite currently contains:

**45/45 assertions passing**

The regression flow validates the complete employee lifecycle from creation through deletion.

## API Chaining

The collection demonstrates dynamic API chaining.

Example flow:

```text
Create Employee
       ↓
Save employeeId
       ↓
Get Employee
       ↓
Update Employee
       ↓
Verify Update
       ↓
Delete Employee
       ↓
Verify Deleted Employee
```

The employee ID generated during the Create Employee request is automatically stored as a collection variable and reused by subsequent requests.

This demonstrates dynamic test-data handling and request dependency management in Postman.

## Authentication and Authorization

The collection includes testing for:

* Valid authentication
* Missing authentication
* Invalid authentication token
* Admin user access
* Read-only user access
* Unauthorized write operations

Expected authentication and authorization behavior is defined by the fictional API contract.

## Test Coverage

The Postman collection includes coverage for:

* CRUD operations
* Positive scenarios
* Negative scenarios
* Boundary validation
* Required-field validation
* Email validation
* Department validation
* Status validation
* Authentication
* Authorization
* Duplicate data validation
* Invalid employee IDs
* Response validation
* Error response validation
* API chaining
* Data persistence
* Regression testing

## Automated Test Scripts

Postman post-response scripts are used to validate:

* HTTP status codes
* Response fields
* Response values
* Employee IDs
* Error messages
* Update persistence
* Delete behavior
* API health
* Authentication behavior
* Authorization behavior

## Example API Flow

A typical employee API workflow is:

```text
POST /employees
      ↓
Employee Created
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

This validates both functional behavior and data persistence across dependent API operations.

## Local API Technology

The local mock API was created using:

* Node.js
* Express.js
* JavaScript
* JSON-based local data storage

Postman is used for API execution and automated response validation.

## Important Note

This is a personal QA portfolio project created for learning and demonstration purposes.

NovaTech Solutions and the Employee Management & Benefits API are fictional.

The API runs locally using Node.js and Express.

The documented test results represent execution against this local mock API and should not be interpreted as testing, certification, or validation of a real production system.
