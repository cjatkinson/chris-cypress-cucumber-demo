# chris-cypress-cucumber-demo 🌲🥒

## Description

This is a Cypress demo implementation with Cucumber by [Chris Atkinson](mailto:cjatkinson19@gmail.com).

The framework implements [Cucumber BDD](https://github.com/cucumber/cucumber-js) for easy test authoring and maintenance. The UI tests are designed to evaluate four criteria of pages.
* Are all of the interactive elements present on the page?
* Can the page successfully render a front-end error?
* Can the page successfully render a back-end error?
* Can the primary functionality of the page be achieved?

## Installation

1. Clone this repository:

```bash
git clone git@github.com:cjatkinson/chris-cypress-cucumber-demo.git
```

2. Install the dependencies:

```bash
cd chris-cypress-cucumber-demo
npm i
```

3. Test the installation:

```bash
npm run test
```

The framework will run the test suite against Chrome. The last test is the suite fails intentionally to demonstrate some of the implementaion features. If you run into issues, please let me know [via email](mailto:cjatkinson19@gmail.com).

## Usage

The framework can be run in a variety of modes, abstracted as scripts in `node_modules`.

```bash
# run the framework in headless mode
npm run test
```

```bash
# run the framework in UI mode
npm run test:ui
```

## TODO
* Improve TS implementation.
* Implement API test suite.
* Implement TravisCI.