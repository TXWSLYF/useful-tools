import React, { Component } from 'react';
import './UrlDecode.css';
import JsonShow from './JsonShow';

class UrlDecode extends Component {
  state = {
    inputValue:
      'r=api/service/IsSmallFlowNormalMix&title=maggie_say_control&workplace_id=1014',
  };

  handleVlaueChage = (e) => {
    // const tmp = this.decodeUrl(e.target.value);
    // const str = JSON.stringify(tmp, null, 10).replace(/\\/g, '')
    this.setState({
      inputValue: e.target.value,
    });
  };

  decodeUrl = (str) => {
    if (!str.trim()) return '';
    let out = {};
    str.split('&').forEach((i) => {
      const tmp = i.split('=');
      out[tmp[0]] = decodeURIComponent(tmp[1]);
    });
    return out;
  };

  render() {
    return (
      <div className="url-decode-container">
        <textarea
          onChange={this.handleVlaueChage}
          value={this.state.inputValue}
        />
        <JsonShow inputValue={this.state.inputValue} />
      </div>
    );
  }
}

export default UrlDecode;
