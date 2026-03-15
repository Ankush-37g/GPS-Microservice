import express from "express";
import axios from "axios";

const app = express();
const PORT = 4001;

app.get("/location", async (req, res) => {

    try {

        const response = await axios.get("http://ip-api.com/json/");

        const data = {
            city: response.data.city,
            region: response.data.regionName,
            country: response.data.country,
            latitude: response.data.lat,
            longitude: response.data.lon,
            time: new Date()
        };

        res.json(data);

    } catch (error) {

        res.status(500).json({ error: "Unable to fetch location" });

    }
});

app.listen(PORT, () => {
    console.log(`GPS Microservice running on port ${PORT}`);
});