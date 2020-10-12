require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5f830e7d5b5d027b18799e1e').then((task) => {
    console.log(task)

    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})