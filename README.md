# Learning Micro-services Architecture

## Introduction

Microservices architecture (in short form microservices) refers to an architectural style for developing applications. Microservices allow a large application to be separated into smaller independent parts, with each part having its own realm of responsibility.

### Communication strategies in a microservices

1. Synchronous: Services communicate with each other using direct requests
2. Asynchronous: Services communicate with each other using events using an event-bus

## Basic docker commands

### `docker ps`

list currently running containers

### `docker ps --all`

list all containers that has ever run on the machine

### `docker create <container name>`

create new docker container

### `docker start -a containerId`

start new created docker container

### `docker system prune`

delete all runned images

### `docker build -t dockerId/imageName`

build docker image

### `docker run -p 8080:8080 dockerId/imageName`

startup container

## Basic Kubernetes commands

### `kubectl apply -f posts.yaml`

Create a Pod

### `kubectl get pods`

Check all running pods

### `kubectl exec -it posts sh`

### `kubectl logs posts`

To check pod logs

### `kubectl delete pod posts`

delete pod

### `kubectl describe pod posts`

Describe pod

### `kubectl rollout restart deployment posts-depl`

restart a deployment

### `kubectl get services -n ingress-nginx`

get all services running in a namespace

### `skaffold dev (in the root directory of the project)`

run skaffold
Skaffold helps implement changes made to our code base automatically. just like nodemon
