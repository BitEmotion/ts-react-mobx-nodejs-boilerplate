import { DB_CONFIG } from 'src/Config';

import { IDBconfig, IBaseApi } from 'src/Interface';

const BaseApi: IBaseApi = (_ => {
        return class {
            static printError = (msg: string): void => {
                switch(process.env.NODE_ENV) {
                    case "development"
                        : throw msg;
                    case "test"
                        : throw msg;
                    case "production"
                        : console.log(msg);
                        break;
                    default: 
                        throw 'error!';
                }
            }
            static makeRandomNumber = (maxNumber: number) : number => {
                return Math.round(Math.random() * maxNumber);
            }
            static getDbConfig = (): IDBconfig => {
                switch(process.env.NODE_ENV) {
                    case "development":
                        return DB_CONFIG.development;
                    case "test":
                        return DB_CONFIG.test
                    case "production": 
                        return DB_CONFIG.production
                    default: 
                        throw printError('error!');
                }
            }
        }   
})();

const printError = BaseApi.printError;
const makeRandomNumber = BaseApi.makeRandomNumber;
const getDbConfig = BaseApi.getDbConfig;
export { printError, makeRandomNumber, getDbConfig };