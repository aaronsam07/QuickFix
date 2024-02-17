import Work from "../models/Work.js";
import Booking from "../models/Booking.js";

export const getNotificationCount = async (req, res) => {
  const workId = req.params.workId;

  try {
    const work = await Work.findById(workId);

    if (!work) {
      // Work object not found
      // console.log(workId);
      return res
        .status(404)
        .json({ success: false, message: "Work not found" });
    }

    const notificationCount = work.notifications.length;

    res.status(200).json({ success: true, data: notificationCount });
  } catch (err) {
    console.log(workId);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch notification count" });
  }
};


export const notificationData = async (req, res) => {
  const workId = req.params.workId; // Assuming the worker ID is part of the URL params
  const page = parseInt(req.query.page);

  // console.log(page);

  try {
    // Find the worker document by ID and populate the notifications
    const worker = await Work.findById(workId)
      .populate("notifications")
      .skip(page * 8)
      .limit(8);

    if (!worker) {
      return res
        .status(404)
        .json({ success: false, message: "Worker not found" });
    }

    // Access the populated notifications array
    const notifications = worker.notifications;

    res
      .status(200)
      .json({
        success: true,
        count: notifications.length,
        message: "Successfull",
        data: notifications,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve notifications" });
  }
};
