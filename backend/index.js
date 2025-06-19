const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5050;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/cards", async (req, res) => {
  try {
    const response = await axios.get(
      "https://srilaprabhupadalila.com/v2/api/card",
      {
        params: {
          queryId: "QUERY_GET_ALL_CARDS_FOR_DAY",
          args: "day:1,month:6,web:1",
         
        }
      }
    );
    console.log(response.data);
    const cards = response.data.resource?.map(item => item.card).filter(Boolean); // filters out null/undefined
    res.json(cards); // must return just an array
    

  } catch (error) {
    console.error("Error fetching cards:", error.message);
    res.status(500).json({ error: "Failed to fetch cards" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
