// import { connectToDatabase } from "@/lib/mongodb";
// import Clinic from "@/models/Clinic";

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

//   await connectToDatabase();

//   await Clinic.insertMany([
//     { name: "Smile Dental Care", location: "Babubarahi, Madhubani, India", keywords: ["best dental clinic", "Babubarahi", "dentist"], rating: 4.9 },
//     { name: "Healthy Teeth Clinic", location: "Babubarahi Petrol Pumb, India", keywords: ["dental specialist", "Babubarahi", "tooth care"], rating: 4.7 },
//     { name: "Pearl White Dental", location: "Babubarahi Dental Clinic, India", keywords: ["best dentist", "Madhubani", "oral health"], rating: 4.8 },
//   ]);

//   res.status(200).json({ message: "Sample data added!" });
// }

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Clinic from "@/models/Clinic";

export async function POST() {
  await connectToDatabase();

  await Clinic.insertMany([
    { name: "Smile Dental Care", location: "Babubarahi, Madhubani, India", keywords: ["best dental clinic", "Babubarahi", "dentist"], rating: 4.9 },
    { name: "Healthy Teeth Clinic", location: "Babubarahi Petrol Pumb, India", keywords: ["dental specialist", "Babubarahi", "tooth care"], rating: 4.7 },
     { name: "Pearl White Dental", location: "Babubarahi Dental Clinic, India", keywords: ["best dentist", "Madhubani", "oral health"], rating: 4.8 },
  ]);

  return NextResponse.json({ message: "Sample data added!" });
}
