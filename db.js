const mongoose = require('mongoose')

const url = process.env.ATLAS_URI`mongodb+srv://Fitness:<Trick$21>@cluster0.vnjpr.mongodb.net/Fitness?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })