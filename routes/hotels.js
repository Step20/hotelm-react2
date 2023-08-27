const router = require("express").Router();

const hotelsCtrl = require("../controllers/hotel");

// //CREATE
// router.post("/", createHotel);

// //UPDATE
// router.put("/:id", updateHotel);
// //DELETE
// router.delete("/:id", deleteHotel);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL

router.get("/", hotelsCtrl.getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

module.exports = router;
