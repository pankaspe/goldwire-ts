import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../config/mongoose";
import Subscriber from "../../../models/subscriber.model";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();

    const subscriber = await Subscriber.create(req.body);

    res.json({ subscriber });
  } catch (error) {
    res.json({ error });
  }
}
