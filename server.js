const dotenv = require('dotenv');
dotenv.config({ path: '/Users/owner/Desktop/M4-Database-Design' });

const app = require('/Users/owner/Desktop/');
//new code
const mongoose = require('mongoose');

const MONGO_DATA_BASE = process.env.DATABASE.replace('test', process.env.DB_PASSWORD);

//Connext to database
mongoose.connect(MONGO_DATA_BASE,
  //connection recipie
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }).then(con=>{
    console.log(con.connection);// log connection properties
    console.log(`The Database connection was successful with ${process.env.DATABASE}`);// log connection properties
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
//** Code END