/* global MODELS_PATH */

const fs = require('fs')
const csv = require('fast-csv')
const path = require('path')
const db = require(`./models/index`)
const Records = db.records

function main () {
  const pacts = []
  let now
  fs.createReadStream(path.join(__dirname, '/file.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => {
      console.log(row)
      row.created_at = new Date()
      row.updated_at = new Date()
      pacts.push(row)
    })
    .on('end', async (rowCount) => {
      const number = 1000
      let requests = []
      for (const pact of pacts) {
        requests.push(pact)
        if (requests.length === number) {
          console.log(`${requests.length}`)
          await Records.bulkCreate(requests)
          now = new Date()
          console.log(`${now}: ${requests.length} Records executed!`)
          requests = []
        }
      }
      await Records.bulkCreate(requests)
      now = new Date()
      console.log(`${now}: ${requests.length} Records executed!`)
      console.log(`Parsed ${rowCount} rows`)
      console.log('Done!')
    })
}

main()
