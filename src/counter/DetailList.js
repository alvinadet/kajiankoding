import React, { Component } from 'react';

export default class DetailList extends Component {
  componentDidMount() {
    console.log(this.props.location.query);
  }
  render() {
    return (
      <div>
        <h1>Nama :{this.props.location.query.nama}</h1>
        <h1>Warna :{this.props.location.query.warna} </h1>
        <h1>Desktipsi : {this.props.location.query.desc} </h1>
      </div>
    );
  }
}
