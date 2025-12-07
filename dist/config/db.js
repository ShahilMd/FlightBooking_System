import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import config from './env.config.js';
import logger from './logger.js';
let dbInstance = null;
export async function dbConnect() {
    if (!config.DATABASE_URL) {
        logger.error('DATABASE_URL is not defined in environment variables');
        process.exit(1);
    }
    if (!dbInstance) {
        const sql = neon(config.DATABASE_URL);
        dbInstance = drizzle({ client: sql });
        logger.log({
            level: 'info',
            message: 'Database connected successfully'
        });
    }
    return dbInstance;
}
//# sourceMappingURL=db.js.map