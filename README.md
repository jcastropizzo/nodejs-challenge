## Description

NodeJS rest api + Websocket server

Used SqlLite as store.

# Running the app manually
## Dependencies installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start 
```
# Running the app using Docker Compose (recommended)

```bash
docker-compose -f .\.docker\docker-compose.yml up --build 
```
# Overall considerations

The servers ports are 8000 for the Rest Api and 8999 for the WS server

## ToDo
 - Add Testing
 - Add Logging
 - Create a Repository to handle the queries to the database
 - Create a class for the key-value pair
 - Use a config json or environment variables for the ports
