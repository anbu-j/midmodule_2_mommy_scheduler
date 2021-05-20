import React, { Component } from 'react';
import MScheduler from './MScheduler'
import {Button} from 'react-bootstrap';

class MReview extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1> Review selected Challenges and Activities! </h1> 
                </div>
                <div className="printReview">
                    <div className="printSelChallenges">
                        <h3> Activities and Challenges waiting to be scheduled</h3>
                        {this.props.activity.map((itemInTheList,i)=>{
                        return (itemInTheList.isSelected && (!itemInTheList.isMandatory))? (<label className="labels">
                        <input
                            name="isAct"
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
                            value={itemInTheList.duration}>
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
                        {this.props.challenge.map((itemInTheList,i)=>{
                        return (itemInTheList.isSelected && (!itemInTheList.isMandatory))? (<label className="labels">
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
                    <div className="printSelActivities">
                    <h3> Selected Schedule</h3>
                {/*<label className="labels">
                        <p> </p>
                        <p>Acitvity</p>
                        <p>Duration</p>
                        <p>Daily/Weekly</p>
                        <p>Mandatory</p>
            </label>*/}
                        {this.props.activity.map((itemInTheList,i)=>{
                        return (itemInTheList.isSelected && (itemInTheList.isMandatory))? (<label className="labels">
                        <input
                            name="isAct"
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
                            value={itemInTheList.duration}>
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
                        {this.props.challenge.map((itemInTheList,i)=>{
                        return (itemInTheList.isSelected && (itemInTheList.isMandatory))? (<label className="labels">
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
                <div>
                <Button 
                variant="outline-primary"
                //onClick={()=>window.history.push("/MommyReview",{from:"MommyChallenges"})}
                //onClick={React.cloneElement(this.props.children, {challenge: this.state.challenge.name})}
                >Lock Schedule</Button>
                </div>
            </div>
        );
    }
}

export default MReview;