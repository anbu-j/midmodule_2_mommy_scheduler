import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class MActivities extends Component {
    constructor(props){
        super(props)
    }
    statusSelected=(itemInTheList,i)=>{
        //this.props.challengeSelected(e.target.value);
        //console.log(e.target.value)
        console.log(itemInTheList)
        console.log(i)
        this.props.activitySelected(itemInTheList,i)
    }
    statusUnSelected=(itemInTheList,i)=>{
        //this.props.challengeSelected(e.target.value);
        //console.log(e.target.value)
        console.log(itemInTheList)
        console.log(i)
        this.props.activityUnSelected(itemInTheList,i)
    }
    render() {
        return (
            <div>
                <div>
                <h1> Identify Activities and Prioritize </h1> 
            </div>
            <div>
                
            </div>
            <div className="printActivities">
            <div className="printNonActivities">
            <h1> Identify Activities</h1>
            <label className="labels">
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
                            value="Activities">
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
                    {this.props.activity.map((itemInTheList,i)=>{
                    return itemInTheList.isSelected? '': (<label className="labels">
                    <input
                        name="isAct"
                        type="checkbox"
                        onChange={()=>this.statusSelected(itemInTheList,i)}
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
                        readOnly={true}
                        value={itemInTheList.duration}>
                    </input>
                </label>)
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                </div>
                <div className="printSelActivities">
                <h1> Selected Challenges</h1>
            <label className="labels">
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
                            value="Activities">
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
                    {this.props.activity.map((itemInTheList,i)=>{
                    return itemInTheList.isSelected? (<label className="labels">
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
                        value={itemInTheList.priority}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.duration}>
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
                >Lock Activities</Button>
            </div>
        );
    }
}

export default MActivities;