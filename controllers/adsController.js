const Ad = require("../model/adModel");

exports.getAllAds = async (req, res) => {
  try {
    const totalAds = await Ad.find();

    res.status(200).json({
      status: "success",

      results: totalAds.length,
      data: {
        Ads: totalAds,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createAd = async (req, res) => {
  console.log(req.body);
  try {
    const newAd = await Ad.create({
      campaignName: req.body.campaignName,
      linkURL: req.body.linkURL,
      imageURL: req.body.imageURL,
    });

    res.status(201).json({
      status: "success",
      data: {
        tour: newAd,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};
