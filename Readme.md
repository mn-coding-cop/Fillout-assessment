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
git clone https://github.com/your-username/your-project-name.git
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
http://localhost:5000/cLZojxk94ous/filteredResponses?filters=[{"id":"bE2Bo4cGUv49cjnqZ4UnkW","condition":"equals","value":"John"}]
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
