import React from 'react';

const LostDetails = (props) => {
        return (
            <section className="page-section">
                <div className='container'>

                    <h2 className="page-section-heading text-center case text-secondary mb-0">Details</h2>

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
                                    <label htmlFor="types">What kind of thing did you lose?</label>
                                    <select name="types" id="types" className='form-control' onChange={props.selectTypeHandler} value={props.selectedType}>
                                        {
                                            props.types.map((type, index) => <option name="{type}" key={index}>{type}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-group controls mb-0 pb-2">
                                    <label htmlFor="colours">What colour?</label>
                                    <select name="colours" id="colours" className='form-control' onChange={props.selectColourHandler} value={props.selectedColour}>
                                        {
                                            props.colours.map((colour, index) => <option name="{colour}" key={index}>{colour}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                            <button className='btn btn-primary btn-xl' onClick={props.nextStepHandler}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }

export default LostDetails