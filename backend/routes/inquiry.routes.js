import express from "express";
const inquiryRouter = express.Router();
import {
    sendInquiry,
    getSellerInquiries,
    respondInquiry,
    getBuyerInquiries
} from "../controllers/inquiry.controller.js";
import { protect, authorize } from "../middlewares/auth.middleware.js";

inquiryRouter.post("/", protect, authorize("buyer"), sendInquiry);
inquiryRouter.get("/my", protect, authorize("buyer"), getBuyerInquiries);
inquiryRouter.get("/seller", protect, authorize("seller"), getSellerInquiries);

inquiryRouter.patch("/:id/respond", protect, authorize("seller"), respondInquiry);
export default inquiryRouter;
