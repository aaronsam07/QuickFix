import Work from "../models/Work.js";
import Review from "../models/Review.js";


export const createReview = async (req, res) => {
  const workId = req.params.workId;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();

    //after creating a new review now update the reviews array of the work
    await Work.findByIdAndUpdate(workId, {
      $push: { reviews: savedReview._id }
    });

    res
      .status(200)
      .json({ success: true, message: "Review Submitted", data: savedReview })
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to submit" })
  }
};
