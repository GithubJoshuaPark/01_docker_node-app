const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 80;
let userGoal = 'Learn Docker!';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// serve static files
app.use(express.static('public'));

// Route to display the page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <script src="scripts.js"></script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="description" content="Goal App">
        <meta name="author" content="Docker">
        <meta name="keywords" content="Docker, Goal App">
        <meta name="robots" content="index, follow">
        <meta name="googlebot" content="index, follow">
        <meta name="google" content="nositelinkssearchbox">
        <meta name="google" content="notranslate">
        <meta name="google" content="max-snippet:-1">
        <meta name="google" content="max-image-preview:large">
        <meta name="google" content="max-video-preview:-1">
        <meta property="og:locale" content="en_US">
        <meta property="og:type" content="website">
        <title>Goal App</title>
      </head>
      <body>
        <section>
          <h2>My Course Goal !!!!</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="post">
          <div class="form-control">
            <label for="newGoal">New Goal</label>
            <input type="text" name="newGoal" />
          </div>
          <button type="submit">Set Goal</button>
        </form>
      </body>
    </html>
  `);
});

// Route to handle form submission
app.post("/store-goal", (req, res) => {
  const newGoal = req.body.newGoal;
  console.log(newGoal);
  userGoal = newGoal;
  res.redirect("/");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🍎 ~ app.listen ~ PORT:`, PORT);
  console.log(`Server is running at http://localhost:${PORT}`);
});