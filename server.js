//Here is where we require mongoose and express

const mongoose = require ('mongoose');
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use (express.json());
app.use (express.urlencoded({ extended: true }));
app.use (express.static ('public'));
app.use (require ('./routes'));

//Here is where we will connect to mongoose

mongoose.connect (process.env.MONGODB_URI || 'mongodb://localhost/socialsAPI', {
useFindAndModify: false,
useNewUrlParser: true,
useUnifiedTopology: true
});

//This will log mongoose queries
mongoose.set ( 'debug', true);

app.listen (PORT, () => console.log (`Connection Established:${PORT}`));