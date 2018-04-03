import React, { Component } from 'react';
// import JsonData from '../feeder.json';


class Content extends Component{

  render(item){
    console.log(".....................");
    console.log(this.props.item.name);
    console.log('../images/' + this.props.item.medium + '/' + this.props.item.name);
    return(
      <div className="individualImages">
        {/*{this.props.item.medium}*/}
        {/*<img src={require('../images/watercolor/dakshinamoorthy.jpg')}/>*/}
        <img className="individualImages" src={require('../images/' + this.props.item.medium + '/' + this.props.item.name)} />
        {/*<span>status: {this.props.item.status}</span>*/}
      </div>
    );
  }
}

class ContentsContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      JsonData: [{
      "name" : "Ajith.jpg",
      "medium" : "ballpen",
      "status" : "sold"
      },
      {
        "name" : "johnson_master.jpg",
        "medium" : "ballpen",
        "status" : "private collection"
      },
      {
        "name" : "aparna nair.jpg",
        "medium" : "charcoal",
        "status" : "available"
      },
      {
        "name" : "russel_crow.jpg",
        "medium" : "charcoal",
        "status" : "sold"
      },
      {
        "name" : "portrait_watercolor.jpg",
        "medium" : "watercolor",
        "status" : "private collection"
      },
      {
        "name" : "dakshinamoorthy.jpg",
        "medium" : "watercolor",
        "status" : "sold"
      }]

    };
    //console.log("hunting for jsondata");
    //console.log("path is: "+image1);
  }
  render() {
    return (
      <div className="bteal">
        {
         this.state.JsonData.map(function(item,i){
          return(<Content key={i} item={item}></Content>);
        })
        }
      </div>
    );
  }
}

export default ContentsContainer;
