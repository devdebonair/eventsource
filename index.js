(async () => {
  const uuid = require('uuid').v4
  const { Database } = require('mongorito')
  const AccountEvent = require('./db/accountEvent')

  const id = uuid()
  try {
    const db = new Database('localhost/eventsource')
    await db.connect()
    db.register(AccountEvent)
  
    await AccountEvent.open({ accountNumber: id, balance: 0 })
    await AccountEvent.deposit({})
    console.log(account)
  } catch (error) {
    console.error(error)
  }

})()