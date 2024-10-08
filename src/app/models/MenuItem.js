import mongoose, {model, models, Schema} from "mongoose";

const ExtraPriceSchema = new Schema({
  name:String,
  price:Number
})

const MenuItemSchema = new Schema({
  name: {type:String, required:true},
  description: {type:String, required:true},
  basePrice: {type:String, required:true},
  category: {type:mongoose.Types.ObjectId,ref: 'Category'},
  sizes:{type:[ExtraPriceSchema]},
  extraIngredientPrice:{type:[ExtraPriceSchema]}
}, {timestamps: true});

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);