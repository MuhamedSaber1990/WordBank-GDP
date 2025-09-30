import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public")); // serve static files if needed

app.get("/", async (req, res) => {
  try {
    // World Bank API: Lithuania GDP per capita (constant 2015 US$)
    const url =
      "https://api.worldbank.org/v2/country/LT/indicator/NY.GDP.PCAP.KD?format=json&per_page=100";
    const response = await axios.get(url);

    const rawData = response.data[1];
    if (!rawData) {
      return res.render("index", { title: "No data", data: [] });
    }

    // Clean and reverse chronological order
    const data = rawData
      .filter((d) => d.value !== null)
      .map((d) => ({
        year: d.date,
        value: d.value,
      }))
      .reverse();

    res.render("index", {
      title: "GDP per capita (constant 2015 US$) in Lithuania",
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.render("index", { title: "Error fetching data", data: [] });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
