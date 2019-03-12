const { Model } = require('mongorito')
const commands = require("../commands")

class AccountEvent extends Model {}

const extend = AccountEvent => {
  AccountEvent.open = async ({ accountNumber, balance }) => {
    const account = new AccountEvent({
      event: commands.ACCOUNT_OPEN,
      payload: {
        amount
      }
    })
    return await account.save()
  }
  
  AccountEvent.close = async ({ accountNumber }) => {
    const account = new AccountEvent({
      event: commands.ACCOUNT_OPEN,
      payload: {
        amount
      }
    })
    return await account.save()
  }
  
  AccountEvent.withdraw = async ({ accountNumber, amount }) => {
    const account = new AccountEvent({
      event: commands.ACCOUNT_WITHDRAW,
      payload: {
        accountNumber, amount
      }
    })
    return await account.save()
  }
  
  AccountEvent.deposit = async ({ accountNumber, amount }) => {
    const account = new AccountEvent({
      event: commands.ACCOUNT_DEPOSIT,
      payload: {
        accountNumber, amount
      }
    })
    return await account.save()
  }
}

AccountEvent.use(extend)

module.exports = AccountEvent