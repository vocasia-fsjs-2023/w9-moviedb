{
	"info": {
		"_postman_id": "e8f41093-17bf-466c-af9d-62980f57bd22",
		"name": "Week 10 IMDB api Vocasia lanjutan",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "7902833"
	},
	"item": [
		{
			"name": "Movie",
			"item": [
				{
					"name": "POST Create Movie",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": {
								"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2b2Nhc2lhQGVtYWlsLmNvbSIsImlhdCI6MTY5NzUyODM2M30.ciOlPjuhBoNGRmad98VOAYK4eUnwTPryphF9bfGd7-4"
							}
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"title\": \"Ice Cold\",\n  \"description\": \"Pembunuhan Jessica Mirna\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/movie"
					},
					"response": []
				},
				{
					"name": "GET Movie List",
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/movie"
					},
					"response": []
				},
				{
					"name": "GET Movie By ID",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/movie/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movie",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "PUT Movie Update Data",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": {
								"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2b2Nhc2lhQGVtYWlsLmNvbSIsImlhdCI6MTY5NzUyODM2M30.ciOlPjuhBoNGRmad98VOAYK4eUnwTPryphF9bfGd7-4"
							}
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"title\": \"Ice Cold\",\n  \"description\": \"Documentary Kematian mirna\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/movie/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movie",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": ""
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "PATCH Movie Update",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": {
								"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2b2Nhc2lhQGVtYWlsLmNvbSIsImlhdCI6MTY5NzUyODM2M30.ciOlPjuhBoNGRmad98VOAYK4eUnwTPryphF9bfGd7-4"
							}
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"status\":\"in_progress\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/movie/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movie",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "DELETE Movie by ID",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": {
								"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2b2Nhc2lhQGVtYWlsLmNvbSIsImlhdCI6MTY5NzUyODM2M30.ciOlPjuhBoNGRmad98VOAYK4eUnwTPryphF9bfGd7-4"
							}
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/movie/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movie",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Review",
			"item": [
				{
					"name": "POST Create Review",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": {
								"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2b2Nhc2lhQGVtYWlsLmNvbSIsImlhdCI6MTY5NzUyODM2M30.ciOlPjuhBoNGRmad98VOAYK4eUnwTPryphF9bfGd7-4"
							}
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n   \"title\": \"MENCENGANGKAN\",\n   \"description\": \"dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???\",\n   \"rating\": 5,\n   \"movieId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/review"
					},
					"response": []
				},
				{
					"name": "GET Review List",
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/review"
					},
					"response": []
				},
				{
					"name": "PUT Review Update Data",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": {
								"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2b2Nhc2lhQGVtYWlsLmNvbSIsImlhdCI6MTY5NzUyODM2M30.ciOlPjuhBoNGRmad98VOAYK4eUnwTPryphF9bfGd7-4"
							}
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"title\": \"MENCENGANGKAN\",\n  \"description\": \"dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???\",\n  \"rating\": 4\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/review/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"review",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": ""
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "DELETE Review by ID",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": {
								"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2b2Nhc2lhQGVtYWlsLmNvbSIsImlhdCI6MTY5NzUyODM2M30.ciOlPjuhBoNGRmad98VOAYK4eUnwTPryphF9bfGd7-4"
							}
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/review/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"review",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "1"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "Register",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"vocasia\",\n    \"email\":\"vocasia1@email.com\",\n    \"password\": \"12345678\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/register"
					},
					"response": []
				},
				{
					"name": "Login",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"email\": \"vocasia@email.com\",\n    \"password\": \"12345678\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/login"
					},
					"response": []
				}
			]
		}
	]
}