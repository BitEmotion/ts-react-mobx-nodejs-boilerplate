import {observable} from 'mobx';
import MovieDataStore from './MovieDataStore';

class RootStore {
    @observable public movieDataStore: MovieDataStore;
    
    constructor(){
        this.movieDataStore = new MovieDataStore(this);
    }
}

export default RootStore;
export { MovieDataStore }