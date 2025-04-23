const app = require('./app');
// const http = require('http');
const { PORT } = require('./utils/config');
const connectToDB = require('./db');



// const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDB(); 
});
