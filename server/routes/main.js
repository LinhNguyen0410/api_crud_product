//router
const express = require("express");
const Shop = require("../controllers/shop_controllers");

const router = express.Router();
//create a new Shop
router.post("/shops", Shop.shop_create);

// get all Shop
router.get("/shops", Shop.shop_getAll);

// get single Shop
router.get("/shops/:shopId", Shop.shop_getSingle);

//update
router.patch("/shops/:shopId", Shop.shop_update);

// delete Shop dung put
router.put("/shops/:shopId", Shop.shop_delete);

module.exports = router;