import React, { Component } from 'react';
import SideDrawer from './index';

export default class openDrawer extends Component {
  state = {
    open: false
  };
  componentDidMount() {
    console.log('DRAWERMOunted ');
    this.setState({ open: true });
  }
  render() {
    console.log('DRAWER FIRED ');
    return <>{this.state.open && <SideDrawer />}</>;
  }
}
