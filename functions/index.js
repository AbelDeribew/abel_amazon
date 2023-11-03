const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51O7FSALuKUp1VynhjA3gTaq5kvjzYV2dtS3H5Jsi11UvH3NMBjcpdg1ZF8i7gLjbGqGXbjuGqinyOND8kyg82oT500tFntYrFL"
);

     
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send("hello world"));


app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	console.log("Payment Request Recieved for this amount >>> ", total);
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total),
			currency: "usd",
		});

		// OK - Created
		res.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).send("something went wrong");
	}
});


// listen command
app.listen(5500, (err) => {
	if (!err) {
		console.log("server is running on http://localhost:5500");
	}
});
// http://127.0.0.1:5001/abel-a0609/us-central1/api