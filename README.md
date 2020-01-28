# CSCI3230U - Final Project

Group project Members: Nathan Beals, Daniel Bullock, Sinthooran Ravinathan & Alexander Waddell


## Project setup

The project is broken into to mostly separate components: **frontend** and **backend**.

### Frontend

* Defaults:
  * Port: `8080`

#### Install Dependencies

```bash
npm install
```

#### Compiles and hot-reloads for development

* this will proxy api requests (all requests sent to the `/api` route to `localhost:8081`)

```bash
npm run serve
```

#### Compiles and minifies for production
```bash
npm run build
```

#### Run your unit tests
```bash
npm run test:unit
```

#### Lints and fixes files
```bash
npm run lint
```



---

### Backend

* Defaults:
  * Port: `8081`

#### Install Dependencies

```bash
npm install
```

#### Hot-reloads for development

* this allows for debugging via the `inspector` protocol

```bash
npm run debug
```

#### Run

```bash
npm run
```

#### Run your unit tests

```bash
npm run test:unit
```

#### Lints and fixes files

```bash
npm run lint
```



