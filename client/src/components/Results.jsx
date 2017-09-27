import React, { Component } from 'react';

class Results extends Component {
    render() {
        return(
            <div className="search_results">
                Results component
                {this.props.house}
            </div>
        )
    }
}

export default Results;