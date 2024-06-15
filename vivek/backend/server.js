import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose ,{Schema, mongo} from 'mongoose'

const app = express();
const MONGO_URI = 'mongodb://localhost:27017/Portfolio'
const port = 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// mongoose``
async function MongoConnection() {
// MongoConnection().catch(err => console.log(err));
    try {
        const Db = await mongoose.connect(MONGO_URI);
        console.log('Connection established')
        
    } catch (error) {
        console.log(error)
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
MongoConnection();

// Schemas
const FormSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    
},
    
);

const User = mongoose.model('User', FormSchema);




app.listen(port, (req, res) => {
    console.log(`listening to ${port}`)
})

//router// CRUD -CREATE 
app.post('/', async (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    const savedDoc = await user.save();


    console.log(savedDoc);
    res.json({savedDoc});
})

app.get('/', async (req, res) => {
    const docs = await User.find({})
    // res.json(docs);

    res.status(200);
    // console.log(docs);
})