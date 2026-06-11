//inquiry.controller.js
import Inquiry from "../models/inquiry.model.js";
import Property from "../models/property.model.js";
import Chat from "../models/chat.model.js";
// BUYER SEND INQUIRY
export const sendInquiry = async (req, res) => {
  try {
    const { propertyId, message } = req.body;

    const property = await Property.findById(propertyId).populate("seller");

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    const inquiry = await Inquiry.create({
      property: property._id,
      buyer: req.user._id,
      seller: property.seller._id,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Inquiry sent successfully",
      inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getSellerInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ seller: req.user._id })
      .populate("buyer", "name email phone")
      .populate("property", "title price images city")
      .sort({ createdAt: -1 });

    // Clean up inquiries whose property was deleted
    const validInquiries = inquiries.filter(inq => inq.property !== null);
    const orphanedIds = inquiries
      .filter(inq => inq.property === null)
      .map(inq => inq._id);
    if (orphanedIds.length > 0) {
      await Inquiry.deleteMany({ _id: { $in: orphanedIds } });
    }

    res.json({ success: true, count: validInquiries.length, inquiries: validInquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const respondInquiry = async (req, res) => {
  try {
    const { status } = req.body;

    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    if (inquiry.seller.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    inquiry.status = status;

    if (status === "accepted") {
      let existingChat = await Chat.findOne({
        buyer: inquiry.buyer,
        seller: inquiry.seller,
      });

      if (!existingChat) {
        existingChat = await Chat.create({
          property: inquiry.property,
          buyer: inquiry.buyer,
          seller: inquiry.seller,
          messages: [            {
              sender: inquiry.buyer,
              text: inquiry.message,
              createdAt: inquiry.createdAt,
            },],
        });
      }else {
        // Chat already exists — add inquiry message at the beginning
        // only if it's not already there (avoid duplicates on re-accept)
        const alreadyExists = existingChat.messages.some(
          (msg) =>
            msg.text === inquiry.message &&
            msg.sender.toString() === inquiry.buyer.toString()
        );
        if (!alreadyExists) {
          existingChat.messages.unshift({
            sender: inquiry.buyer,
            text: inquiry.message,
            createdAt: inquiry.createdAt,
          });
          await existingChat.save();
        }
      }

      inquiry.chatId = existingChat._id;
    }

    await inquiry.save();

    res.json({
      success: true,
      message: `Inquiry ${status}`,
      inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getBuyerInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ buyer: req.user._id })
      .populate("property", "title price images city")
      .populate("seller", "name email")
      .sort({ createdAt: -1 });

    // Clean up inquiries whose property was deleted
    const validInquiries = inquiries.filter(inq => inq.property !== null);
    const orphanedIds = inquiries
      .filter(inq => inq.property === null)
      .map(inq => inq._id);
    if (orphanedIds.length > 0) {
      await Inquiry.deleteMany({ _id: { $in: orphanedIds } });
    }

    const inquiriesWithChat = await Promise.all(
      validInquiries.map(async (inq) => {
        const obj = inq.toObject();
        if (inq.status === "accepted" && inq.chatId) {
          obj.chatId = inq.chatId;
        }
        return obj;
      })
    );

    res.json({ success: true, count: inquiriesWithChat.length, inquiries: inquiriesWithChat });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};