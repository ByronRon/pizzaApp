import mongoose from "mongoose";

const PromoSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: false,
      maxlength: 60,
    },
    price: {
      type: Number,
    },
    promoPrice: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.models.Promo || mongoose.model("Promo", PromoSchema);
