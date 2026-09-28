\# QA API Testing Portfolio



A personal QA portfolio project demonstrating REST API testing, Postman automation, CRUD validation, negative testing, boundary testing, authentication, authorization, API chaining, data persistence, and regression testing.



The project uses a fictional Employee Management \& Benefits API built locally with Node.js and Express.



\---



\## Project Objective



The objective of this project is to demonstrate a practical API testing workflow from API requirements and contract definition through test design, execution, defect identification, retesting, and regression validation.



The project focuses on QA activities commonly used in API testing:



\* API test strategy

\* API contract validation

\* REST API testing

\* CRUD testing

\* Positive testing

\* Negative testing

\* Boundary testing

\* Request validation

\* Response validation

\* Authentication testing

\* Authorization testing

\* API chaining

\* Data persistence validation

\* Regression testing

\* Defect identification and retesting



\---



\## Application Under Test



\*\*Application:\*\* Employee Management \& Benefits API



\*\*Company:\*\* NovaTech Solutions



\*\*Application Type:\*\* Fictional REST API



\*\*Execution Environment:\*\* Local Node.js + Express mock API



> \*\*Important:\*\* NovaTech Solutions and the Employee Management \& Benefits API are fictional and created only for this personal QA portfolio project.



\---



\## Technology Stack



| Technology | Purpose                               |

| ---------- | ------------------------------------- |

| Postman    | API testing and automated assertions  |

| Node.js    | Local API runtime                     |

| Express.js | Mock REST API                         |

| JavaScript | API implementation and test scripting |

| JSON       | Local test data persistence           |

| Git        | Version control                       |

| GitHub     | Portfolio repository                  |



\---



\## API Endpoints



| Method | Endpoint                                  | Purpose                        |

| ------ | ----------------------------------------- | ------------------------------ |

| POST   | `/api/v1/employees`                       | Create employee                |

| GET    | `/api/v1/employees`                       | Get all employees              |

| GET    | `/api/v1/employees/{employeeId}`          | Get employee                   |

| PUT    | `/api/v1/employees/{employeeId}`          | Update employee                |

| DELETE | `/api/v1/employees/{employeeId}`          | Delete employee                |

| GET    | `/api/v1/employees/{employeeId}/benefits` | Get employee benefits          |

| GET    | `/api/v1/employees/{employeeId}/leave`    | Get employee leave information |



\---



\## Test Coverage



The project contains test scenarios covering:



\### Functional Testing



\* Create employee

\* Retrieve employee

\* Retrieve all employees

\* Update employee

\* Delete employee

\* Retrieve benefits

\* Retrieve leave information



\### Negative Testing



\* Missing required fields

\* Invalid email

\* Invalid data types

\* Null values

\* Empty values

\* Non-existing employee IDs

\* Invalid employee ID formats

\* Invalid department

\* Invalid status

\* Invalid role

\* Duplicate employee email

\* Empty PUT request

\* Unknown PUT fields



\### Boundary Testing



\* First name minimum length

\* First name maximum length

\* First name exceeding maximum length

\* Last name minimum length

\* Last name maximum length

\* Last name exceeding maximum length



\### Authentication



\* Valid authentication token

\* Missing authentication

\* Invalid authentication token



\### Authorization



\* Admin access

\* Read-only access

\* Read-only restrictions for POST

\* Read-only restrictions for PUT

\* Read-only restrictions for DELETE



\---



\## Postman Regression Testing



The Postman collection contains an end-to-end regression workflow:



```text

Health Check

&#x20;    ↓

Create Employee

&#x20;    ↓

Get Employee

&#x20;    ↓

Update Employee

&#x20;    ↓

Verify Update

&#x20;    ↓

Get Benefits

&#x20;    ↓

Get Leave

&#x20;    ↓

Delete Employee

&#x20;    ↓

Verify Deleted Employee

```



\### Regression Result



\*\*45/45 Postman assertions passed\*\*



The regression flow validates the employee lifecycle from creation through deletion and verifies API behavior across dependent requests.



\---



\## API Chaining



The project demonstrates dynamic API chaining using Postman collection variables.



Example:



```text

POST /employees

&#x20;      ↓

Save generated employeeId

&#x20;      ↓

GET /employees/{employeeId}

&#x20;      ↓

PUT /employees/{employeeId}

&#x20;      ↓

GET /employees/{employeeId}

&#x20;      ↓

DELETE /employees/{employeeId}

&#x20;      ↓

GET /employees/{employeeId}

&#x20;      ↓

404 Employee Not Found

```



The employee ID generated during the Create Employee request is automatically stored and reused by subsequent requests.



This demonstrates dynamic test-data handling and request dependency management.



