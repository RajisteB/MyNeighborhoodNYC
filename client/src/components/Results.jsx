import React, { Component } from 'react';

class Results extends Component {
    render() {

        var house = document.getElementById('houseinput').value;
        var street = document.getElementById('streetname').value.toUpperCase();
        var zip = document.getElementById('zip').value;

        return(
            <div className="search_results">
                <div>Results for: {house} {street} {this.props.data[0].boro}, NY {zip}</div>
                {this.props.data.map(x => {
                    if (x.violationstatus === 'Open') {
                    return <div key={x.violationid}>
                    <h6>{x.violationstatus}</h6>
                    <h6>{x.novdescription}</h6>
                    </div>
                    }
                })}
            </div>
        )
    }
}

export default Results;