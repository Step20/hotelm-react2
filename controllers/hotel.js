const Hotel = require("../models/Hotel");
const hotelsCtrl = {
  getHotel: async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  },
  getHotels: async (req, res) => {
    const { ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
      });
      res.status(200).json(hotels);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = hotelsCtrl;
