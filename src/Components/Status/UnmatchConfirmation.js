import React, {Component} from 'react';

class UnmatchConfirmation extends Component{

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('unmatchConfirmationWrapper').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }, 500);
    }

render() {

        return (
            <section className="page-section">
                <div className="container">
                    <h2 className="page-section-heading text-center case text-secondary mb-0">Confirmation</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className='row'>
                        <div className="col-lg-8 mx-auto">
                            <p>Thanks for confirming the match for your lost item is not accurate. We will keep looking for it...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default UnmatchConfirmation;