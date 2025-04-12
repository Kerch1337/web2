import express, { Request, Response } from "express"
import mongoose from "mongoose"
import User from "./models/User"
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

app.set("view engine","ejs")

mongoose.connect("mongodb://admin:1234@localhost:27017/web2?authSource=admin").then(()=>console.log("DB connected!")).catch((err)=>console.error(err))

app.get('/ejs-pages', (req: Request, res: Response) => {
    const user = req.query.user || 'anonymous';
    res.render('layout', {message: "My message123", title: "My page",content: "index", user})
})

app.get('/users', async (req: Request, res: Response) => {
    try{
        const users = await User.find()
        res.status(201).json(users)
    } catch (e) {
        res.status(400).json({message: (e as Error).message})
    }
})

app.post('/users', async (req: Request, res: Response) => {
    try{
        console.log(req.body)
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json({message: (e as Error).message})
    }
})

app.delete('/users', async (req: Request, res: Response) => {
    try{
        const { username, email } = req.body;
        if (!username || !email) {
            return res.status(400).json({ message: 'No name or email' });
        }
        const deletedUser = await User.findOneAndDelete({ username, email });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted'});
    } catch (e) {
        res.status(400).json({message: (e as Error).message})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})