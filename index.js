/*!
 * dblAccounting
 * Copyright(c) 2021 Janine Franken
 * GNU Licensed
 */

'use strict';

const exportData = require("./lib/exports");
const fiscalyear = require("./lib/fiscalyear");
const account = require("./lib/account");
const journal = require("./lib/journal");
const budget = require("./lib/budget");

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

