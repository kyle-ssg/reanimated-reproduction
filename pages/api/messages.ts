import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    res.status(200).json({ res: 'ok' })
  }, 2000)
}
