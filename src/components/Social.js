import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social glass">
        <div class="btnsame btn1">
          <a
            href="https://github.com/tanyasismayiana?tab=repositories"
            target="_blank"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
        <div class="btnsame btn2">
          <a href="https://twitter.com/mayiana_m" target="_blank">
            <i class="fa fa-twitter"></i>
          </a>
        </div>
        <div class="btnsame btn3">
          <a href="linkedin.com/in/mayiana-tanyasis-b0a759233" target="_blank">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
        <div class="btnsame btn4">
          <a href="https://www.behance.net/ruthtanyasis" target="_blank">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
