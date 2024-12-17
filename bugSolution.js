const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Improved error handling
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Failed to fetch user' }); //More informative error
    } else if (!user) {
      res.status(404).json({ error: 'User not found' }); //Clear error message
    } else {
      res.json(user);
    }
  });
});
//Other express routes...//Consider using async/await and try...catch for better readability and error handling
//Example using async/await
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try{
    const user = await db.getUser(userId);
    if(!user){
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch(error){
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});