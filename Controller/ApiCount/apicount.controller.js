const apicountModel = require("../../Model/ApiCount/apicount.model");


const GetApiCount = async (req, res) => {
    try {
        const count = await apicountModel.findOne();
        res.status(200).json(count);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

module.exports = { GetApiCount };