const express = require("express");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/tickets", async (req, res) => {
    try {
        const response = await axios.get(
            "http://localhost:5678/webhook/ticket"
        );

        res.json(response.data);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            error: "Unable to fetch tickets"
        });
    }
});

app.listen(3000, () => {
    console.log("🚀 Express API running on http://localhost:3000");
});

app.listen(3000, () => {
    console.log("🚀 Express API running on http://localhost:3000");
});