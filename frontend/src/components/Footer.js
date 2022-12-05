import React, { Component } from 'react';

class Footer extends Component {

constructor(props) {
    super(props);

    this.state = {
    }

}

    render() {
        return (
            <div>
                 <div className="table-danger">
                    <footer className="footer text-center">
                        <span className="text-muted"> <b>*** GeorgeBrownCollege ***</b>
                        <hr/>
                        <b>Full Stack Development-Assignment2 </b>
                            <b><p>By-Vaibhav Guliani- 101336421</p></b>
                        </span>
                    </footer>
                 </div>
            </div>
        );
    }
}

export default Footer;