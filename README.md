## Using
[Gauge](https://github.com/getgauge/gauge) + [Taiko](https://github.com/getgauge/taiko) test framework for learning and improving skill working with automation test

## Source code structure
```
.
├── specs
└── tests
    ├── common
    └── steps_definition
```

## Folder definitions
Going to explain what is the purpose of each main folders in the project

### /specs
Write down test scenarios and test steps inside in each scenario

How to run these specs:
- Run `yarn test`: run all of specs
- Run `HEADLESS_CHROME=false gauge run specs/...`: run specific spec      

### /steps_definition
Where we define step definition, acts as an abstraction layer between `specs` directory and taiko/gauge configuration


### /common
The configuration directory for gauge & taiko, if you ever want to change con config or add another taiko interaction, this directory is where you should look.

## Usage
### Run a sample test

- Clone this repo
- `yarn` for dependencies installation
- Run the following command above to run specs