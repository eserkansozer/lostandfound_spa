import React from 'react';
import InfoBox from '../Common/InfoBox';

const FoundLocation = (props) => {
        return (
            <section className="page-section">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Location</h2>

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
                                        <label htmlFor="locations">Where did you find it?</label>
                                        <select name="locations" id="locations" className='form-control' onChange={props.selectLocationHandler} value={props.selectedLocationName}>
                                            {
                                                props.locations.map((location, index) => <option name="{location.name}" key={index} value={location.name}>{location.name} ({location.count})</option>)
                                            }
                                        </select>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <button className='btn btn-primary btn-xl' onClick={props.nextStepHandler}>Next</button>
                                    </div>
                                </div>
                            <InfoBox info={props.selectedLocationCount + " items are reported to be lost and waiting to be returned in " + props.selectedLocationName}></InfoBox>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default FoundLocation