const commands = require('./commands')
const Account = require('./db/accountEvent')

module.exports = {
  [commands.ACCOUNT_OPEN]: ({ id, balance }) => {
    const Account = new Account({
      event: commands.ACCOUNT_OPEN,
      payload: {
        id, balance
      }
    })
  },
  
  [commands.ACCOUNT_CLOSE]: ({ id }) => {
    const Account = new Account({
      event: commands.ACCOUNT_CLOSE,
      payload: {
        id
      }
    })
  },

  [commands.ACCOUNT_DEPOSIT]: ({ amount }) => {
    const Account = new Account({
      event: commands.ACCOUNT_DEPOSIT,
      payload: {
        ammount
      }
    })
  },

  [commands.ACCOUNT_WITHDRAW]: ({ amount }) => {
    const Account = new Account({
      event: commands.ACCOUNT_WITHDRAW,
      payload: {
        ammount
      }
    })
  }
}