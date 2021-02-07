# dblaccounting

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install dblaccounting
```

### Create Tables

From the folder install, install the sql-file [sqlcreate.sql](file://./install/sqlcreatel.sql) file on your mysql, mariadb or other sql-based database. Change the default character and collate to your preferred one.


| Tablename | Relation | Description |
| - | - | - |
| fiscalyear | none  | main table. contains the name of the accounting as the state of the accounting (0 = closed, 1 = open, 2 = )  |
| account |   |   |
| budget |   |   |
| journal |   |   |




## API

```js
var dblaccount = require('dblaccounting')
```

This imports the following reroutes for using the library:

```js

app.get('/Fiscalyear/data', fiscalyear.getData);
app.post('/Fiscalyear/data', fiscalyear.addData);
app.put('/Fiscalyear/data', fiscalyear.updateData);
app.delete('/Fiscalyear/data', fiscalyear.removeData);
app.get('/Fiscalyear/getFkData', fiscalyear.getFKData);
app.get('/Fiscalyear/getOneData', fiscalyear.getOneData);
app.get('/Fiscalyear/export', exportData.writeExcelData);
app.post('/Fiscalyear/close', fiscalyear.closeYear);

app.get('/Account/data', account.getData);
app.post('/Account/data', account.addData);
app.put('/Account/data', account.updateData);
app.get('/Account/getFkData', account.getFKData);
app.get('/Account/showData', account.getAccountSummary);
app.get('/Account/export', exportData.writeAccountToExcel);
app.get('/Account/getOneDataByOrder', account.getOneDataByOrder);

app.get('/Journal/data', journal.getData);
app.post('/Journal/data', journal.addData);
app.put('/Journal/data', journal.updateData);
app.delete('/Journal/data', journal.removeData);
app.post('/Journal/import', journal.importJournal);
app.get('/Journal/getAccData', journal.getAccData);
app.post('/Journal/addAtt', journal.addAttachment);
app.delete('/Journal/delAtt', journal.delAttachment);
app.get('/Journal/getAtt', journal.getAttachment);
app.get('/Journal/export', exportData.writeJournal);

app.get('/Budget/data', budget.getData);
app.post('/Budget/data', budget.addData);
app.put('/Budget/data', budget.updateData);
app.delete('/Budget/data', budget.removeData);
app.get('/Budget/getOne', budget.getOneData);
```




| link | method | destination | description |
| - | - | - | - |
| /Fiscalyear/data | GET | fiscalyear.js - getFiscalyear | Read one fiscalyear |
| /Fiscalyear/data | PUT | fiscalyear.js - getFiscalyear | Read one fiscalyear |
| /Fiscalyear/data | PUSH | fiscalyear.js - getFiscalyear | Read one fiscalyear |
| /Fiscalyear/data | DELETE | fiscalyear.js - getFiscalyear | Read one fiscalyear |
| /Fiscalyear/data | GET | fiscalyear.js - getFiscalyear | Read one fiscalyear |
| /Fiscalyear/data | GET | fiscalyear.js - getFiscalyear | Read one fiscalyear |
| /Fiscalyear/data | GET | fiscalyear.js - getFiscalyear | Read one fiscalyear |
|   |   |   |  |
