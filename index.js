const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());

// middleware configuration to allow for entering data in other formats (eg. form encoded format) aside the JSON format

app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.listen(5000, () => {
	console.log("Server is running on port 5000 and thank you");
});

// Get backend api homepage (initial url testing)
app.get("/", (req, res) => {
	res.send("Hello from Node BACKEND API, welcome!");
});


{/* All code logic below initially, before organization into seperate folders and files. am keeping them for reference purpose */}
// Post API: make a post request
// app.post("/api/products", async (req, res) => {
// 	try {
// 		const product = await Product.create(req.body);
// 		res.status(200).json(product);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// 	res.send(req.body);
// });

// Get API: make a get request to view all products
// app.get("/api/products", async (req, res) => {
// 	try {
// 		const products = await Product.find({});
// 		res.status(200).json(products);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });

// Get API: make a get request to view a particular product
// app.get("/api/products/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findById(id);
// 		res.status(200).json(product);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });

// Update API: make an update request to update a product
// app.put("/api/products/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findByIdAndUpdate(id, req.body);
// 		if (!product) {
// 			return res.status(404).json({ message: "Product not found!" });
// 		}
// 		const updatedProduct = await Product.findById(id);
// 		res.status(200).json(updatedProduct);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });

// Delete a product
// Delete API: make a delete request to delete a product
// app.delete("/api/product/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await Product.findByIdAndDelete(id);
// 		if (!product) {
// 			return res.status(404).json({ message: "Product not found" });
// 		}
// 		res.status(200).json({ message: "Product deleted successfully!" });
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });

mongoose
	.connect(
		"mongodb+srv://zakariadamu714:F8Nb5px1gNcNvnL9@simple-crud-restful-api.eczrgu3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Simple-crud-restful-api"
	)
	.then(() => {
		console.log("Connected to database!");
	})
	.catch(() => console.log("Connection failed"));
