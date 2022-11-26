# Vehicle Dealer Project - API

## Run Locally

1. git pull
2. yarn install
3. setup variables in your own .env file
4. yarn start

## API docs

Users - are customers # done

- `POST /auth/register`: register a new user
- `POST /auth/login`: login
- `POST /auth/logout`: logout

TODO: Vehicles

- `GET /vehicle`: get all vehicles
- `GET /vehicle/:type`: get vehicles filtered by type
- `GET /vehicle/:brand`: get vehicles filtered by brand
- `GET /vehicle/:id`: get single vehicle

Orders - req user access #done

- `POST /order`: Create a new order
- `GET /order`: get all orders
- `GET /order/:id`: get single order
- `PUT /order/:id`: update order
- `DELETE /order/:id`: delete order

TODO: Reservations (test drive) - req user access

- `POST /reservation`: Create a new reservation
- `GET /reservation`: get all reservations
- `GET /reservation/:id`: get a single reservation
- `PUT /reservation/:id`: update reservation
- `DELETE /reservation/:id`: delete reservation
