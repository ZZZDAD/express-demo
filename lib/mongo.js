var mongoose = require('mongoose')

const PROJECT_NAME = 'project'

// const DB_URL = 'mongodb://gumiAdmin:gumiPassword@localhost:27017/gumi'
const DB_URL = 'mongodb://localhost:27017/' + PROJECT_NAME
const options = {
  autoIndex: false,
  useNewUrlParser: true
}

mongoose.connect(DB_URL, options, error => {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve() // sucess
    } else {
      reject(error)
    }
  })
})

module.exports = mongoose