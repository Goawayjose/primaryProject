import React from "react";
import {  Link } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export  default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Hola migo!"
    };
  }

  ChangeTitle(title) {
    this.setState({title})
  }

  render() {
    return (
      <div>


        {this.props.children}
    <link to="navigation"><button class="btn btn-success">navigation</button></link>
    <link to="infoUi"><button class="btn btn-success">infoUi</button></link>
    <link to="mainBody"><button class="btn btn-success">mainBody</button></link>
<h1>just in case it is working</h1>
      <Header ChangeTitle={this.ChangeTitle.bind(this)} title={this.state.title}/>
      <Footer />
      </div>
    );
  }

}