\---



\## Authentication \& Authorization



The fictional API supports two access levels:



\### ADMIN



Allowed operations:



\* GET

\* POST

\* PUT

\* DELETE



\### READ\_ONLY



Allowed operations:



\* GET



Restricted operations:



\* POST

\* PUT

\* DELETE



The Postman collection contains tests for valid, missing, and invalid authentication as well as role-based authorization.



\---



\## QA Findings



During testing of the local mock API, several validation gaps were identified and corrected.



Examples include:



\* Invalid employee ID formats returning the wrong status code

\* First name length exceeding the defined limit

\* Invalid department values being accepted

\* Invalid status values being accepted

\* Unknown fields being accepted during PUT

\* Empty PUT requests being accepted

\* Invalid role values being accepted during update



The findings were documented, fixes were implemented in the local API, and the affected scenarios were retested.



See:



`defects/sample-api-defects.md`



> These are findings from the local portfolio mock API and are not production defects.



\---



\## Project Structure



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

│   ├── NovaTech-Employee-Management-API.postman\_collection.json

│   ├── NovaTech-Employee-Management-API.postman\_environment.json

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



\---



\## Test Documentation



\### API Test Strategy



`docs/api-test-strategy.md`



Contains the overall API testing approach, scope, testing types, execution strategy, defect management, and QA metrics.



\### API Contract



`docs/api-contract.md`



Defines:



\* Request and response expectations

\* Data validation rules

\* Authentication

\* Authorization

\* Status codes

\* Error structure

\* Boundary rules



\### Test Cases



`test-cases/api-test-cases.csv`



Contains \*\*30 designed API test cases\*\* covering positive, negative, boundary, authentication, authorization, and regression scenarios.



\### Test Data



`test-data/api-test-data.csv`



Contains test data for positive, negative, boundary, duplicate, authentication, and authorization scenarios.



\### Postman Collection



`postman/NovaTech-Employee-Management-API.postman\_collection.json`



Contains API requests and automated post-response validation scripts.



\### Test Report



`results/api-test-report.md`



Contains the API test execution summary, validation activities, findings, regression results, and future improvements.



\### Defect Findings



`defects/sample-api-defects.md`



Contains documented findings identified while testing the local mock API.



\---



\## Running the Local API



\### Prerequisites



Install:



\* Node.js

\* Postman

\* Git



\### Start the API



Open Command Prompt and navigate to:



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



The local API runs at:



```text

http://localhost:3000

```



API base path:



```text

http://localhost:3000/api/v1

```



\---



\## Postman Setup



1\. Start the local API server.

2\. Open Postman.

3\. Import the collection:



```text

postman/NovaTech-Employee-Management-API.postman\_collection.json

```



4\. Import the environment:



```text

postman/NovaTech-Employee-Management-API.postman\_environment.json

```



5\. Select:



```text

NovaTech Employee Management API - Local

```



6\. Run the requests individually or execute the Regression folder.



\---



\## API Test Execution Approach



The testing workflow used in this project is:



```text

Understand API Contract

&#x20;       ↓

Design Test Scenarios

&#x20;       ↓

Prepare Test Data

&#x20;       ↓

Execute API Requests

&#x20;       ↓

Validate Status Codes

&#x20;       ↓

Validate Response Body

&#x20;       ↓

Validate Business Rules

&#x20;       ↓

Identify Findings

&#x20;       ↓

Implement Fix

&#x20;       ↓

Retest

&#x20;       ↓

Run Regression

&#x20;       ↓

Document Results

```



\---



\## Key QA Skills Demonstrated



This project demonstrates practical experience in:



\* REST API testing

\* Postman

\* CRUD testing

\* API contract testing

\* Request validation

\* Response validation

\* Negative testing

\* Boundary testing

\* Authentication

\* Authorization

\* API chaining

\* Dynamic test data

\* Data persistence

\* Regression testing

\* Defect analysis

\* Root-cause-oriented validation

\* Test documentation

\* Git and GitHub



\---



\## Future Enhancements



Planned enhancements for this portfolio include:



\* Newman CLI execution

\* JavaScript-based API automation

\* API automation framework

\* Playwright API testing

\* API + UI integration testing

\* CI/CD pipeline integration

\* Automated HTML reporting

\* Test execution dashboards

\* AI-assisted API test generation

\* AI-based API response validation



\---



\## Disclaimer



This is a personal QA portfolio project created for learning, demonstration, and interview preparation.



NovaTech Solutions and the Employee Management \& Benefits API are fictional.



The API is implemented locally using Node.js and Express.



The documented test results represent execution against this local mock API and should not be interpreted as testing, certification, or validation of a real production system.



