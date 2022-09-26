import React, { Component } from "react";
import Navitem from "./Navitem";
import me from "../img/me.jpeg";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: "",
        };
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove("active");
        }
        this.setState({ NavItemActive: x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add("active");
        });
    };
    render() {
        return (
            <nav className="glass">
                <img src={me} className="profilepic"></img>
                <h2>
                    Tanyasis <mark>Mayiana</mark>
                </h2>
                <p>Software Developer</p>
                <p className="">UI/UX Designer</p>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
                    <Navitem item="Portfolio" tolink="/portfolio" activec={this.activeitem}></Navitem>
                    <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
