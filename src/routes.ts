import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/", (req, res) => {
  res.status(200).json({
    "index": "ROUTE: '/orphanages' , METHOD: 'GET'",
    "show": "ROUTE: '/orphanages/:id', METHOD: 'GET'",
    "create": "ROUTE: '/orphanages', METHOD: 'POST'"
  });
});
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array('images') ,OrphanagesController.create);

export default routes;