import express , {Router} from 'express';
import { infoController } from '../../controllers/info-controller.js';

const router:Router = express.Router();

router.post('/info',infoController);

export default router;