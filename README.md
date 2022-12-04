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

Vehicles - req user access #done

- `GET /vehicle`: get all vehicles
- `GET /vehicle/type/:type`: get vehicles filtered by type
- `GET /vehicle/brand/:brand`: get vehicles filtered by brand
- `GET /vehicle/:id`: get single vehicle
- `GET /vehicle/electric`: Get all electric vehicles
- `GET /vehicle/newVehicle`: Get all new vehicles
- `GET /vehicle/usedVehicle`: Get all used vehicles
- `GET /vehicle/year`: Get all vehicles after specific year
- `GET /vehicle/color`: Get vehicle by color
- `GET /vehicle/price`: Get vehicle by price, bewteen minprice and maxprice


Orders - req user access #done

- `POST /order`: Create a new order
- `GET /order`: get all orders
- `GET /order/:id`: get single order
- `PUT /order/:id`: update order
- `DELETE /order/:id`: delete order

Reservations (test drive) - req user access #done

- `POST /reservation`: Create a new reservation
- `GET /reservation`: get all reservations
- `GET /reservation/:id`: get a single reservation
- `PUT /reservation/:id`: update reservation
- `DELETE /reservation/:id`: delete reservation
