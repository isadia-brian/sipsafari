import { model, models, Schema } from "mongoose";

const DrinkModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  manufacturer: {
    type: string,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Drink = models.Drink || model("Drink", DrinkModel);
export default Drink;
