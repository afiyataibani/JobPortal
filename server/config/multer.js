// import multer from "multer";

// const storage = multer.diskStorage({});

// const upload = multer({ storage });

// export default upload;

// config/multer.js
import multer from "multer";

const storage = multer.memoryStorage(); // ✅ use memory storage instead of disk

const upload = multer({ storage });

export default upload;
