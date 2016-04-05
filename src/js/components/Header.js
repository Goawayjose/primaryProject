import React from "react";
import Title from "./header/title";

export  default class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.ChangeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );

  }

}
