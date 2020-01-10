import React from 'react';
import MovieDataElement from './MovieDataElement';

class MovieDataContainer extends React.Component<{prop_data}> {
    render(){
        const { movieDataList: prop_movieDataList} = this.props.prop_data;
        return (
            <>
                {prop_movieDataList.map((movieData,index) => {
                    const prop_movieDataElement = {
                        movieData
                    }
                    return <MovieDataElement 
                                key={index}
                                prop_data={prop_movieDataElement}/>
                })}
            </>
        )
    }
}

export default MovieDataContainer;