import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setCombination,
  setJoin,
  setSegment,
  combinationText,
  joinText,
} from "../actions/main";

function mapStateToProps(state) {
  return {
    main: state.main,
  };
}

class App extends Component {
  handleCombinationDropdown = (val, text) => {
    this.props.dispatch(setCombination(val));
    if (text) this.props.dispatch(combinationText(text));
  };

  handleSegmentDropdown = (val) => {
    this.props.dispatch(setSegment(val));
  };

  handleJoinDropdown = (val, text) => {
    this.props.dispatch(setJoin(val));
    if (text) this.props.dispatch(joinText(text));
  };

  render() {
    const { showCombination, showJoin, combinationText, joinText } =
      this.props.main;
    return (
      <div className="main">
        <div className="main-div">
          stock{" "}
          <span className="dropdown-span">
            {showCombination && (
              <select
                placeholder="Select the Combination..."
                onChange={(e) =>
                  this.handleCombinationDropdown(false, e.target.value)
                }
                onBlur={() => this.handleCombinationDropdown(false)}
                size={1}
                autoFocus={true}
                onSelect={this.handleCombinationSelect}
              >
                <option value="" disabled selected hidden>
                  Select the Combination...
                </option>
                <option>passes</option>
                <option>fails</option>
              </select>
            )}
            {!showCombination && (
              <div onClick={() => this.handleCombinationDropdown(true)}>
                {combinationText}
              </div>
            )}
          </span>{" "}
          <span className="dropdown-span">
            {showJoin && (
              <select
                name="select"
                placeholder="Select the measure..."
                onChange={(e) => this.handleJoinDropdown(false, e.target.value)}
                onBlur={() => this.handleJoinDropdown(false)}
                size={1}
                autoFocus={true}
              >
                <option value="" disabled selected hidden>
                  Select the Join...
                </option>
                <option>all</option>
                <option>any</option>
              </select>
            )}

            {!showJoin && (
              <div onClick={() => this.handleJoinDropdown(true)}>
                {" "}
                {joinText}{" "}
              </div>
            )}
          </span>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
