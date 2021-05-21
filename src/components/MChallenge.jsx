import React, { Component } from 'react';
import challenges from '../data/challengedata';
import {Button} from 'react-bootstrap';
import MScheduler from './MScheduler'

class MChallenge extends Component {
    constructor(props){
        super(props)
        
    }
    statusSelected=(itemInTheList,i)=>{
        //this.props.challengeSelected(e.target.value);
        //console.log(e.target.value)
        console.log(itemInTheList)
        console.log(i)
        this.props.challengeSelected(itemInTheList,i)
    }
    statusUnSelected=(itemInTheList,i)=>{
        //this.props.challengeUnSelected(e.target.value);
        //console.log(e.target.value)
        console.log(itemInTheList)
        console.log(i)
        this.props.challengeUnSelected(itemInTheList,i)
    }
    render() {
        
        return (
            <div>
                <h3>{console.log(this.props.itemInTheList)}</h3>
                <div>
                    <h1> Mommy Challenges </h1> 
                </div>
                <div className="printChallenges">
                <div className="printNonChallenges">
                    <h1> Identify Challenges</h1>
                    <label className="schHeader">
                        <input
                            className="schCheckbox"
                            type="checkbox"
                            readOnly={true}
                            checked={false}
                        >
                        </input>
                        <input
                            className="schHeaderText"
                            type="textbox"
                            readOnly={true}
                            value="Challenges">
                        </input>
                        <input
                            className="schHeaderText"
                            type="textbox"
                            readOnly={true}
                            value="Priority">
                        </input>
                        <input
                            className="schHeaderText"
                            type="textbox"
                            readOnly={true}
                            value="Duration">
                        </input>
                    </label>
                    {this.props.challenge.map((itemInTheList,i)=>{
                    return itemInTheList.isSelected? '':(<label className="labels">
                    <input
                        id="isChallenge"
                        type="checkbox"
                        onChange={()=>this.statusSelected(itemInTheList,i)}
                        //checked={this.state.checked ? 'checked': null}
                       //onChange={this.setState({checked: !this.state.checked})}
                    > 
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        id="challengeName"
                        readOnly={true}
                        value={itemInTheList.name}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        id="challengeDefaultPriority"
                        placeholder={itemInTheList.priority}
                        onChange={this.handleChange}
                        >
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        id="challengeDefaultDuration"
                        placeholder={itemInTheList.duration}
                        onChange={this.handleChange}
                        >
                    </input>
                    
                </label>);
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
               </div>

                <div className="printSelChallenges">
                    <h1> Selected Challenges</h1>
                    <label className="schHeader">
                        <input
                            className="schCheckbox"
                            type="checkbox"
                            readOnly={true}
                            checked={false}
                        >
                        </input>
                        <input
                            className="schHeaderText"
                            type="textbox"
                            readOnly={true}
                            value="Challenges">
                        </input>
                        <input
                            className="schHeaderText"
                            type="textbox"
                            readOnly={true}
                            value="Priority">
                        </input>
                        <input
                            className="schHeaderText"
                            type="textbox"
                            readOnly={true}
                            value="Duration">
                        </input>
                    </label>
                    {this.props.challenge.map((itemInTheList,i)=>{
                    return itemInTheList.isSelected? (<label className="labels">
                    <input
                        name="isChallenge"
                        type="checkbox"
                        checked={true}
                        onChange={()=>this.statusUnSelected(itemInTheList,i)}
                    > 
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.name}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.priority}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        id="challengeDefaultDuration"
                        placeholder={itemInTheList.duration}
                        onChange={this.handleChange}
                        >
                    </input>
                </label>):'';
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                </div>
                </div>
                <Button 
                variant="outline-primary"
                //onClick={()=>window.history.push("/MommyReview",{from:"MommyChallenges"})}
                //onClick={React.cloneElement(this.props.children, {challenge: this.state.challenge.name})}
                >Lock Challenges</Button>
            </div>
        );
    }
}

export default MChallenge;