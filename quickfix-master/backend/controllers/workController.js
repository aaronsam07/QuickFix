import Work from "../models/Work.js";

// create new worker
export const createWork = async (req, res) => {
  const newWork = new Work(req.body);

  try {
    const savedWork = await newWork.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedWork,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed to create.Try again" });
  }
};

// update tour
export const updateWork = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedWork = await Work.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedWork,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed to update.Try again" });
  }
};

// delete tour
export const deleteWork = async (req, res) => {
  const id = req.params.id;

  try {
    await Work.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed to delete.Try again" });
  }
};

// getSingle work
export const getSingleWork = async (req, res) => {
  const id = req.params.id;

  try {
    const work = await Work.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfull",
      data: work,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// getAll work
export const getAllWork = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  // console.log(page);

  try {
    const works = await Work.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: works.length,
      message: "Successfull",
      data: works,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// get work by search
export const getWorkBySearch = async (req, res) => {
  const location = new RegExp(req.query.location, "i");
  const service = new RegExp(req.query.service, "i");
  const zipcode = parseInt(req.query.zipcode);

  try {
    const works = await Work.find({
      location,
      service,
      zipcode: { $eq: zipcode },
    });
    // .populate('reviews');

    res.status(200).json({
      success: true,
      message: "Successfull",
      data: works,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// get available work
export const getAvailableWorks = async (req, res) => {
  try {
    const works = await Work.find({ available: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      count: works.length,
      message: "Successfull",
      data: works,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//get work counts
export const getWorkCount = async (req, res) => {
  try {
    const workCount = await Work.estimatedDocumentCount();

    res.status(200).json({ success: true, data: workCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
