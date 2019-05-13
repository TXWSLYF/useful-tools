import React, { Component } from 'react';
import './JsonShow.css';

export default class JsonShow extends Component {
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
    const { inputValue } = this.props;
    const map = this.decodeUrl(inputValue);

    return (
      <div className="json-show-container">
        {Object.keys(map).map((i) => (
          <div className="json-item">
            <span className="json-item__key">"{i}"：</span>
            <span className="json-item__value">"{map[i]}"</span>
          </div>
        ))}
      </div>
    );
  }
}
