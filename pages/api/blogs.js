import mongoose from "mongoose"
import Blog from "../../models/blog"
import "dotenv/config"

const mongoAtlasUri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.13cuqv2.mongodb.net/?retryWrites=true&w=majority`;
  

export default function handler(req, res) {
  
  if(req.method == "GET"){
    mongoose.connect(mongoAtlasUri)
    if(req.query.id){
      Blog.findById(req.query.id)
      .then(result =>{
        res.status(200).json({ message: result })
    })
    .catch(err => res.status(500).json({}))
    } else {
    Blog.find({})
    .then(result =>{
      res.status(200).json({ message: result })
    })
    .catch(err => res.status(500).json({ error: err }))
  }
  }
  if(req.method == "POST"){
    mongoose.connect(mongoAtlasUri)
    let { name, description, photo, link } = req.body
    Blog.create({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      description: description,
      photo: photo,
      link: link,
      postedOn: new Date().toISOString()
    })
    .then(result => res.status(200).json({ message: result }))
    .catch(err => res.status(500).json({ err: err }))
  }
  if(req.method == "PUT"){
    mongoose.connect(mongoAtlasUri)
    let { name, description, photo } = req.body
    Blog.findByIdAndUpdate(req.query.id, { $set: req.body }, { new: true })
    .then(result => res.status(200).json({ message: result }))
    .catch(err => res.status(500).json({ error: err }))
  }
  if(req.method == "DELETE"){
    Blog.findByIdAndDelete(req.query.id)
    .then(result => res.status(200).json({ message: result }))
    .catch(err => res.status(500).json({ err: err }))
  }
}
