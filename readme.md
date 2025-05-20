# EvaExchange

EvaExchange is a simple stock trading simulation project. It supports buying and selling shares using a REST API.

## Technologies

* Node.js
* Express.js
* Sequelize (PostgreSQL)

## Setup

1. **Clone the project:**

```bash
git clone https://github.com/ahmetcangg/evaexchange.git
cd evaexchange
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure database:**

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=evauser
DB_PASS=password
DB_NAME=evaexchange
PORT=3000
```

4. **Seed the database:**

```bash
node seeders/seed.js
```

5. **Start the server:**

```bash
npm start
```

## API Endpoints

### POST `/buy`

Buy shares.

```json
{
  "portfolioId": 1,
  "symbol": "XYZ",
  "quantity": 10
}
```

### POST `/sell`

Sell shares.

```json
{
  "portfolioId": 1,
  "symbol": "XYZ",
  "quantity": 5
}
```

## Postman

Use the provided Postman collection and environment to test the API.

* `postman.json`
