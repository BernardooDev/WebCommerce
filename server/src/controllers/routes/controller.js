import { Router } from "express";

const router = Router();

import { getSneakers } from "../../services/services.js";


router.get("/", (req, res) => {
  const sneakerList = getSneakers()
  res.send(sneakerList)
});

router.post("/", (_req, _res) => {

});

router.delete("/", (_req, _res) => {

});

export default router;
