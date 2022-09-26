import React, { Component } from "react";
import Afia_rebrand from "../img/Afia_rebrand.png";
import CBC from "../img/CBC.png";
import Home_recovery from "../img/Home_recovery.png";
import music_app from "../img/music_app.png";
import My_Girl from "../img/My_Girl.png";
import Urban_food from "../img/Urban_food.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Projects</h1>
        <div className="hr_line line2 glass">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1 glass">
          <a href="https://www.figma.com/file/3LAc4hjFnHIlaC6jjeNLLu/responsive-app">
            <img src={Afia_rebrand} className="po1"></img>
          </a>
        </div>
        <div class="port_out port2 glass">
          <a href="https://www.figma.com/file/tmVQG8stAB71IDfi0ymYxy/CBC-curriculum">
            <img src={CBC} className="po1"></img>
          </a>
        </div>
        <div class="port_out port3 glass">
          <a href="https://www.figma.com/file/ay1iEdtdGOD8b4wiGfF25g/Home-recovery">
            <img src={Home_recovery} className="po1"></img>
          </a>
        </div>
        <div class="port_out port4 glass">
          <a href="https://www.figma.com/file/X0ZblBEmZIwa5mgVnuopmm/Music-app">
            <img src={music_app} className="po1"></img>
          </a>
        </div>
        <div class="port_out port4 glass">
          <a href="https://www.figma.com/file/xM5szsGS06910CMBkCQloR/period-tracking">
            <img src={My_Girl} className="po1"></img>
          </a>
        </div>
        <div class="port_out port4 glass">
          <a href="https://www.figma.com/file/2L7HqkvABpXiZ6IFQfKU5P/urban-food?node-id=0%3A1">
            <img src={Urban_food} className="po1"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
