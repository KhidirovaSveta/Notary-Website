const express = require('express')
const app = express()
const port = 8080

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
app.use(bodyParser.json())
app.use(cors())

const {Schema} = mongoose;

let customersSchema = new Schema ({
    imgUrl: {type: String, require: true},
    name: {type: String, require: true},
    position: {type: String, require: true},
    description: {type: String, require: true},
},
{timestamps: true}
)

const HappyCustomers = mongoose.model("happyCustomers", customersSchema);

app.get('/customers', (req, res) => {
    HappyCustomers.find({}, (error, docs) =>{
        if(!error){
            res.send(docs)
        }else{
            res.status(500).json({message: error})
        }
    })
})

app.get("/customers/:id", (req, res) => {
    const {id} = req.params
    HappyCustomers.findById(id, (error, doc) => {
        if(!error) {
            res.send(doc)
        } else{
            res.status(500).json({message: error})
        }
    })
})


app.delete("/customers/:id", (req, res) => {
    const {id} = req.params
    HappyCustomers.findByIdAndDelete(id, (error) =>{
        if(!error){
            res.send("succsess")
        }else{
            res.status(404).json({message: error})
        }
    })
})

app.post("/customers", (req, res) => {
    let newCustomers = new HappyCustomers ({
    imgUrl: req.body.imgUrl,
    name: req.body.name,
    position: req.body.position,
    description: req.body.description,
    })
    newCustomers.save();
    res.send("succsess")
})


mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://lanakhidirova:lana@cluster0.rwyv5wv.mongodb.net/?retryWrites=true&w=majority`, (error) => {
    if(!error){
        app.listen(port, () => {
          console.log(`Example app listening on port  http://localhost:${port}`)
        })
    }
})