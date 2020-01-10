import React from 'react';
import { STR_BUTTON_CLICK } from 'src/ConstData/ConstString';

class BaseButton extends React.Component<{prop_data}> {
    private onClickButton = (): void => {
        const { onClickButton: prop_onClickButton } = this.props.prop_data;
        prop_onClickButton();
    }
    render(){
        const { onClickButton } = this;
        return (
            <>
                <div onClick={onClickButton}
                    style={{textAlign:"center",cursor:"pointer"}}>
                    {STR_BUTTON_CLICK}
                </div>
            </>
        )
    }
}

export default BaseButton;