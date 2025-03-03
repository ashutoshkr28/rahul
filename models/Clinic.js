import mongoose from "mongoose";

const ClinicSchema = new mongoose.Schema({
  name: "Narayan Dental Clinic",
  location: "Near Babubarahi Petrol Pump", // e.g., "Mumbai, India"
  keywords: ["best dental doctor in babubarahi", "narayan dental clinic babubarahi", "dental clinic babubarahi"], // e.g., ["best dentist", "dental care", "Mumbai"]
  rating: Number, // e.g., 4.8
});

export default mongoose.models.Clinic || mongoose.model("Clinic", ClinicSchema);
