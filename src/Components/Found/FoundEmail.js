import React from 'react';
import InfoBox from '../Common/InfoBox'

const FoundEmail = (props) => {

        return (
            <section className="page-section">
                <div className="container">
                    <h2 className="page-section-heading text-center case text-secondary mb-0">Email</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className='row'>
                        <div className="col-lg-8 mx-auto">
                            <div className="control-group">
                                <div className="form-group controls mb-0 pb-2">
                                    <label htmlFor="email">Please leave your email address</label>
                                    <input name="email" id="email" className="form-control" type="email" value={props.enteredEmail} onChange={props.emailChangeHandler} />
                                </div>

                            </div>
                            <br />
                            <div className="form-group">
                            <button className='btn btn-primary btn-xl' onClick={props.nextStepHandler}>Next</button>
                            </div>
                            <InfoBox info="We will be in contact if anything reported lost matching your definitions..."></InfoBox>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default FoundEmail;