import React from 'react';
import InfoBox from '../Common/InfoBox'

const LostConfirm = (props) => {

        return (
            <section className="page-section">
                <div className="container">
                    <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Confirmation</h1>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className='row'>
                        <div className="col-lg-8 mx-auto">
                            <h4>Please confirm following details are correct:</h4>

                            <div>
                                You have lost <strong>{props.state.selectedColour} {props.state.selectedType}</strong> in <strong>{props.state.selectedLocationName}</strong> and you agree to be securely contacted on 
                                your <strong>{props.state.enteredEmail}</strong> email address by us if a similar item is found.
                            </div>
                            <br />
                            <div className="form-group">
                            <button className='btn btn-primary btn-xl' onClick={props.submitHandler}>Submit</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        );
    }

export default LostConfirm;