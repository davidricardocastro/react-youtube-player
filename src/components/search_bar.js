import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            
            <div className="input-group my-3">

            <a class="navbar-brand" href="index.html">
            <img src="/img/play.svg" width="30" height="30" class="d-inline-block align-top" alt=""/> 
          </a>

                <input
                className="form-control"
                placeholder="Search..."
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;