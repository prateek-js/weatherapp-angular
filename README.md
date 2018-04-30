Weather app
===========

Weather app is the little web app for displaying the weather report from openweathermap.org 5 day forecast

## Prerequisites  
1. Install [Node.js®](https://nodejs.org/en/download) and npm
    
    node -v 
    
    npm -v
    
2. Install Angular cli
    
    npm install -g @angular/cli
    
3. Install node packages 
    
    cd /go/to/app/directory having package.json
    
    npm install
   
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run Production/QA configuration 

#build

 ng build --environment=prod --output-path=build/prod/

#shorthand

 ng b -prod --output-path=build/prod/

#serve

ng serve --environment=prod

ng serve --environment=qa

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular 2 Style Guide

[Angular 2 Style Guide](https://angular.io/guide/styleguide)

## Run all the tslint and codelyzer rules

Method A - npm run lint

Method B - Windows based command with backslash

$ .\node_modules\.bin\tslint -c tslint.json  .\src\app\weather\weather.service.ts

$ .\node_modules\.bin\tslint -c tslint.json  .\src\app\*\*.ts
