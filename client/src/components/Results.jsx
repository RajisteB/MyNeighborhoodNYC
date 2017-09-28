import React, { Component } from 'react';

class Results extends Component {
    render() {

        var house  = document.getElementById('houseinput').value;
        var street = document.getElementById('streetname').value.toUpperCase();
        var zip    = document.getElementById('zip').value;

        return(
            <div className="search_results">
                <div>Results for: {house} {street} {zip}</div>
                <h2>HPD Housing Maintenance Code - Open Violations: {this.props.data? this.props.data.length : 0}</h2>
                <h2>Emergency Repair Orders - Open Orders: {this.props.omoData.length}</h2>
                <h2>HUD - Pending Litigations: {this.props.litData.length}</h2>
            </div>
        )
    }
}

export default Results;