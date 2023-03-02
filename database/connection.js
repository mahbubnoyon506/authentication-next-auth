const { default: mongoose } = require("mongoose");
const URI = ""

const connectMongo = async () => mongoose.connect(process.env.MONGO_URL);

export default connectMongo;