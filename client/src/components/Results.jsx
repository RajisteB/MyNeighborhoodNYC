import React, { Component } from 'react';

class Results extends Component {
    render() {
        return(
            <div className="search_results">
                Results component
                {this.props.data.map(x => {
                    return <h4>{x.novdescription}</h4>
                })}
            </div>
        )
    }
}

export default Results;