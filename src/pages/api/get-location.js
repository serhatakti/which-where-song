import axios from "axios";

export default function handler(req, res) {
  const params = {...req.query};
  params.key=process.env.GOOGLE_API_KEY
    params.radius=process.env.RADIUS
  axios.get('/maps/api/place/nearbysearch/json',{params: params, baseURL:'https://maps.googleapis.com'})
      .then(response => {
        res.status(200).send(response.data)
      })
      .catch(err => res.status(400).send(err))
}
