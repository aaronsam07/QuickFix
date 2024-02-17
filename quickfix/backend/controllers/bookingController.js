import Work from "../models/Work.js";
import Booking from "../models/Booking.js";



//create new Booking
// export const createBooking = async (req, res) => {
//   const newBooking = new Booking(req.body);
//   try {
//     const savedBooking = await newBooking.save();
//     res.status(200).json({
//       success: true,
//       message: "Your Work is Booked",
//       data: savedBooking,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: true,
//       message: "Internal Server error",
      
//     });
//   }
// };

export const createBooking = async (req, res) => {
  const workId = req.params.workId;
  const newBooking = new Booking({ ...req.body });
  try {
    const savedBooking = await newBooking.save();

    //after creating a new Booking now update the Boooking array of the work
    await Work.findByIdAndUpdate(workId, {
      $push: { notifications: savedBooking._id }
    });

    res
      .status(200)
      .json({ success: true, message: "Booking Submitted", data: savedBooking })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, message: "Failed to submit" })
  }
};

// Get Single Booking
export const getBooking = async (req,res) => {
    const id = req.params.id
    try {
        const book = await Booking.findById(id);
        res.status(200).json({
            success: true,
            message: "Successful",
            data: book,
          });
    } catch (err) {
        res.status(404).json({
            success: true,
            message: "Not Found",
            
          });
    }
}


// Get All Booking
export const getAllBooking = async (req,res) => {
    
    try {
        const books = await Booking.find();
        res.status(200).json({
            success: true,
            message: "Successful",
            data: books,
          });
    } catch (err) {
        res.status(500).json({
            success: true,
            message: "Internal Server Error",
            
          });
    }
}

