# Budget Tracker

## Technologies
* ReactJS - Frontend
* Strapi - Backend
* GraphQL - Queries
* Docker - Containers
## Get started
1. Run `docker-compose up -d` in the root (Stop contains by running `docker-compose down`)
2. Open ReactJS app by visiting [localhost:3000](http://localhost:3000)
3. Open Strapi admin by visiting [localhost:1337/admin](http://localhost:1337/admin)
## Data Structure
### Transaction
* **Date:** Datetime
* **Amount:** Number
* **Description:** String
* **Category:** Reference to many categories (See below)
* **Type:** Select(Expense|Income)
### Category
* **Title:** String
* **Description:** String
* **Type:** Select(Expense|Income|Both)