import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.get("/getSamples", (_, res) => {
  // Get the directory containing this module
  const samplesDirectory = path.join(path.dirname(new URL(import.meta.url).pathname), "samples");

  // Read the directory
  fs.readdir(samplesDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Filter out subdirectories
    const subdirectories = files.filter(file => {
      const fullPath = path.join(samplesDirectory, file);
      return fs.statSync(fullPath).isDirectory();
    });

    // Read README file content for each subdirectory
    const sampleData = subdirectories.map(subdir => {
      const readmePath = path.join(samplesDirectory, subdir, "README.md");
      try {
        const readmeContent = fs.readFileSync(readmePath, "utf8");
        return { name: subdir, readme: readmeContent };
      } catch (err) {
        console.error(`Error reading README file for ${subdir}:`, err);
        return { name: subdir, readme: "README file not found" };
      }
    });

    // Send the list of subdirectories and README contents as response
    res.json(sampleData);
  });
});

export default router;
