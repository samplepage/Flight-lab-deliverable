const dbConfig = require('./config/db.config')


const db = require("./models");
const Airport = db.airport;
const Flight = db.flight;
const Terminal = db.terminal;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

airport.save()
console.log("Airport saved", airport)
// Lets Make and Save our first airport

const flight1 = new Flight({
  from: "Paris France",
  to: "Jfk NY",
  airline: "Delta"
})
flight1.save()
console.log("Flight1 saved", flight1)

const flight2 = new Flight({
  from: "London England",
  to: "JFK NY",
  airline: "British Airways"
})
flight2.save()
console.log("Flight2 saved", flight2)

const flight3 = new Flight({
  from: "Miami Florida",
  to: "Jfk NY",
  airline: "Jetblue"
})
flight3.save()
console.log("Flight3 saved", flight3)

const airport1 = new Airport({
  name: "JFK",
  country: "USA",
})
airport1.save().then(data=>{
  console.log("Airport1 saved", airport1)
  const terminal1 = new Terminal({
    name: "Terminal 1",
    capacity: 123456,
    flights: [flight1, flight2]
  })
  terminal1.save().then((data)=>{
    Airport.findOneAndUpdate({
      name: "JFK"
    }, {$push:{ terminals: data}}, {useFindAndModify: false, new:true}).then((data)=>{
      console.log('airport updated', data)
    })
  })
})