import React from 'react';
import ReactDOM from 'react-dom';
import './Question.css';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};// game: this.props.cells.slice(), selected: []};
        // this.handleSquareReset = this.handleSquareReset.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(idx) {

    }
    render () {
        return <>
                <div>GMOs are created by ________?</div>
                <ul>
                    <li><input type="checkbox"></input>generating genomic DNA fragments with restriction endonucleases</li>
                    <li><input type="checkbox"></input>introducing recombinant DNA into an organism by any means</li>
                    <li><input type="checkbox"></input>overexpressing proteins in E. coli</li>
                    <li><input type="checkbox"></input>all of the above</li>
                    <li><input type="checkbox"></input>introducing recombinant DNA into an organism by any means</li>
                </ul>
                <inpu className="Submit" type="button">Submit</inpu>
            </>
    } 
}
export default Question;
