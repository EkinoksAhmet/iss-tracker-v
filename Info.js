import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

class Info extends Component {
    render() {
        const p = this.props;
        const { stations, refMode } = p;

        //<a><Link to="/react">Go back to home page</Link></a>
        return (
            <div className='Info'>
                <h1>ISS tracker</h1>
            </div>
        )
    }
}

export default Info;