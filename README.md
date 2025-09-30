# 📊 World Bank GDP per Capita Visualization  

## Overview  
This project loads **open data from the World Bank API**, processes it, and displays a clear visualization of Lithuania’s GDP per capita (constant 2015 US$) over time.  

It was built for an assignment requiring:  
- Programmatic loading of open data  
- Minimal processing/cleaning  
- Computation of a simple indicator  
- Output as a figure (line chart)  

---

## ✨ Features  
- Fetches **GDP per capita (NY.GDP.PCAP.KD)** for Lithuania from the World Bank API.  
- Cleans data by filtering out null values and selecting relevant fields.  
- Computes a simple summary metric:  
  - **Average GDP per capita for the last 10 years.**  
- Displays results in:  
  - An interactive **line chart** (using Chart.js).  
  - A short summary text.  

---

## 📂 Project Structure  
```
worldbank-gdp-visualization/
 ├── app.js        # Main Express server
 ├── package.json     # Dependencies and scripts
 ├── views/
 │    └── index.ejs   # EJS template for rendering chart
 └── README.md        # This file
```

---

## 🔗 Dataset Information  
- **Source:** World Bank Open Data  
- **Dataset Title:** GDP per capita (constant 2015 US$)  
- **Indicator ID:** `NY.GDP.PCAP.KD`  
- **Country:** Lithuania (`LT`)  
- **API Endpoint:**  
  ```
  https://api.worldbank.org/v2/country/LT/indicator/NY.GDP.PCAP.KD?format=json&per_page=100
  ```
- **License:** [World Bank Open Data License (CC-BY 4.0)](https://datacatalog.worldbank.org/public-licenses#cc-by)  

---

## ⚙️ Installation & Running  

### On Replit  
1. Create a new Repl → choose **Node.js**.  
2. Upload the files (`app.js`, `views/index.ejs`, `package.json`).  
3. In the Shell, install dependencies:  
   ```bash
   npm install
   ```  
4. Run the project with:  
   ```bash
   npm start
   ```  
5. Open the web preview link to view the chart.  

### Locally  
1. Clone/download this repo.  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Start the server:  
   ```bash
   npm start
   ```  
4. Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## 📊 Output  
- **Line Chart:** GDP per capita trend for Lithuania (1990–2024).  
- **Summary Metric:** Average GDP per capita for the last 10 years.  

---

## 📝 Report Summary  

- **Dataset Chosen:** World Bank – GDP per capita (constant 2015 US$).  
- **Access Method:** JSON API request via `axios`.  
- **Cleaning/Transformations:** Filtered out null values, reversed data order for plotting, extracted year/value pairs.  
- **Produced Result:**  
  - Visualization: Line chart showing GDP per capita growth over time.  
  - Computed Metric: Average GDP per capita (2015–2024).  
- **Obstacles:**  
  - Initial errors with invalid indicator codes (`EN.ATM.CO2E.PC` not found).  
  - Resolved by exploring the `/indicator` endpoint to locate `NY.GDP.PCAP.KD`.  
- **License:** World Bank Open Data (CC-BY 4.0).  

---

## ✅ Requirements Checklist  
- [x] Open dataset used (World Bank).  
- [x] Programmatic data loading.  
- [x] Minimal processing & cleaning.  
- [x] Computed indicator (10-year average).  
- [x] Clear output (line chart + summary).  
- [x] Fully reproducible with `npm start`.  
