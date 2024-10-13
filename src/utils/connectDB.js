import { connections, connect, set } from "mongoose";

const connectDB = async () => {
  if (connections[0].readyState) return;

  set("strictQuery", false);
  await connect(process.env.MONGO_URI);
};

export default connectDB;
