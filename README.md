# VendingMacine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Vending   Machine

This a basic version of a snack vending
machine. The  manage different snack categories, control the
price and amount of available items in each category, handle purchases,
and provide related statistics.

Application that accepts and executes the following set of commands:

addCategory  — register a snack
category in the system.

input the name of the snack category and the price must be in  vending machine (quantity not necessarily, default 0) then clic ADD Category

addItem  — register provided  or update amount of snack
items to sell.

list — show list of served categories with amount of items
available for sale 

purchase — purchase a single snack
item.

clear — stop serving all snack categories that don’t have items for sale (items can not be purchased)
delete category and items.

report- show earnings by category gained since
provided date till now sorted by category name.
Command accepts the following parameters:
input date — the start date of the period for wich the report
is requested
