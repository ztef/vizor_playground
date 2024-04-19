import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/getSample", (req, res) => {

 

  const { sampleName } = req.body;
  
  if (!sampleName) {
    return res.status(400).json({ error: "Sample name is required" });
  }

  // Construct the path to the sample directory
  const sampleDirectory = path.join(path.dirname(new URL(import.meta.url).pathname), "samples");


  // Read the contents of index.html and main.js files
  const indexPath = path.join(sampleDirectory, sampleName + "/index.html");
  const jsPath = path.join(sampleDirectory, sampleName + "/main.js");

  console.log("buscando : ",indexPath);


  // Read the index.html file
  fs.readFile(indexPath, "utf8", (errHtml, htmlContent) => {
    if (errHtml) {
      return res.status(500).json({ error: "Error reading index.html file" });
    }

    // Read the main.js file
    fs.readFile(jsPath, "utf8", (errJs, jsContent) => {
      if (errJs) {
        return res.status(500).json({ error: "Error reading main.js file" });
      }

       

      // Send the HTML and JS content as response
      res.json({ html:htmlContent, js:jsContent });
    });
  });
});

export default router;
