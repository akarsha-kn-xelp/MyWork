import React, { Component } from 'react';
export default class Image1 extends React.Component
 {
  render() 
   {
     return (
       <img className={this.props.class} src={this.props.src}/>
     );
   }
}