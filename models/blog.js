import mongoose from "mongoose"
const { ObjectId } = mongoose.Schema.Types

const BlogSchema = mongoose.Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  postedOn: { type: String, required: true },
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)