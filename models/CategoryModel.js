import { models, model, Schema } from "mongoose";

const CategoryModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Category = models.Category || model("Category", CategoryModel);

export default Category;
