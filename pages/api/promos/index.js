import Promo from "../../../models/Promo";
import dbConnect from "../../../util/mongo";

const handler = async (req, res) => {
  const { method, cookies } = req;
  const token = cookies.token;
  await dbConnect();

  if (method == "GET") {
    try {
      const promos = await Promo.find();
      res.status(200).json(promos);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    // if (!token || token !== process.env.TOKEN) {
    //   return res.status(401).json("Not authenticated");
    // }
    try {
      const promo = await Promo.create(req.body);
      res.status(201).json(promo);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
