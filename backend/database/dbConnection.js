import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://shivachandan9a:shiva@cluster0.h2krxsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};