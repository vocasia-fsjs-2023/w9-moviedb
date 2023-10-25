# IH MOVIE DB

description:
Create CRUD API for Master Data of Movie
Create CRUD API for Review of the Movie (one to many - relationship)

List of available endpoints:

CRUD Movie

- `POST /movie`
- `GET /movie`
- `GET /movie/:id`
- `PUT /movie/:id`
- `DELETE /movie/:id`

CRUD Review

- `POST /review`
- `GET /review`
- `PUT /review/:id`
- `DELETE /review/:id`

### POST /movie

description:
Create Master Data of Movie

Request:

- body:

```json
{
  "title": "Ice Cold",
  "description": "Pembunuhan Jessica Mirna"
}
```

Response:

- status: 201
- body:

```json
{
  "id": 1,
  "title": "Ice Cold",
  "description": "Pembunuhan Jessica Mirna",
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-10T04:39:48.537Z"
}
```

### GET /movie

description:
get all genre list

Response:

- status: 200
- body:

```json
{
  "movie": [
    {
      "id": 1,
      "title": "Ice Cold",
      "description": "Pembunuhan Jessica Mirna",
      "createdAt": "2023-10-10T04:39:48.537Z",
      "updatedAt": "2023-10-10T04:39:48.537Z"
    }
  ]
}
```

### GET /movie/:id

description:
get detail movie Left join to its review

Request:

- query param:

```json
{
  "id": 1
}
```

Response:

- status: 200
- body:

```json

    {
        "id": 1,
        "title": "ICECOLD",
        "description": "TESTING",
        "createdAt": "2022-08-03T05:38:39.000Z",
        "updatedAt": "2022-08-03T05:38:39.000Z",
        "Reviews": [
            {
                "id": 1,
                "title": "Mencengangkan!",
                "description": "Gila sih untuk bisa ungkit lagi kasus ini",
                "rating": 5,
                "createdAt": "2022-08-03T05:38:39.000Z",
                "updatedAt": "2022-08-03T05:38:39.000Z",
                "MovieId": 1
            }
        ]
    }
```

### PUT /movie/:id

description:
edit single genre data

Request:

- query param:

```json
{
  "id": 1
}
```

- body:

```json
{
  "title": "Ice Cold",
  "description": "Documentary Kematian mirna"
}
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "Ice Cold",
  "description": "Documentary Kematian mirna",
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-11T04:39:48.537Z"
}
```

### DELETE /movie/:id

description:
delete Movie from list
when deleting movie that is used in at least one review, the on delete association should also delete the review entity

Request:

- query param:

```json
{
  "id": 1
}
```

- body:
  none

Response:

- status: 200
- body:

```json
{
  "message": "movie Ice Cold telah dihapus"
}
```

## Review

### POST /review

description:
Create Review of Movie

Request:

- body:

```json
{
  "title": "MENCENGANGKAN",
  "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
  "rating": 5,
  "movieId": 1
}
```

Response:

- status: 201
- body:

```json
{
  "id": 1,
  "title": "MENCENGANGKAN",
  "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
  "rating": 5,
  "movieId": 1,
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-10T04:39:48.537Z",
  "movie": {
    "id": 1,
    "title": "Ice Cold",
    "description": "Documentary Kematian mirna",
    "createdAt": "2023-10-10T04:39:48.537Z",
    "updatedAt": "2023-10-11T04:39:48.537Z"
  }
}
```

### GET /review

description:
get all review with its movie

Response:

- status: 200
- body:

```json
{
  "review": [
    {
      "id": 1,
      "title": "MENCENGANGKAN",
      "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
      "rating": 5,
      "movieId": 1,
      "createdAt": "2023-10-10T04:39:48.537Z",
      "updatedAt": "2023-10-10T04:39:48.537Z",
      "movie": {
        "id": 1,
        "title": "Ice Cold",
        "description": "Documentary Kematian mirna",
        "createdAt": "2023-10-10T04:39:48.537Z",
        "updatedAt": "2023-10-11T04:39:48.537Z"
      }
    }
  ]
}
```

### PUT /review/:id

description:
edit single review data

Request:

- query param:

```json
{
  "id": 1
}
```

- body:

```json
{
  "title": "MENCENGANGKAN",
  "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
  "rating": 10
}
```

Response:

- status: 200
- body:

```json
{
  "title": "MENCENGANGKAN",
  "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
  "rating": 10,
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-11T04:39:48.537Z"
}
```

### DELETE /review/:id

description:
delete single review
when deleting review that is used in at least one movies, the on delete association should also delete the one to many relationship

Request:

- query param:

```json
{
  "id": 1
}
```

- body:
  none

Response:

- status: 200
- body:

```json
{
  "message": "review dengan id 1 telah dihapus"
}
```
