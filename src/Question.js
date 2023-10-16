import React from 'react';
// import ReactDOM from 'react-dom';
import './Question.css';

class Question extends React.Component {
    constructor(props) {
        super(props);
        // hardcode for now, should come from ai/be
        const q = [2,'Insulin produced by molecular cloning:','is of pig origin','is a recombinant protein','is made by the human pancreas','is recombinant DNA,is a recombinant protein'];        
        this.state = {
            quesion: q[1],
            answers: q.slice(2)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(idx) {

    }

    render () {
        return <>
                <div className="Title">{this.state.quesion}</div>
                <ul>
                {this.state.answers.map((itm) => { 
                    return <li><input type="checkbox"></input><span>{itm}</span></li> })}
                </ul>
                <inpu className="Submit" type="button">Submit</inpu>
            </>
    } 
}
export default Question;
