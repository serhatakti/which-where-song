import axios from "axios";
import {get} from '@vercel/edge-config';

export default async function handler(req, res) {
    const params = {...req.query};
    const radius=  await get('radius');
    params.key = process.env.GOOGLE_API_KEY
    params.radius = radius
    axios.get('/maps/api/place/nearbysearch/json', {params: params, baseURL: 'https://maps.googleapis.com'})
        .then(response => {
            res.status(200).send(response.data)
        })
        .catch(err => res.status(400).send(err))
}
