const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res) => {
  res.render("home", { posts });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.title,
    content: req.body.content
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postTitle", (req, res) => {
  const requestedTitle = req.params.postTitle.toLowerCase();
  const foundPost = posts.find(post => post.title.toLowerCase() === requestedTitle);
  if (foundPost) {
    res.render("post", { post: foundPost });
  } else {
    res.send("Post not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
