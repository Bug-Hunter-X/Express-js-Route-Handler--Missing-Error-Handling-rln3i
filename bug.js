const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // No proper error handling here
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      // No handling for user not found
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

//Other express routes...