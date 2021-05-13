

import React, { Component } from 'react';
import challenges from '../data/challengedata';
import {Button} from 'react-bootstrap';
//import { withRouter} from 'react-router';
//import { useHistory } from 'react-router';

/*const HistChallenges = props =>{
    let history = useHistory();

    const LockChallenge = event => {
        history.push({
            pathname: 'MommyReview'
        })
    }
};*/


class MommyChallenges extends Component {
    constructor(props){
        super(props)
        this.state={
           challenge:challenges,
           name:"",
           priority:'',
           isSelected:false
        }
    }

    /*passState(){
        const history = useHistory();
    }*/

    handleChange=(eventToBeChanged)=>{
        eventToBeChanged.preventDefault();
        this.setState(
            {
                [eventToBeChanged.target.id]: eventToBeChanged.target.value
            }
        )
    }
    statusUnSelected(itemInTheList,i){
            let currArray = this.state.challenge
            let newVal = currArray[i]
            newVal.isSelected = false
            currArray[i] =newVal
            this.setState(
                {
                    currArray
                }
            )
        }    
    statusSelected(itemInTheList,i) {
            let currArray = this.state.challenge
            let newVal = currArray[i]
            newVal.isSelected = true
            currArray[i] =newVal
            this.setState(
                {
                    currArray
                }
            )
        
        }     
    
    /*LockChallenge() {
        window.history.push("/MommyReview")

        } */
        
   /* const LockChallenge = ({ history}) => (<button onClick={() => { history.push('/MommyReview');

    }

    });*/
    
    render() {
        
        return (
            <div>
                <div>
                    <h1> Mommy Challenges </h1> 
                </div>
                <div className="printChallenges">
                <div className="printNonChallenges">
                    <h3> Identify Challenges</h3>
                    {this.state.challenge.map((itemInTheList,i)=>{
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
                onClick={React.cloneElement(this.props.children, {challenge: this.state.challenge.name})}
                >Lock Challenges</Button>
            </div>
            
        );
    }
}

export default MommyChallenges;