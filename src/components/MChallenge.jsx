import React, { Component } from 'react';
import challenges from '../data/challengedata';
import {Button} from 'react-bootstrap';
import MScheduler from './MScheduler'

class MChallenge extends Component {
    constructor(props){
        super(props)
        this.state={
           challenge:challenges,
           name:"",
           priority:'',
           isSelected:false
        }
    }
    statusSelected=(itemInTheList,i)=>{
        //this.props.challengeSelected(e.target.value);
        //console.log(e.target.value)
        console.log(itemInTheList)
        console.log(i)
        this.props.challengeSelected(itemInTheList,i)
    }
    render() {
        
        return (
            <div>
                <h1>{console.log(this.props.itemInTheList)}</h1>
                <div>
                    <h1> Mommy Challenges </h1> 
                </div>
                <div className="printChallenges">
                <div className="printNonChallenges">
                    <h3> Identify Challenges</h3>
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
                    
                </label>);
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
               </div>

                <div className="printSelChallenges">
                    <h3> Selected Challenges</h3>
                    {this.state.challenge.map((itemInTheList,i)=>{
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