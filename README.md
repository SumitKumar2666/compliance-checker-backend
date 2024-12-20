<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Compliance Analysis API

A production-grade NestJS application to analyze webpage content against a compliance policy using OpenAI's API.

## Description

This project provides an API endpoint to:

1. Fetch webpage content from a provided URL.
2. Analyze the content against a compliance policy.
3. Return non-compliant findings in a structured JSON response.

## Features

- Built with **NestJS** for scalable and efficient server-side applications.
- Uses **OpenAI's API** for semantic analysis.
- Includes webpage scraping using **Cheerio**.
- Fully modular and production-ready.

## Project setup

```bash
$ npm install
```

## Environment Variables

Create a `.env` file in the root directory and add your OpenAI API key:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
```

## Running the application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The application will run on `http://localhost:3000` by default.

## API Endpoint

### POST /compliance/analyze

#### Request Body:
```json
{
  "webpageUrl": "https://example.com",
  "compliancePolicyUrl": "https://policy.example.com"
}
```

#### Response:
```json
{
  "nonCompliantFindings": [
    "Non-compliant section 1",
    "Non-compliant section 2"
  ]
}
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

Ensure all environment variables are set before deploying. Refer to [NestJS Deployment Documentation](https://docs.nestjs.com/deployment) for more details.

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [OpenAI API Documentation](https://platform.openai.com/docs/)
- [Cheerio Documentation](https://cheerio.js.org/)

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).
