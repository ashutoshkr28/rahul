// import { connectToDatabase } from "@/lib/mongodb";
// import Clinic from "@/models/Clinic";

// export default async function handler(req, res) {
//   if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

//   try {
//     await connectToDatabase();
//     const { query } = req.query;

//     const clinics = await Clinic.find({
//       $or: [
//         { name: { $regex: query, $options: "i" } },
//         { location: { $regex: query, $options: "i" } },
//         { keywords: { $in: [new RegExp(query, "i")] } },
//       ],
//     }).limit(10);

//     res.status(200).json(clinics);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching search results", error });
//   }
// }
