import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieInfo } from "./../../store/Movies/action";
import "./MovieInfo.css";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
            should create metadata for what info needs to be displayed (eg. fields, widths, styles etc)
      */
    };
  }

  componentDidMount() {
    const { endpoint, getMovieInfoConnect } = this.props;
    getMovieInfoConnect(endpoint);
  }

  componentDidUpdate(prevProps) {
    const { endpoint, getMovieInfoConnect } = this.props;
    if (prevProps.endpoint !== endpoint) {
      getMovieInfoConnect(endpoint);
    }
  }

  render() {
    const { movieData, isFetching, isError } = this.props;
    return (
      <div>
        {isFetching ? (
          <div className="loader">Loading.....</div>
        ) : (
          <div>
            {isError ? (
              <div className="error">Bummer! Data fetch failed</div>
            ) : (
              <div className="info-body">
                {Object.entries(movieData).map(([key, val]) => (
                  <span key={key} className="data">
                    {key}: {val}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieData: state.movies.movieInfo,
  isFetching: state.movies.isFetching,
  isError: state.movies.isError
});

export default connect(
  mapStateToProps,
  {
    getMovieInfoConnect: getMovieInfo
  }
)(MovieInfo);
