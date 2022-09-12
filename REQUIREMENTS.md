# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index

```sh
get all products

-endpoint
GET /products/all

-example:
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "name": "potato",
            "price": 52,
            "category_id": 2
        },
    ]
}
```

- Show (args: product id)

```sh
get one product

-endpoint
GET /products/show/1

-example:
{
    "status": 200,
    "message": "success",
    "data":{
            "id": 1,
            "name": "potato",
            "price": 52,
            "category_id": 2
        },
}
```

- Create (args: Product)[token required]

```sh
create  product

-endpoint
POST /products/create

-example:
{
    "status": 200,
    "message": "success",
    "data":{
            "id": 1,
            "name": "potato",
            "price": 52,
            "category_id": 2
        },
}

```

- Products by category (args: product category)

```sh
get products by category_id

-endpoint
GET /products/get_by_category_id/1

-example:
{
    "status": 200,
    "message": "success",
    "data":[{
            "id": 1,
            "name": "potato",
            "price": 52,
            "category_id": 2
        }],
}

```

#### Users

- Index [token required]

```sh
get all users

-endpoint
GET /users/all

-example:
{
    "status": 200,
    "message": "success",
    "data":[{
            "id": 1,
            "firstname": "potato",
            "lastname": 52,
            "email": "user@example.com",
            "password": "123456",
        }],
}
```

- Show (args: id)[token required]

```sh
show user

-endpoint
GET users/show/1

-example:
{
    "status": 200,
    "message": "success",
    "data":{
            "id": 1,
            "firstname": "potato",
            "lastname": 52,
            "email": "user@example.com",
            "password": "123456",
        },
}
```

- Create (args: User)[token required]

```sh
show user

-endpoint
POST users/create
-posted data example
{
            "firstname": "potato",
            "lastname": 52,
            "email": "user@example.com",
            "password": "123456",
        }
-returned data example:
{
    "status": 200,
    "message": "success",
    "data":{
            "id": 1,
            "firstname": "potato",
            "lastname": 52,
            "email": "user@example.com",
            "password": "123456",
        },
}
```

#### Orders

- Current Order by user (args: user id)[token required]

- Completed Orders by user (args: user id)[token required]

```sh
show completed orders by user id

-endpoint
GET /orders/complete/2

-returned data example:
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "id": 3,
            "product_id": 1,
            "product_qty": 20,
            "user_id": 2,
            "status": "complete"
        }
    ]
}
```

## Data Shapes

#### Product

- id
- name
- price
- category_id

#### User

- id
- firstName
- lastName
- email
- password

#### Order

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
