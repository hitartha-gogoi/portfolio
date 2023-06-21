import mongoose from "mongoose"
const { ObjectId } = mongoose.Schema.Types

const UserSchema = mongoose.Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  id: { type: String, required: true },
  email: { type: String, required: true, unique: true  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)