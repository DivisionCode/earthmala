import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Lipan Art', 'Mandala', 'Embroidery', 'Crochet Art'],
  },
  description: {
    type: String,
    default: '',
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
  timestamps: true, 
});

export default mongoose.model('Artwork', artworkSchema);