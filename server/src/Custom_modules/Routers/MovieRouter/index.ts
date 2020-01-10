import * as express from 'express';

import { fetchMovieData } from 'src/Custom_modules/Fetch';
import { makeRandomNumber } from 'src/Api/BaseApi';
import { NUM_BACKEND_SUCCESS_RESPONSE_200, NUM_HOW_MANY_GET_MOVIEDATA_AT_ONE_CLICK } from 'src/ConstData/ConstNumber';
import { ImovieData } from 'src/Interface';

// convert obj to array
const movieObjData = fetchMovieData();
const movieArrayData: Array<ImovieData> = Object.values(movieObjData);
const router = express.Router();

router.get('/', ( req, res ) => {
    const ret_array = [];

    let i = NUM_HOW_MANY_GET_MOVIEDATA_AT_ONE_CLICK;
    while(i-- != 0){
        const randomFindedMovieData = movieArrayData[makeRandomNumber(movieArrayData.length - 1)];
        ret_array.push(randomFindedMovieData);
    }
    
    res.status(NUM_BACKEND_SUCCESS_RESPONSE_200).json(ret_array);
});

export default router;