import express from 'express';
import { homeRoute } from '../render/overview.js';
import { astroDetailRoute, roverDetailRoute } from '../render/detail.js';

// Thanks to Guus and Robin for helping with "export"
export const router = express.Router();

// Home page (overview)
router
    .get("/", homeRoute)
    .get("/astronomy/:date", astroDetailRoute)
    .get("/rover/:name/:sol", roverDetailRoute)
    .get("/offline", (req, res) => {
      res.render("offline", { title: "Offline" });
    })
    .get("*", (req, res) => {
        res.status(404).render("404", { title: "404 Not Found" });
    });