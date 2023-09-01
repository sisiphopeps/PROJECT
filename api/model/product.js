const db = require("../config/index");

const getProducts = (result) => {
    db.query("SELECT * FROM Products", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

const getProductById = (id, result) => {
    db.query("SELECT * FROM Products WHERE ProdID = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
};

const insertProduct = (data, result) => {
    db.query("INSERT INTO Products (ProdID, ProdName, Price, Quantity, Category, ProdUrl) VALUES (?, ?, ?, ?, ?, ?)",
        [data.ProdID, data.ProdName, data.Price, data.Quantity, data.Category, data.ProdUrl],
        (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};

const updateProductById = (data, id, result) => {
    db.query("UPDATE Products SET ProdName = ?, Price = ?, Quantity = ?, Category = ?, ProdUrl = ? WHERE ProdID = ?",
        [data.ProdName, data.Price, data.Quantity, data.Category, data.ProdUrl, id],
        (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};

const deleteProductById = (id, result) => {
    db.query("DELETE FROM Products WHERE ProdID = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProductById,
    deleteProductById
};
