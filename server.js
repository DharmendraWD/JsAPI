// server.js
const express = require('express');
const app = express();
const port = 3000;

// RANDOM DATA 
let arrayOfObjects = [
    { id: 1, name: "John Doe", phoneNumber: "123-456-7890", profession: "Engineer" },
    { id: 2, name: "Jane Smith", phoneNumber: "456-789-0123", profession: "Doctor" },
    { id: 3, name: "Alice Johnson", phoneNumber: "789-012-3456", profession: "Teacher" },
    { id: 4, name: "Bob Brown", phoneNumber: "234-567-8901", profession: "Artist" },
    { id: 5, name: "Emily Davis", phoneNumber: "567-890-1234", profession: "Writer" },
    { id: 6, name: "Michael Wilson", phoneNumber: "890-123-4567", profession: "Scientist" },
    { id: 7, name: "Sarah Martinez", phoneNumber: "345-678-9012", profession: "Lawyer" },
    { id: 8, name: "David Taylor", phoneNumber: "678-901-2345", profession: "Chef" },
    { id: 9, name: "Karen Anderson", phoneNumber: "901-234-5678", profession: "Entrepreneur" },
    { id: 10, name: "James Lee", phoneNumber: "432-109-8765", profession: "Athlete" }
];

app.use(express.static('./public')); //--> says from where to load file
app.get('/', (req, res)=>{
  res.sendFile(__dirname + 'index.html')

})

// Defining a route for handling client communication
app.get('/api/message', (req, res) => {
	res.send({arrayOfObjects});
  });
  
// Starting the server
app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
