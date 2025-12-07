import express from 'express';
import config from './config/env.config.js';
import router from './routes/index.js';
import { dbConnect } from './config/db.js';
import logger from './config/logger.js';
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
dbConnect().then(() => {
    app.listen(config.PORT, () => {
        logger.log({
            level: 'info',
            message: `server is running on port ${config.PORT}`
        });
    });
}).catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map