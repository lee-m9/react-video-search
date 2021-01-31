import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };

  onInputChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="ui top attached label">Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.searchText}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
