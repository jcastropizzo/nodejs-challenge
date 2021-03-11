## Description

NodeJS rest api + Websocket server

Used SqlLite as store.

Requierements:

    Build a service which provides both a websocket server and a REST endpoint.
    The websocket server should accept messages containing any key-value pair and store it.
    The REST endpoint should accept GET requests specifying a key and should return the corresponding value for that key, or an appropriate HTTP error if the key does not exist.
    Key-value state should persist between executions of the service (in other words, if the service shuts down and restarts for some reason, key-value pairs that were set before the restart should be restored). Multiple simultaneous websocket connections should be possible and should be allowed to change the state, without concurrency issues.

    Feel free to add more features to show off your skills!

    What we want to receive
    A zip or public git repository with the relevant files for the project
    Instructions on how to get it up and running locally
    Additional thoughts/comments if any
    

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
 - Create a class for the key-value pair
 - Use a config json or environment variables for the ports
