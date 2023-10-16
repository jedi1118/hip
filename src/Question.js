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

    handleClick() {
        console.log('.....');
        let myPromise = new Promise(function() {
            let req = new XMLHttpRequest();
            // TODO
            req.open('GET', "http://localhost:8080/cgi-bin/q.py");
            req.onload = function() {
                if (req.status == 200) {
                    this.state = {// TODO: this part not wuite working
                        quesion: req.response[1],
                        answers: req.response.slice(2)
                    };
                    console.log(this.state);
                } else {
                    console.log("Error");
                }
            };
            req.send();
        });
    }

    render () {
        return <>
                <div className="Title">{this.state.quesion}</div>
                <ul>
                {this.state.answers.map((itm) => { 
                    return <li key={this.state.answers.id}><input type="checkbox"></input><span>{itm}</span></li> })}
                </ul>
                <button className="Submit" type="button"
                    onClick={() => {this.handleClick()}}>Submit</button>
            </>
    } 
}
export default Question;
