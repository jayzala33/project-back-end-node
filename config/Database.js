const mongoose = require('mongoose')
const password = 'jayzala33'

const url = 'mongodb://localhost:27017/myapp'
mongoose.connect(url, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
.then((data) => {
    console.log(`MongoDB is Connected On ${data.connection.host}`)
})