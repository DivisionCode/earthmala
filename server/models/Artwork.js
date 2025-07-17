import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    price: Number,
});

export default mongoose.model('Artwork', artworkSchema);