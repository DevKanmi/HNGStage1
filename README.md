# HNG-STAGE 1 TASK

### Description

Task Description
Create an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

Resources
- Fun fact API: http://numbersapi.com/#42
- https://en.wikipedia.org/wiki/Parity_(mathematics)

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Npm](https://yarnpkg.com/en/docs/install) - A package manager for your code.


### Installation

Clone the repository to your local machine

```bash
git clone <repository-name>

cd <repository-name>

npm install
```

### Environment Variables

Use the .env.example file to create a .env file in the root directory of the project.

```bash
cp .example.env .env
```

### Start the application

To start the application in development mode, run the following command:

```bash
npm run dev
```

To start the application in production mode, run the following command:

```bash
npm run start
```

<br>

### API Specificaton
ENDPOINT: GET https://hngstage1-m1hg.onrender.com/api/classify-number?number=371

#### Response format
 ```bash
 {
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": [
    "armstrong",
    "odd"
  ],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
 ```

 ### Depoloyment
 Deployed publicly at: https://hngstage1-m1hg.onrender.com

### Additional Resources
Hiring a Node.js Developer? check out:
https://hng.tech/hire/nodejs-developers
