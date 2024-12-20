const { get } = require('http');
const db = require('../database/db');


module.exports = {
    fetchAllProducts: (req, res) => {
        const sql = "SELECT * FROM products ORDER BY id DESC";
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: "Internal Server Error"});
            } else {
                // console.log(result);
                if (result.length === 0) {
                    res.status(404).json({message: "No data found"});
                }else{
                    res.status(200).json({message: "Success", data: result});
                }
               
            }
        })
    },


    getProductById: (req, res) => {
        const id = req.params.id;
        console.log(id);
        const sql = "SELECT * FROM products WHERE id = ?";
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: "Internal Server Error"});
            } else {
                // console.log(result);
                if (result.length === 0) {
                    res.status(404).json({message: "No data found"});
                }else{
                    res.status(200).json({message: "Success", data: result});
                }
               
            }
        })
    },


    addProduct: (req, res) => {
        const {name, price, quantity, description} = req.body;
        const sql = "INSERT INTO products (name, price, quantity, description) VALUES (?, ?, ?, ?)";
        db.query(sql, [name, price, quantity, description], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: "Internal Server Error"});
            } else {
                // console.log(result);
                if (result.length === 0) {
                    res.status(404).json({message: "No data found"});
                }else{
                    res.status(200).json({message: "Success"});
                }
               
            }
        })
    },


    updateProduct: (req, res) => {
        const id = req.params.id;
        const {name, price, quantity, description} = req.body;
        const sql = "UPDATE products SET name = ?, price = ?, quantity = ?, description = ? WHERE id = ?";
        db.query(sql, [name, price, quantity, description, id], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: "Internal Server Error"});
            } else {
                // console.log(result);
                if (result.length === 0) {
                    res.status(404).json({message: "No data found"});
                }else{
                    res.status(200).json({message: "Success"});
                }
               
            }
        })
    },

    deleteProduct: (req, res) => {
        const id = req.params.id;
        const sql = "DELETE FROM products WHERE id = ?";
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: "Internal Server Error"});
            } else {
                // console.log(result);
                if (result.length === 0) {
                    res.status(404).json({message: "No data found"});
                }else{
                    res.status(200).json({message: "Success"});
                }
               
            }
        })
    },

    //-----------------

    totalPriceOfProducts: (req, res) => {
        const sql = "SELECT SUM(price * quantity) AS total_price FROM products";
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: "Internal Server Error"});
            } else {
                // console.log(result);
                if (result.length === 0) {
                    res.status(404).json({message: "No data found"});
                }else{
                    // console.log(result);
                    res.status(200).json({message: "Success", data: result});
                }
               
            }
        })
    },

    searchProducts: (req, res) => { 
        const search = req.params.search;
        const sql = "SELECT * FROM products WHERE name LIKE ?";
        db.query(sql, [`${search}%`], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: "Internal Server Error"});
            } else {
                // console.log(result);
                if (result.length === 0) {
                    res.status(404).json({message: "No data found"});
                }else{
                    res.status(200).json({message: "Success", data: result});
                }
               
            }
        })
    }

}