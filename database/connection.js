const { default: mongoose } = require("mongoose");

const connectMongo = async () => mongoose.connect(process.env.MONGO_URL);

export default connectMongo;