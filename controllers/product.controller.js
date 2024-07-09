const Product = require("../models/product.model");

// all CRUD logic for my products API here
// Create a product logic
const createProduct = async (req, res) => {
    	try {
				const product = await Product.create(req.body);
				res.status(200).json(product);
			} catch (error) {
				res.status(500).json({ message: error.message });
			}
}

// Read products logic
const getProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Read a particular product(by id) logic
const getProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Update a product logic
const updateProduct = async (req, res) => {
    try {
			const { id } = req.params;
			const product = await Product.findByIdAndUpdate(id, req.body);
			if (!product) {
				return res.status(404).json({ message: "Product not found!" });
			}
			const updatedProduct = await Product.findById(id);
			res.status(200).json(updatedProduct);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
}

// Delete a product logic
const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}
		res.status(200).json({ message: "Product deleted successfully!" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
