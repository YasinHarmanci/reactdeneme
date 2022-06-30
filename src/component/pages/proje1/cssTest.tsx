import React, {Component} from 'react';

class CssTest extends Component {
    render() {
        return (
            <div className="d-flex align-items-center">
                <input type="checkbox"/>
                <input type="text"  className="ml-20" placeholder="Data.."/>
                <input type="file"  className="ml-20" placeholder="Data.."/>
            </div>
        );
    }
}

export default CssTest;