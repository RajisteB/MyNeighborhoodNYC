import React, { Component } from 'react';

class Results extends Component {
    render() {
        return(
            <div className="search_results">
                Results component
                {this.props.data.map(x => {
                    return (
                        <div>{x.housenumber}</div>
                        <div>{}</div>
                        )
                })}
            </div>
        )
    }
}

export default Results;