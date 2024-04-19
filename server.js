//e.g server.js
import express from "express";
import ViteExpress from "vite-express";
import configRoute from "./routes/configRoute.js"; 
import getSamples from "./routes/getSamples.js"; 
import getSample from "./routes/getSample.js"; 

const app = express();

app.get("/message", (_, res) => res.send("Hello from express!"));
app.use(configRoute);
app.use(getSamples);
app.use(express.json());
app.use(getSample);

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));