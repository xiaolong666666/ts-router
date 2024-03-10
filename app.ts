import * as express from 'express'
import router from './router'

const app = express()

app.use(express.json())

// app.get('/user/info', (req, res) => {
//     res
//         .status(200)
//         .json({
//             message: 'user xl'
//         })
// })

// app.post('/user/login', (req, res) => {
//     console.log(req.body, req.query)
//     res
//         .status(200)
//         .json({
//             message: 'login success'
//         })
// })

router(app)

app.listen(80, () => {
    console.log('start listening on http://localhost')
})