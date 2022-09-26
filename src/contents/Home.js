import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profile_photo.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Tanyasis <mark>Mayiana</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={["A Software Developer", "A UI/UX Designer"]}
          speed={80}
          eraseDelay={800}
        />
        <div className="hr_line glass">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
