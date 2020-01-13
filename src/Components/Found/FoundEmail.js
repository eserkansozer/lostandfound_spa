import React, { Component } from 'react';
import InfoBox from '../Common/InfoBox'
import ValidationService from '../../services/validateService';

class FoundEmail extends Component {

    constructor() {
        super();
        this.state = {
            emailInputValidation: {
                isValid: false,
                isDirty: false
            }
        }
    }

    emailChange = (event) => {
        this.setState(
            {
                emailInputValidation: {
                    isDirty: this.state.emailInputValidation.isDirty || event.target.value.length > 0,
                    isValid: ValidationService.validateEmail(event.target.value)
                }
            }
        )

        this.props.emailChangeHandler(event);
    }

    render() {
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
                                    <div className="form-group controls mb-0 pb-2">
                                        <label htmlFor="email">Please leave your email address</label>
                                        <input name="email" id="email"
                                            className={this.state.emailInputValidation.isDirty && !this.state.emailInputValidation.isValid ? 'form-control invalid' : 'form-control valid'}
                                            type="email"
                                            value={this.props.enteredEmail}
                                            onChange={this.emailChange} />
                                    </div>
                                    <span className={this.state.emailInputValidation.isDirty && !this.state.emailInputValidation.isValid ? 'error-invalid' : 'error-valid'}>Please provide a valid email address!</span>
                                </div>
                            </div>
                            <br />
                            <div className="form-group">
                                <button className='btn btn-primary btn-xl' disabled={!this.state.emailInputValidation.isValid} onClick={this.props.nextStepHandler}>Next</button>
                            </div>
                            <InfoBox info="We will be in contact if anything reported lost matching your definitions..."></InfoBox>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FoundEmail;