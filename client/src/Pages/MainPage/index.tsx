import React from 'react';
import { inject, observer } from "mobx-react";
import { MovieDataStore } from "src/Stores";
import { STR_MESSAGE_THIS_IS_FRONTEND, STR_MESSAGE_NO_DATA } from "src/ConstData/ConstString";
import { BaseButton } from "src/Components";
import { MovieDataContainer } from 'src/Containers';

@inject(({movieDataStore}) => ({
    movieDataStore
}))

@observer
class MainPage extends React.Component<{ movieDataStore?: MovieDataStore }> {

    protected onClickButton = (): void => {
        const { axiosGetMovieDataListAPI } = this.props.movieDataStore;
        axiosGetMovieDataListAPI();
    }

    render(){
        const { m_movieDataList: movieDataList } = this.props.movieDataStore;
        const { onClickButton } = this;
        const prop_buttonData = {
            onClickButton
        }
        const prop_movieDataContainer = {
            movieDataList
        }
        return (
            <>
                <div style={{textAlign:"center"}}>
                    {STR_MESSAGE_THIS_IS_FRONTEND}
                </div>
                <BaseButton prop_data={prop_buttonData}/>
                {
                    movieDataList == null 
                        ? <div>
                            {STR_MESSAGE_NO_DATA}
                          </div>
                        : <MovieDataContainer
                            prop_data={prop_movieDataContainer}/>
                }
            </>
        )
    }
}

export default MainPage;