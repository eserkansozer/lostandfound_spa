import React from 'react';
import context from '../../context/context'

const InfoBox = (props) => {
    return (
        //default root element
        <React.Fragment>
            <context.Consumer>
                {(context) => {
                    if (context.infoBoxEnabled)
                        return (
                            <p className="mt-3" style={{textAlign: 'center'}}>
                                <small>
                                    {props.info}
                                </small>
                            </p>
                        )
                }}
            </context.Consumer>

        </React.Fragment>
    );

}

export default InfoBox;