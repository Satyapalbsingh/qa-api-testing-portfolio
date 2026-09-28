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

During testing of the local mock API, several validation gaps were identified and corrected.

Examples include:

| Finding                                         | Expected Behavior         |
| ----------------------------------------------- | ------------------------- |
| Invalid employee ID format accepted incorrectly | Return `400 Bad Request`  |
| First name exceeding maximum length accepted    | Reject invalid length     |
| Invalid department accepted                     | Reject invalid department |
| Invalid status accepted                         | Reject invalid status     |
| Unknown PUT fields accepted                     | Reject unknown fields     |
| Empty PUT request accepted                      | Reject empty request      |
| Invalid role accepted during update             | Reject invalid role       |

The workflow followed was:

```text
Execute Test
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
Run Regression
```

See:

`defects/sample-api-defects.md`

> These findings were identified in the local portfolio mock API and are not production defects.

---

## 📁 Project Structure

```text
qa-api-testing-portfolio/
│
├── api/
│   ├── data/
│   │   └── employees.json
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── docs/
│   ├── api-test-strategy.md
│   └── api-contract.md
│
├── test-cases/
│   └── api-test-cases.csv
│
├── test-data/
│   └── api-test-data.csv
│
├── postman/
│   ├── NovaTech-Employee-Management-API.postman_collection.json
│   ├── NovaTech-Employee-Management-API.postman_environment.json
│   └── README.md
│
├── results/
│   └── api-test-report.md
│
├── defects/
│   └── sample-api-defects.md
│
└── README.md
```

---

## 📚 Project Documentation

| Document                                        | Description                                  |
| ----------------------------------------------- | -------------------------------------------- |
| [API Test Strategy](docs/api-test-strategy.md)  | API testing approach and strategy            |
| [API Contract](docs/api-contract.md)            | API rules, validation and expected responses |
| [API Test Cases](test-cases/api-test-cases.csv) | 30 designed API test scenarios               |
| [API Test Data](test-data/api-test-data.csv)    | Positive, negative and boundary test data    |
| [Postman README](postman/README.md)             | Postman setup and execution guide            |
| [API Test Report](results/api-test-report.md)   | Test execution and regression results        |
| [QA Findings](defects/sample-api-defects.md)    | Local API findings and fixes                 |

---

## ▶️ Running the Local API

### Prerequisites

Install:

* Node.js
* Postman
* Git

### Start the API

Open Command Prompt and navigate to the API directory:

```cmd
cd api
```

Install dependencies:

```cmd
npm install
```

Start the API:

```cmd
npm start
```

The local API will run at:

```text
http://localhost:3000
```

API base path:

```text
http://localhost:3000/api/v1
```

---

## 📮 Postman Setup

1. Start the local API server.
2. Open Postman.
3. Import the collection:

```text
postman/NovaTech-Employee-Management-API.postman_collection.json
```

4. Import the environment:

```text
postman/NovaTech-Employee-Management-API.postman_environment.json
```

5. Select the environment:

```text
NovaTech Employee Management API - Local
```

6. Run individual requests or execute the **Regression** folder.

---

## 🧭 API Testing Workflow

```text
Understand API Contract
        ↓
Design Test Scenarios
        ↓
Prepare Test Data
        ↓
Execute API Requests
        ↓
Validate Status Codes
        ↓
Validate Response Body
        ↓
Validate Business Rules
        ↓
Identify Findings
        ↓
Implement Fix
        ↓
Retest
        ↓
Run Regression
        ↓
Document Results
```

---

## 💡 QA Skills Demonstrated

This project demonstrates practical knowledge of:

* REST API Testing
* Postman
* CRUD Testing
* API Contract Testing
* Request Validation
* Response Validation
* Negative Testing
* Boundary Testing
* Authentication
* Authorization
* API Chaining
* Dynamic Test Data
* Data Persistence
* Regression Testing
* Defect Analysis
* Retesting
* Test Documentation
* Git & GitHub

---

## 🚀 Future Enhancements

Planned enhancements include:

* Newman CLI execution
* JavaScript API automation
* API automation framework
* Playwright API testing
* API + UI integration testing
* CI/CD pipeline integration
* Automated HTML reporting
* Test execution dashboards
* AI-assisted API test generation
* AI-based API response validation

---

## ⚠️ Disclaimer

This is a personal QA portfolio project created for learning, demonstration, and interview preparation.

NovaTech Solutions and the Employee Management & Benefits API are fictional.

The API is implemented locally using Node.js and Express.

The documented test results represent execution against this local mock API and should not be interpreted as testing, certification, or validation of a real production system.
