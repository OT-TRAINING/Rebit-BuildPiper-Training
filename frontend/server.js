const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ReBIT Training</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            text-align: center;
            margin: 0;
            padding: 0;
          }
          .marquee {
            background-color: #0078D7;
            color: white;
            font-size: 18px;
            padding: 10px;
            white-space: nowrap;
            overflow: hidden;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          }
          .marquee span {
            display: inline-block;
            animation: scroll 15s linear infinite;
          }
          @keyframes scroll {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          .container {
            margin-top: 50px;
          }
          .logo {
            width: 150px;
            vertical-align: middle;
          }
          .main-heading {
            font-size: 42px;
            color: #0056b3;
            border: 4px solid #0056b3;
            border-radius: 15px;
            padding: 10px 30px;
            display: inline-block;
            margin: 30px 20px;
            font-weight: bold;
            background-color: #ffffff;
          }
          .links {
            margin-top: 40px;
          }
          .links a {
            display: inline-block;
            margin: 20px 20px;
            padding: 15px 30px;
            color: white;
            background-color: #0078D7;
            border-radius: 8px;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;
            transition: 0.3s;
          }
          .links a:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }
          footer {
            margin-top: 50px;
            font-size: 14px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="marquee">
          <span>Rebit Training... Welcome to DevOps Team...</span>
        </div>

        <div class="container">
          <img src="https://rebit.org.in/assets/images/rebit-web-logo.svg" class="logo" alt="ReBIT Logo"/>
          <span class="main-heading">ReBIT Training</span>
          <img src="https://rebit.org.in/assets/images/rebit-web-logo.svg" class="logo" alt="ReBIT Logo"/>

          <div class="links">
            <a href="/devops/team">DevOps Team</a>
          </div>

          <footer>© 2025 DevOps Training Portal</footer>
        </div>
      </body>
    </html>
  `);
});

app.get("/devops/:team", async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/devops/team`);
    res.send(`
      <html>
        <head>
          <title>${req.params.team}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              margin-top: 100px;
              color: #0056b3;
            }
            h2 {
              border: 2px solid #0078D7;
              padding: 15px 25px;
              border-radius: 10px;
              display: inline-block;
              background-color: #e6f0ff;
            }
            a {
              text-decoration: none;
              color: #0078D7;
              display: inline-block;
              margin-top: 30px;
              font-weight: bold;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <h2>${response.data}</h2>
          <br><br>
          <a href="/">⬅ Back to Home</a>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send("<h3>Error contacting backend: " + err.message + "</h3>");
  }
});

app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));

