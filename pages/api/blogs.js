import mongoose from "mongoose"
import Blog from "../../models/blog"
import "dotenv/config"

const mongoAtlasUri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.13cuqv2.mongodb.net/?retryWrites=true&w=majority`;
  

export default function handler(req, res) {
  
  if(req.method == "GET"){
    mongoose.connect(mongoAtlasUri)
    Blog.find({})
    .then(result =>{
      res.status(200).json({ message: result })
    })
    .catch(err => res.status(500).json({ error: err }))
  }
  if(req.method == "POST"){
    mongoose.connect(mongoAtlasUri)
    let { description, photo, postedBy } = req.body
    Blog.create({
      _id: new mongoose.Types.ObjectId(),
      description: description,
      photo: photo,
      postedBy: postedBy,
      postedOn: "10"
    })
    .then(result => res.status(200).json({ message: result }))
    .catch(err => res.status(500).json({ err: err }))
  }
  if(req.method == "PUT"){
    res.send("Hello World PUT")
  }
  if(req.method == "DELETE"){
    Blog.findByIdAndDelete(req.query.id)
    .then(result => res.status(200).json({ message: result }))
    .catch(err => res.status(500).json({ err: err }))
  }
}
