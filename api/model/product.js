const db = require("../config/index");

class Products {
    constructor() {      
    }
    getProducts(req, res) {
        const query = `
        SELECT ProdID, ProdName,Price, Quantity,Category, ProdUrl
        FROM Products;
        `
        db.query(query, (err, results) => {
            if(err) {
                throw err
            } else {
                res.json({  status: res.statusCode, results  });
            }
        })
    }
    // Get a single product
    getProduct(req, res) {
        const query = `
        SELECT  ProdID, ProdName,Price, Quantity,Category, ProdUrl
        FROM Products
        WHERE ProdID = ${req.params.id};
        `
        db.query(query, (err, result) => {
            if (err) {
                throw err
            } else {
                res.json({ status: res.statusCode, result });
            }
        })
    }
    // Add a product
    addProduct(req, res) {
        const data = req.body
        const query = `
        INSERT INTO Products
        SET ?;
        `
        db.query(query,[data], (err) => {
            if(err) {
                throw err
            } else {
                res.json({ status: res.statusCode, msg: "Product added!" })
            }
        })
    }
    // Update and or edit a single product
    updateProduct(req, res) {
        const query = `
        UPDATE Products
        SET ?
        WHERE ProdID = ?
        `
        db.query(query, [req.body, req.params.id], (err) => {
                if(err) {
                    throw err
                } else {
                    res.json({ status: res.statusCode, msg: "Product updated!" })
            }
        })
    }
    // Delete a product
    deleteProduct(req, res) {
        const query = `
        DELETE FROM Products
        WHERE ProdID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) {
                throw err
            } else {
                res.json({ status: res.statusCode, msg: "Product deleted!" })
            }
        })
    }
}
module.exports = Products;