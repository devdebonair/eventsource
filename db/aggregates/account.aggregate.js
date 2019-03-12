const commands = require('./commands')
const { Model } = require("mongorito")

class AccountAggregate extends Model {}

const extend = AccountAggregate => {
  AccountAggregate[commands.ACCOUNT_OPEN] = ({ accountNumber, balance }) => {
    const aggregate = new AccountAggregate({
      accountNumber, balance  
    })
  },
  
  AccountAggregate[commands.ACCOUNT_CLOSE] = ({ accountNumber }) => {
    AccountAggregate.deleteOne()
  },

  AccountAggregate[commands.ACCOUNT_DEPOSIT] = ({ accountNumber, amount }) => {
    const Account = new Account({
      event: commands.ACCOUNT_DEPOSIT,
      payload: {
        accountNumber, amount
      }
    })
  },

  AccountAggregate[commands.ACCOUNT_WITHDRAW] = ({ accountNumber, amount }) => {
    const Account = new Account({
      event: commands.ACCOUNT_WITHDRAW,
      payload: {
        accountNumber, amount
      }
    })
  }
}

AccountAggregate.use(extend)