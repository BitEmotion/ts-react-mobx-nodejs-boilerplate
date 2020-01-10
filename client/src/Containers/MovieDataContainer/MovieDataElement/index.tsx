import React from 'react';

class MovieDataElement extends React.Component<{prop_data}> {
    render(){
        const { movieData: prop_movieData } = this.props.prop_data;
        const { id, title, genres, rating, runtime, year, imdbCode } = prop_movieData;
        return (
            <div style={{display:"flex",flexDirection:'row'}}>
                <span style={{marginRight:"1rem"}}>{id}</span>
                <span style={{marginRight:"1rem",color:"yellow"}}>{title}</span>
                <span style={{marginRight:"1rem"}}>{genres[0]}</span>
                <span style={{marginRight:"1rem"}}>{rating}</span>
                <span style={{marginRight:"1rem"}}>{runtime}</span>
                <span style={{marginRight:"1rem"}}>{year}</span>
                <span style={{marginRight:"1rem"}}>{imdbCode}</span>
            </div>
        )
    }
}

export default MovieDataElement;