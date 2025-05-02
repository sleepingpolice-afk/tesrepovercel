const express = require("express");
const router = express.Router();
const controller = require("./controller"); 

// Define the routes
router.post("/createContact", controller.createContact);  
router.get("/getContacts", controller.getAllContacts);  
router.delete("/deleteContact/:id", controller.deleteContact);

module.exports = router;
