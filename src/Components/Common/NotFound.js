import React, {Component} from 'react';

class NotFound extends Component{

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('notFoundWrapper').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }, 500);
    }

render() {

        return (
            <div id="notFoundWrapper" className="page-wrapper">
            <section className="page-section">
                <div className="container">
                    <h2 className="page-section-heading text-center case text-secondary mb-0">Oops!</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className='row'>
                        <div className="col-lg-8 mx-auto">
                            <p>Page not found :(</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }

}

export default NotFound;