# docker-MEAN-tutorial



## Description
This is a school project: I created a simple Express API using Mongo, Docker and Docker Swarm.

## Current Version: V2.0

## Tutorial
### Launch the services
You need to install Docker, Docker-compose on your system.
If docker command requires permission, add **sudo** on ubuntu when running commands.
You will find all commands in Makefile file.

To build the Express backend image run:

```
$ make make-backend-image
```
To start the services run:
```
$ make start-services
```
To check the services run:
```
$ make check-services
```
### Use the services
Connect on the API using the base URL:
```
http://localhost:8090 or http://127.0.0.1:8090
```
#### Methods

Route | Method | Request | Response
------|--------|---------|--
/|GET|-|Hello world
/feedback|POST| Json contaning a string **message** Attribute| Success or failure message
/feedback|GET|-|All feedbacks in DB


## Exposed Ports
The database is not published.

Service | Exposed Port | Internal Port
---------|-------------|---------
Backend| 8090 | 4040
Database | - | 27017




## History
### V2.0
This version uses Docker Swarm for deployment

- [WORKING] Database is not published
- [WORKING] Backend works


### V1.x
This version uses Docker-compose and not Docker Swarm for deployment

#### V1.2
- [WORKING] ADDED DB Isolation from localhost and CREATED HYBRID IMAGE

#### V1.1
- [SOLVED] CORS ISSUES on frontend

#### V1.0

- [WORKING] frontend image 
- [WORKING] backend image
- [WORKING] db image
- [WORKING] postman on backend container
- [FAILING] CORS ISSUES on frontend

### About Contributors

@alichamouda
> I'm a software engineering student at National Institute of Applied Sciences and Technology INSAT, University of Carthage.
>Check my website on http://aws.ali-hamouda.codes.
I thank my tutor Wassim Kallel for his help and advice.