interface IBaseApi {
    printError: (msg: string) =>  void,
    makeRandomNumber: (maxNumber: number) => number ,
    getDbConfig: () => IDBconfig
}

interface IDBconfigMode {
    development: IDBconfig,
    test: IDBconfig,
    production: IDBconfig,
}

interface IDBconfig {
    username: string,
    password: string,
    database: string,
    host: string,
    dialect: string,
}

interface IError {
    errorCode: number,
    errorText: string
}

interface ImovieData {
    id: number,
    title: string,
    imdbCode: string,
    rating: number,
    runtime: number,
    year: number,
    genres: Array<string>,
    image: string,
    synopsis: string
}

export {IBaseApi, IDBconfigMode, IDBconfig, IError,ImovieData };