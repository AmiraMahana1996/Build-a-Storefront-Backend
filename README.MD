<h1 align="center">Welcome Pos insert algorithim   👋</h1>
<p>
  <a href="https://www.npmjs.com/package/processing Image" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/processing Image.svg">
  </a>
  <a href="http://localhost:3000/api/images?filename=hn&width=200&height=88" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> For processing an image like resizing and so on..

### ✨ [Demo](localhost:3000)

## insert

```sh
npm install --save
```

## you can start the project by

```sh
npm run dev
```

## Run tests

```sh
npm run test
```

## Run linting

```sh
npm run lint
```

## Run prettier

```sh
npm run format
```

## Build project

```sh
npm run build
```

## to compile typescript files

```sh
npm run compile-typescript
```

## To migrate

```sh
db-migrate up
```

## The Endpoints of the project

---

## PRODUCT

```sh
**---create product
URL ex:http://localhost:3500/products/create
Method:POST
Token:[token required]
body data:{
  "name": "mobile",
  "price": 2000,
  "category_id": 1
}

 returned data:
 {
    "status": 200,
    "message": "success",
    "data": {
        "id": 4,
        "name": "mobile ",
        "price": 2000,
        "category_id": 1
    }
}

**---show product

URL ex:http://localhost:3500/products/show/1
Method:GET
Token:[token required]
body data:N

 returned data:
 {
    "status": 200,
    "message": "success",
    "data": {
        "id": 4,
        "name": "mobile ",
        "price": 2000,
        "category_id": 1
    }
}

**---update product

URL ex:http://localhost:3500/products/update/1
Method:PUT
Token:[token required]
body data:{
  "name": "updated_data",
  "price": 2000,
  "category_id": 1
}

 returned data:
 {
    "status": 200,
    "message": "success",
    "data": {
        "id": 4,
        "name": "updated_data ",
        "price": 2000,
        "category_id": 1
    }
}

**---delete product

URL ex:http://localhost:3500/products/delete/1
Method:DELETE
Token:[token required]
body data:N

 returned data:
 {
    "status": 200,
    "message": "success",
    "data": [{
        "id": 4,
        "name": "updated_data ",
        "price": 2000,
        "category_id": 1
    }]
}

**---GET ALL product product

URL ex:http://localhost:3500/products/all
Method:GET
Token:[token required]
body data:N

 returned data:
 {
    "status": 200,
    "message": "success",
    "data": [{
        "id": 4,
        "name": "updated_data ",
        "price": 2000,
        "category_id": 1
    }]
}

**---get Products by category
URL ex:http://localhost:3500/products/by-category-id/1
Method:GET
Token:[token required]
body data:N

 returned data:
 {
    "status": 200,
    "message": "success",
    "data": {
        "id": 4,
        "name": "updated_data ",
        "price": 2000,
        "category_id": 1
    }
}
```

## USER

```sh
**---register user
URL ex:http://localhost:3500/users/register
Method:POST
Token:N
body data:{
  "firstname": "amira",
  "lastname": "ali",
  "email": "ali@gmail.com",
  "password": "ali"
}

 returned data:
 {
    "id": 1,
    "firstname": "amira",
    "lastname": "ali",
    "password": "$argon2id$v=19$m=64000,t=3,p=1$uFlJ4P5okte9JoMuGon26A$jXU2XV21M2UWbGXHWjdraDdMJmnGSranrmWjs2NQ0SY",
    "email": "ali@gmail.com"
}

**---login user
URL ex:http://localhost:3500/users/login
Method:POST
Token:N
body data:{
  "email": "ali@gmail.com",
  "password": "ali"
}

 returned data:
 {
    "status": 200,
    "token": "***"
}
**---get all user
URL ex:http://localhost:3500/users/all
Method:GET
Token:[token required]
body data:N

 returned data:
 [{
    "id": 1,
    "firstname": "amira",
    "lastname": "ali",
    "password": "$argon2id$v=19$m=64000,t=3,p=1$uFlJ4P5okte9JoMuGon26A$jXU2XV21M2UWbGXHWjdraDdMJmnGSranrmWjs2NQ0SY",
    "email": "ali@gmail.com"
}]
**---show user
URL ex:http://localhost:3500/users/1
Method:GET
Token:[token required]
body data:{
  "email": "ali@gmail.com",
  "password": "ali"
}

 returned data:
 {
    "status": 200,
    "token": "***"
}
```

## ORDER

```sh

**---CREATE ORDER
URL ex:http://localhost:3500/orders/create
Method:POST
Token:[token required]
body data:{
  "product_id": 1,
  "product_qty": 20,
  "user_id": 1,
  "status": "complete"
}

 returned data:
{
    "status": 200,
    "message": "success",
    "data": [{
   "id": 1,
   "product_id": 1,
  "product_qty": 20,
  "user_id": 1,
  "status": "complete"
    }]
}



**---get current orders by user id
URL ex:http://localhost:3500/orders/current/1
Method:GET
Token:[token required]
body data:N

 returned data:
{
    "status": 200,
    "message": "success",
    "data": [{
   "id": 1,
   "product_id": 1,
  "product_qty": 20,
  "user_id": 1,
  "status": "active"
    }]
}


**---get completed orders by user id
URL ex:http://localhost:3500/complete/current/1
Method:GET
Token:[token required]
body data:N

 returned data:
{
    "status": 200,
    "message": "success",
    "data": [{
   "id": 1,
   "product_id": 1,
  "product_qty": 20,
  "user_id": 1,
  "status": "complete"
    }]
}
```

//
CREATE SEQUENCE categories_id_seq;

ALTER TABLE categories
ALTER COLUMN category_id SET DEFAULT nextval('categories_id_seq');

## Author

👤 **Amira**

- Website: Amira
- Github: [@AmiraMahana1996](https://github.com/AmiraMahana1996)
