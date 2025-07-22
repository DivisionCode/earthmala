import Artwork  from "../models/Artwork.js";
import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 600 })

export const getAllArtworks = async(req, res) => {
    try {

        const cached = cache.get('artworks')
        if (cached) {
        return res.json(cached)
        }
        const artworks = await Artwork.find();
        console.log(artworks)
        res.json(artworks);
    } catch(err) {
        res.status(500).json({error: 'Failed to fetch artworks.'});
    }
};