import Artwork  from "../models/Artwork.js";

export const getAllArtworks = async(req, res) => {
    try {
        const artworks = await Artwork.find();
        console.log(artworks)
        res.json(artworks);
    } catch(err) {
        res.status(500).json({error: 'Failed to fetch artworks.'});
    }
};