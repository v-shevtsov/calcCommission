# calcCommission

### Before start

```sh
npm i
```

If you want to use the default input.json:

```sh
npm start OR node app.js
```

If you want to use a custom input.json:

```sh
node app.js input.json
```

If you want to run the tests:

```sh
npm run test
```

## Folders

| Folder           | Value                                   |
|------------------|-----------------------------------------|
| constants        | Static values for the project                                        |
| utils            |  Utilities that perform basic logic (divided into subfolders)       |


## Components

App - the main component that receives the configuration by API, then receives the JSON file and runs a loop to calculate the commission.

CashIn - the component that determines the commission for recharging an account. When calculating, it uses the maximum commission fee from the configuration.

CashOut - the component that check the status of the user and will transfer the corresponding function.

CommissionFeeByConfig - the component, which returns a rounded commission, depending on the configuration and amount transferred