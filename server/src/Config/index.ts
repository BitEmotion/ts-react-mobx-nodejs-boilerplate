
import { IDBconfigMode, IDBconfig } from 'src/Interface';

const FRONTEND_URL: string = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://yoursite.com';
const BACKEND_URL: string = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://yourserver.com';

const DB_CONFIG: IDBconfigMode = {
    development: {
        username: 'root',
        password: 'root',
        database: 'databasename',
        host: '127.0.0.1',
        dialect: 'mysql',
        // timezone: 'Asia/Seoul',
    },
    test: {
        username: 'root',
        password: 'root',
        database: 'databasename',
        host: '127.0.0.1',
        dialect: 'mysql',
        // timezone: 'Asia/Seoul',
    },
    production: {
        username: 'root',
        password: 'root',
        database: 'databasename',
        host: '127.0.0.1',
        dialect: 'mysql',
        // timezone: 'Asia/Seoul',
    }
}


export { FRONTEND_URL, BACKEND_URL, DB_CONFIG };
