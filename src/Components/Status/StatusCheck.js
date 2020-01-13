import React, { Component } from 'react';
import axios from 'axios';
import ValidationService from '../../services/validateService';

class StatusCheck extends Component {

    constructor() {
        super();
        this.state = {
            searchReference: '',
            searchedReference: null,
            status: null,
            referenceInputValidation: {
                isValid: false,
                isDirty: false
            }
        }
    }

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('statusWrapper').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }, 500);

        let id = this.props.match.params.id;
        if (id) {
            setTimeout(() => {
                this.setState({
                    searchReference: id,
                    referenceInputValidation: {
                        isDirty: this.state.referenceInputValidation.isDirty || id.length > 0,
                        isValid: ValidationService.validateReferenceNumber(id)
                    }
                });
                if(this.state.referenceInputValidation.isValid){
                    this.checkWithReferenceNumber();
                }
            }, 100);
        }
    }

    referenceChangeHandler = (event) => {
        this.setState({
            searchReference: event.target.value,
            referenceInputValidation: {
                isDirty: this.state.referenceInputValidation.isDirty || event.target.value.length > 0,
                isValid: ValidationService.validateReferenceNumber(event.target.value)
            }
        });
    }

    checkWithReferenceNumber = () => {
        axios.get('/status/' + this.state.searchReference)
            .then(response => {
                if (response.data) {

                    this.setState({
                        searchedReference: response.id,
                        status: response.data.isMatched ? (response.data.isMatchConfirmed ? 'Matched and confirmed' : 'Matched, waiting for confirmation') : 'Search in progress',
                    });
                } else {
                    this.setState({
                        searchedReference: this.state.searchReference,
                        status: 'NotFound',
                    });
                }
            });
    }

    render() {
        return (
            <div id="statusWrapper" className="page-wrapper">
            <section className="page-section">
                <div className="container">
                    <h2 className="page-section-heading text-center case text-secondary mb-0">Status</h2>

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
                                    <label htmlFor="locations">Please enter your reference number:</label>
                                    <input name="reference" 
                                    id="reference" 
                                    className={this.state.referenceInputValidation.isDirty && !this.state.referenceInputValidation.isValid ? 'form-control invalid' : 'form-control valid'} 
                                    type="text" 
                                    value={this.state.searchReference} 
                                    onChange={this.referenceChangeHandler} />
                                </div>
                                <span className={this.state.referenceInputValidation.isDirty && !this.state.referenceInputValidation.isValid ? 'error-invalid' : 'error-valid'}>Please provide a valid reference number!</span>
                                <br />
                                <div className="form-group">
                                    <button className='btn btn-primary btn-xl' onClick={this.checkWithReferenceNumber} disabled={!this.state.referenceInputValidation.isValid}>Submit</button>
                                </div>
                                {
                                    this.state.status && this.state.status !== "NotFound"? 
                                    <div>
                                        <span>Item with reference number <em>{this.state.searchedReference}</em> has status: </span> <strong>{this.state.status}</strong>
                                    </div> 
                                    : this.state.status === "NotFound" ? 
                                    <div><span>No item with a reference number <em>{this.state.searchedReference}</em> found in our system!</span></div> 
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default StatusCheck;