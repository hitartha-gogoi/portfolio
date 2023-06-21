import mongoose from "mongoose"
import User from "../../models/user"
import "dotenv/config"

const mongoAtlasUri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.13cuqv2.mongodb.net/?retryWrites=true&w=majority`;
  

export default function handler(req, res) {
  
  if(req.method == "GET"){
    mongoose.connect(mongoAtlasUri)
    let pattern = new RegExp("^" + req.query.email)
    User.find({ email: { $regex: pattern } })
    .then(result =>{
      res.status(200).json({ message: result })
    })
    .catch(err => res.status(500).json({ error: err }))
  }
  if(req.method == "POST"){
    mongoose.connect(mongoAtlasUri)
    let { name, email, password, id } = req.body
    User.create({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      id: id,
      email: email,
    })
    .then(result => res.status(200).json({ message: result }))
    .catch(err => res.status(500).json({ err: err }))
  }
  if(req.method == "PUT"){
    res.send("Hello World PUT")
  }
  if(req.method == "DELETE"){
    User.findByIdAndDelete(req.query.id)
    .then(result => res.status(200).json({ message: result }))
    .catch(err => res.status(500).json({ err: err }))
  }
}