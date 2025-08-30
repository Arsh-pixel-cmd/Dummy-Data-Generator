import express from "express";
import mongoose from "mongoose";
import employee from "./models/empolyee.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.set("view engine", "ejs");
app.set("views", "./views");

// Utility function for random values
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/generate", async (req, res) => {
  try {
    let randomNames = ["Arsh","Neha","Rohan","Sanya","Karan","Meera","Vikram","Tanya","Aditya","Pooja","Mahesh"];
    let randomLang = ["Python","JavaScript","Ruby","Go","Swift","Kotlin","Rust","PHP","TypeScript","C#","Java"];
    let randomCities = ["Jaipur","Pune","Lucknow","Indore","Surat","Patna","Bhopal","Coimbatore","Vadodara","Guwahati"];
    let randomPosition = ["Software Engineer","Product Manager","Data Analyst","HR Coordinator","Marketing Specialist","Sales Executive","UX Designer","Finance Associate","Operations Manager","IT Support"];

    let employees = [];
    for (let i = 0; i < 10; i++) {
      let emp = await employee.create({
        name: getRandom(randomNames),
        salary: Math.floor(Math.random() * 200000),
        language: getRandom(randomLang),
        city: getRandom(randomCities),
        position: getRandom(randomPosition),
        isManager: Math.random() > 0.5,
      });
      employees.push(emp);
    }

    res.json({ success: true, employees });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

// ✅ Local only: start server
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
}

export default app;
