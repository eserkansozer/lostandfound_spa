import React, {Component} from 'react';

class Deleted extends Component{

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('deletedWrapper').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }, 500);
    }

render() {

        return (
            <div id="deletedWrapper" className="page-wrapper">
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
                            <p>Thanks, we removed your report from our system and you will no longer be notified for matched reports.</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }

}

export default Deleted;