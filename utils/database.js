import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)
  // console.log('is running...', process.env.MONGODB_URI)

  if(isConnected){
    // console.log('MongoDB is already starting')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompts',
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    isConnected = true
    console.log('MongoDB connected')
  } catch (err) {
    console.log(err)
  }
}