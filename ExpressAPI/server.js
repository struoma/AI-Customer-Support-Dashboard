const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "Express API Running",
  });
});

// Get tickets from n8n
app.get("/tickets", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5678/webhook/ticket");

    console.log("===== DATA FROM N8N =====");
    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);

    res.status(500).json({
      error: "Unable to fetch tickets from n8n",
    });
  }
});

app.listen(3000, () => {
  console.log("🚀 Express API running on http://localhost:3000");
});
