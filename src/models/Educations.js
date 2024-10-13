import { Schema, model, models } from "mongoose";

const educationsSchema = new Schema({
  title: String,
  description: String,
  color: String,
  location: String,
});

const Educations = models.Educations || model("Educations", educationsSchema);

export default Educations;
