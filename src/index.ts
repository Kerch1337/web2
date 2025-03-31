import express, {Request, Response } from "express"
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

app.set("view engine","ejs")

app.get('/ejs-pages', (req: Request, res: Response) => {
    const user = req.query.user || 'anonymous';
    res.render('layout', {message: "My message123", title: "My page",content: "index", user})
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    console.log(req.headers)
    res.send('Hello, world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})