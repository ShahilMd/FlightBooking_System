import dotenv from 'dotenv';
dotenv.config();
const config = {
    PORT: process.env.PORT || 3001,
    DATABASE_URL: process.env.DATABASE_URL,
};
export default config;
//# sourceMappingURL=env.config.js.map