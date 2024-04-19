// configRoute.js
import express from "express";


const router = express.Router();

router.get("/getConfig", (_, res) => {
  // Replace this with your logic to generate HTML content
  const htmlContent = "<h1>This is the HTML content from getConfig route</h1>";
  res.send(htmlContent);
});

export default router;
