# Fillout Take Home Assessment

This service provides an integration layer between your application and the Fillout form response API, enabling users to retrieve and filter form responses based on specific criteria.

## Features

- Retrieve form responses from Fillout API.
- Filter responses based on various conditions (e.g., name, date, department).
- Pagination support to manage large datasets.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)
- An API key from Fillout

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mn-coding-cop/Fillout-assessment.git
cd your-project-name
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Fillout API key:

```env
API_KEY=your_fillout_api_key
```

4. Start the server:

```bash
npm start
```

The server will start running on `http://localhost:5000`.

## Usage

Send a GET request to `/[formId]/filteredResponses` to retrieve filtered responses. Filters and other query parameters can be added as needed.

Example:

```url
1. Filter responses where the name is 'Jane':
```

http://localhost:5000/cLZojxk94ous/filteredResponses?filters=[{"id":"bE2Bo4cGUv49cjnqZ4UnkW","condition":"equals","value":"Jane"}]

```

2. Filter responses where the yearly check-in date is before '2024-01-01':
```

http://localhost:5000/cLZojxk94ous/filteredResponses?filters=[{"id":"dSRAe3hygqVwTpPK69p5td","condition":"less_than","value":"2024-01-01"}]

```

3. Filter responses where the number of employees working under the respondent is more than 10:
```

http://localhost:5000/cLZojxk94ous/filteredResponses?filters=[{"id":"fFnyxwWa3KV6nBdfBDCHEA","condition":"greater_than","value":10}]

```

4. Filter responses where the department is 'Engineering' and the yearly check-in date is after '2024-01-01':
```

http://localhost:5000/cLZojxk94ous/filteredResponses?filters=[{"id":"jB2qDRcXQ8Pjo1kg3jre2J","condition":"equals","value":"Engineering"},{"id":"dSRAe3hygqVwTpPK69p5td","condition":"greater_than","value":"2024-01-01"}]

```

5. Filter responses where the email address contains 'fillout.com':
```

http://localhost:5000/cLZojxk94ous/filteredResponses?filters=[{"id":"kc6S6ThWu3cT5PVZkwKUg4","condition":"equals","value":"fillout.com"}]

```

6. Filter responses where the name is not 'Billy':
```

http://localhost:5000/cLZojxk94ous/filteredResponses?filters=[{"id":"bE2Bo4cGUv49cjnqZ4UnkW","condition":"does_not_equal","value":"Billy"}]

```

7. Filter responses where the number of employees working under the respondent is less than or equal to 0:
```

http://localhost:5000/cLZojxk94ous/filteredResponses?filters=[{"id":"fFnyxwWa3KV6nBdfBDCHEA","condition":"less_than","value":"1"}]

```

```

## API Reference

- **GET** `/[formId]/filteredResponses`: Fetches and filters form responses.
  - **Query Parameters**:
    - `filters`: JSON string representing filter conditions.

## Development

To contribute to the project, create a branch for your feature or fix, then submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Fillout API Team for providing the API and documentation.
