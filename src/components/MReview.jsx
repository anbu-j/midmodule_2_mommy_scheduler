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
                    <div className="printUnSelSchedule">
                        <h1> Future Selections</h1>
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
                        <input
                            className="schHeaderText"
                            type="textbox"
                            readOnly={true}
                            value="Type">
                        </input>
            </label>
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
                        <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Daily Activity">
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
                        <input
                        className="labelText"
                        type="textbox"
                        id="challengeDefaultDuration"
                        placeholder={itemInTheList.duration}
                        onChange={this.handleChange}
                        >
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Challenge">
                    </input>
                    </label>):'';
                        
                        //itemInTheList.name, itemInTheList. ;
                        
                        }
                        )

                        }
                    </div>
                    <div className="printSelSchedule">
                    <h1> Selected Schedule</h1>
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
                        <input
                            className="schHeaderText"
                            type="textbox"
                            readOnly={true}
                            value="Type">
                        </input>
            </label>
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
                        <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Daily Activity">
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
                        <input
                        className="labelText"
                        type="textbox"
                        id="challengeDefaultDuration"
                        placeholder={itemInTheList.duration}
                        onChange={this.handleChange}
                        >
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Challenge">
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