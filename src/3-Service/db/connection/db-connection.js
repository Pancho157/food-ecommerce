import * as mongoose from "mongoose";

async function connectToMongoAtlas() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASS}@${process.env.MONGO_ATLAS_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
    {
      // userNewUrlParser: true,
      // userUnifiedTopology: true,
    }
  );
}

// To not follow schemas
mongoose.set("strictQuery", false);

export default connectToMongoAtlas;
