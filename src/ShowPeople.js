import React, { Component } from "react";
import { render } from "react-dom";

class ShowPeople extends Component {
    constructor() {
    super();
    this.state = {
        people: [],
    };
    
}
componentDidMount() {

fetch('http://localhost:8081')
.then(results => {
    return results.json();

}).then(data => {
    let Response = data.results.map((p) => {
        return(
            p.results
        )
    })
})
this.setState({people: Response});
console.log("state", this.state.people);
}
render() {
    return (
    <div>
    <h1>Hello, world!</h1>
    <h2>It is {this.state.people}.</h2>
  </div>
    )}


}
export default ShowPeople
