import React from "react";
import SearchBar from "./SearchBar";
import videoapi from "./api/videoapi";

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (term) => {
    const searchResponse = await videoapi.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: searchResponse.data.items,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
