import * as mongoose from "mongoose";

function connectToMongoAtlas() {
  mongoose.connect(process.env.MONGO_ATLAS_URL, {
    // userNewUrlParser: true,
    // userUnifiedTopology: true,
  });
}

// To not follow schemas
mongoose.set("strictQuery", false);

export default connectToMongoAtlas;
