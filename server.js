// server.js
const express = require("express");
const app = express();
app.use(function(req,res,next){setTimeout(next,1000)});
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    name: `John Doe #${id}`
  });
  setTimeout(function() {
     console.log('This printed after about 1 second');
  }, 1000);
});

app.listen(80, () => {
  console.log("Server running on port 80");
});

