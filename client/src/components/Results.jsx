import React, { Component } from 'react';

class Results extends Component {
    render() {

        var house = document.getElementById('houseinput').value;
        var street = document.getElementById('streetname').value.toUpperCase();
        var zip = document.getElementById('zip').value;

        return(
            <div className="search_results">
                <div>Results for: {house} {street} {zip}</div>
                <h2>HPD Housing Maintenance Code - Open Violations: {this.props.data.length}</h2>
                <h2>Emergency Repair Orders - Open Orders: {this.props.omoData.length}</h2>
                {/* {this.props.data.map(x => {
                    if (x.violationstatus === 'Open') {
                    return <div key={x.violationid}>
                    <h5>{new Date(x.novissueddate).toDateString()}</h5>
                    <h6>{x.novdescription}</h6>
                    </div>
                    }
                })} */}
            </div>
        )
    }
}

export default Results;