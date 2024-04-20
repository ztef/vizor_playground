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

app.use(express.static('public/libs', {
    setHeaders: (res, path, stat) => {
        // Check if the file is a JavaScript file
        if (path.endsWith('.js')) {
            // Set the Content-Type header to application/javascript
            res.set('Content-Type', 'application/javascript');
        }
    }
}));

import backendRouter from './routes/vBack/routes/backendServices.cjs';

app.use('/api',backendRouter);

const port = process.env.PORT || 3000

ViteExpress.listen(app, port, () => console.log("Server is listening..."));