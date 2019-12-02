import React, { Component } from 'react';
import axios from 'axios';

class StatusCheck extends Component {

    constructor() {
        super();
        this.state = {
            searchReference: null,
            searchedReference: null,
            status: null,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('statusWrapper').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }, 500);
    }

    referenceChangeHandler = (event) => {
        this.setState({
            searchReference: event.target.value
        });
    }

    checkWithReferenceNumber = () => {
        axios.get('https://localhost:5001/api/status/' + this.state.searchReference)
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
            <section className="page-section">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Status</h2>

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
                                    <input name="reference" id="reference" className="form-control" type="text" value={this.state.reference} onChange={this.referenceChangeHandler} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <button className='btn btn-primary btn-xl' onClick={this.checkWithReferenceNumber}>Submit</button>
                                </div>
                                {
                                    this.state.status && this.state.status != "NotFound"? 
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
        );
    }
}

export default StatusCheck;