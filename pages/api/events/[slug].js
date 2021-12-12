const { events } = require('./Data.json')

export default function handler(req, res) {
  const slug = req.query.slug
  const evt = events.filter((ev) => ev.slug === slug)

  if (req.method == 'GET') {
    res.status(200).json(evt)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Mehod ${req.method} is not allowed` })
  }
}
