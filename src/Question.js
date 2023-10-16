import React from 'react';
// import ReactDOM from 'react-dom';
import './Question.css';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.getQuestion = this.getQuestion.bind(this);
        this.getQuestion();// get the initial question from py
    }

    getQuestion() {
        const _this = this;
        let myPromise = new Promise(function() {
            let req = new XMLHttpRequest();
            // TODO: send answers
            req.open('GET', "http://localhost:8080/cgi-bin/q.py");
            req.onload = function() {
                if (req.status == 200) {
                    const data = JSON.parse(req.response);
                    _this.setState ({//TODO: null check etc.
                        quesion: data[1],
                        answers: data.slice(2)
                    });
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
                {this.state.answers && this.state.answers.map((itm) => { 
                    return <li key={this.state.answers.id}><input type="checkbox"></input><span>{itm}</span></li> })}
                </ul>
                <button className="Submit" type="button"
                    onClick={() => {this.getQuestion()}}>Submit</button>
            </>
    } 
}
export default Question;
