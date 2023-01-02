# Angular with Spring HATEOAS
Comsuming Spring Data REST API using Angular.

## Spring Data REST & HATEOAS
- Spring Data REST follows the HATEOAS principle (Hypermedia as the Engine of Application State).
- It exposes resources for entities managed by Spring Data repositories and leverages hypermedia aspects to do pagination, link entities etc.
- A core principle of HATEOAS is that resources should be discoverable through the publication of links that point to the available resources. 
- By default, Spring Data REST uses HAL to render responses. HAL defines the links to be contained in a property of the returned document.

## Built with
- node v18.12.1
- angular/cli v15.0.4
- npm v8.19.2

## Install dependencies and run
```shell
npm install
ng serve
```

> The application is available at http://localhost:4200