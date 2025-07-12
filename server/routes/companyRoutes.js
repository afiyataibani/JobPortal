import express from "express";
import {
  ChangeJobApplicationStatus,
  changeVisiblity,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  loginCompany,
  postJob,
  registerCompany,
} from "../controllers/companyController.js";
import upload from "../config/multer.js";

const router = express.Router();

// Register a company
router.post("/register", upload.single("image"), registerCompany);

// Company login
router.post("/login", loginCompany);

// Get company data
router.get("/company", getCompanyData);

// Post a job
router.post("/post-job", postJob);

// Get applicants data of company
router.get("./applicants", getCompanyJobApplicants);

// Get Company Job List
router.get("/list-jobs", getCompanyPostedJobs);

// Change Applications status
router.post("/change-status", ChangeJobApplicationStatus);

// Change Applications visiblity
router.post("/change-visiblity", changeVisiblity);

export default router;
