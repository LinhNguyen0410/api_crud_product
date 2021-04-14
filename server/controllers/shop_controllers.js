//controller
//import mongoose from 'mongoose';
const Shop = require("../models/shop_model");

// create new product
exports.shop_create = function createShop(req, res) {
    const shop = new Shop({
        code: req.body.code,
        name: req.body.name,
        description: req.body.description,
        due_date: req.body.due_date,
        price: req.body.price,
    });

    return shop
        .save()
        .then((newShop) => {
            return res.status(201).json({
                success: true,
                message: "Thêm thành công một sản phẩm mới.",
                Shop: newShop,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Server lỗi.Vui lòng thử lại.",
                error: error.message,
            });
        });
};
// get all product
exports.shop_getAll = function getAll(req, res) {
    Shop.find()
        .select("_id code name description due_date price")
        .then((allShop) => {
            return res.status(200).json({
                success: true,
                message: "Danh sách tất cả các sản phẩm",
                Shop: allShop,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Server lỗi.Vui lòng thử lại.",
                error: err.message,
            });
        });
};
// get single product
exports.shop_getSingle = function getSingleShop(req, res) {
    const id = req.params.shopId;
    Shop.findById(id)
        .then((singleShop) => {
            res.status(200).json({
                success: true,
                message: `Đã tìm thấy  ${singleShop.code}`,
                Student: singleShop,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Không tìm thấy sản phẩm này.",
                error: err.message,
            });
        });
};
// update;
exports.shop_update = function updateShop(req, res) {
    const id = req.params.shopId;
    const updateObject = req.body;
    Shop.update({ _id: id }, { $set: updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: "Thay đổi đã được lưu.",
                updateStudent: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Lỗi server.Vui lòng thử lại",
            });
        });
};
// delete
exports.shop_delete = function deleteShop(req, res) {
    const id = req.params.shopId;
    Shop.findByIdAndRemove(id)
        .exec()
        .then(() =>
            res.status(204).json({
                success: true,
                message: "Xóa thành công.",
            })
        )
        .catch((err) =>
            res.status(500).json({
                success: false,
                message: "Lỗi server.Vui lòng thử lại",
            })
        );
};