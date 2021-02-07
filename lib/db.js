const { Sequelize, Model } = require('sequelize');
const DataTypes = require('sequelize').DataTypes;


  class FiscalYear extends Model {

  }
  FiscalYear.init({
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    year: DataTypes.STRING,
    name: DataTypes.STRING,
    state: DataTypes.INTEGER,
  },
    {
      sequelize,
      tableName: 'fiscalyear',
      modelName: 'fiscalyear'
    });
  
  
class Account extends Model {

}
Account.init({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  level: DataTypes.INTEGER,
  order: DataTypes.INTEGER,
  status: DataTypes.INTEGER
},
  {
    sequelize,
    tableName: 'account',
    modelName: 'account'
  });

class Journal extends Model {
}
Journal.init({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  from_account: {
    type: Sequelize.INTEGER,
    references: {
      model: Account,
      key: 'id'
    }
  },
  to_account: {
    type: Sequelize.INTEGER,
    references: {
      model: Account,
      key: 'id'
    }
  },
  date: DataTypes.DATEONLY,
  memo: DataTypes.STRING,
  journalNo: {
    type: Sequelize.INTEGER,
    defaultValue: null,
    set(value) {
      // einen empty String zu Null konvertieren
      if (value == "")
        this.setDataValue('journalNo', null);
      else
        this.setDataValue('journalNo', value);
    }
  },
  amount: DataTypes.DECIMAL(7, 2),
  status: DataTypes.INTEGER,
  receipt: DataTypes.BLOB("long")
},
  {
    sequelize,
    tableName: 'journal',
    modelName: 'journal'
  });

  Journal.belongsTo(Account, { as: 'fromAccount', constraints: true, foreignKey: 'from_account' });
  Journal.belongsTo(Account, { as: 'toAccount', constraints: true, foreignKey: 'to_account' });
  Account.hasMany(Journal, { as: 'fromAccount', constraints: true, foreignKey: 'from_account' });
  Account.hasMany(Journal, { as: 'toAccount', constraints: true, foreignKey: 'to_account' });

  class Budget extends Model {
  }
  Budget.init({
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    account: {
      type: Sequelize.INTEGER,
      references: {
        model: Account,
        key: 'id'
      }
    },
    year: DataTypes.INTEGER,
    memo: DataTypes.STRING,
    amount: DataTypes.DECIMAL(7, 2)
  },
    {
      sequelize,
      tableName: 'budget',
      modelName: 'budget'
    });
  
    Budget.belongsTo(Account, { as: 'acc', constraints: true, foreignKey: 'account' });
    Account.hasMany(Budget, { as: 'acc', constraints: true, foreignKey: 'account' });
  
  module.exports = {
  Account, Journal, FiscalYear, Budget,
};

