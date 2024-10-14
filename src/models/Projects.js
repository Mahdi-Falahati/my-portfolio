import { Schema, model, models } from "mongoose";

const projectsSchema = new Schema({
  title: String,
  description: String,
  link: { live: String, code: String },
  tecnologhy: [String],
  img: String,
});

const Projects = models.Projects || model("Projects", projectsSchema);

export default Projects;
