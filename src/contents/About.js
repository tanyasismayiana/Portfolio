import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <div className="hr_line line2 glass">
          <div className="inner2"></div>
        </div>
        <h2 className="abouthead">
          Tanyasis <mark className="mark2">Mayiana</mark>
        </h2>
        <p>UI/UX Designer</p>
        <br></br>
        <p className="p10">
          I started my journey in the world of computers from an young age, now
          I'm Pursuing Information Technology in AkiraChix. Web and mobile
          development is my center of interest, where Javascript,Kotlin and
          UI/UX has enabled me to do. I also like creating Interactive UI
          components for better UX and share those design and codes to the world
          through Github and Behance.
        </p>
        <div className="Edu">
          <div class="back1 back2">
            <i class="fa fa-book i1 i3"></i>
          </div>
        </div>
        <h3>Education</h3>
        <div className="vr_line glass">
          <div className="vr_inner inn1"></div>
          <div className="vr_inner inn2"></div>
        </div>
        <h4>Information Technology</h4>
        <p className="p1">AkiraChix</p>
        <p className="p1">
          <i class="fa fa-calendar i2"></i>Feb 2022 - Nov 2022
        </p>
        {/* <h4>High School</h4> */}
        {/* <p className="p1">St. Farid Public School, MGG</p> */}
        {/* <p className="p1">
          <i class="fa fa-calendar i2"></i>May 2017
        </p> */}

        <h3 class="sk_head">Skills</h3>
        <div class="sk glass">Design</div>
        <div class="sk s2 glass">UXR</div>
        <div class="sk s3 glass">JavaScript</div>
        <div class="sk s4 glass">React</div>
        <div class="sk s5 glass">HTML</div>
        <div class="sk s6 glass">CSS</div>
      </div>
    );
  }
}

export default About;
