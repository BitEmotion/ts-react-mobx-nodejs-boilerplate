import {observable, action} from "mobx";
import axios from "axios";
import RootStore from ".";
import { BACKEND_URL } from "src/Config";
import { STR_API, STR_BACKEND_PATH_MOVIEROUTER } from "src/ConstData/ConstString";

class MovieDataStore {
    @observable public m_movieDataList: Array<any> | null = null;
    @observable private rootStore: RootStore;
    
    constructor(rootStore){
        this.rootStore = rootStore;
    }
    
    @action
    public axiosGetMovieDataListAPI = ():void => {
        axios.get(`${BACKEND_URL}/${STR_API}/${STR_BACKEND_PATH_MOVIEROUTER}`)
            .then(fetchedData => {
                this.m_movieDataList = fetchedData.data;
            })
            .catch(error => {
                // you rewrite catch error 
                console.log(error.response);
            });    
    }
}
export default MovieDataStore;