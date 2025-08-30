import express from "express";
import mongoose from "mongoose";
import employee from "./models/empolyee.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const mongoUri = process.env.MONGO_URI;
mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.set("view engine", "ejs");
app.set("views", "./views");

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/generate", async (req, res) => {
  try {
    let randomNames = ["Arsh", "Neha", "Rohan", "Sanya"];
    let randomLang = ["Python", "JavaScript", "Go", "Java"];
    let randomCities = ["Pune", "Jaipur", "Lucknow", "Indore"];
    let randomPosition = ["Engineer", "Manager", "Analyst"];

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

// ✅ Important: listen on the port Render provides
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
