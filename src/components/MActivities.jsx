import React, { Component } from 'react';

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
            <label className="labels">
                    <p> </p>
                    <p>Acitvity</p>
                    <p>Duration</p>
                    <p>Daily/Weekly</p>
                    <p>Mandatory</p>
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
                        value={itemInTheList.duration}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.isDailyTask}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.isMandatory}>
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
                        value={itemInTheList.isSelected }>
                    </input>
                </label>)
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                </div>
                <div className="printSelActivities">
            {/*<label className="labels">
                    <p> </p>
                    <p>Acitvity</p>
                    <p>Duration</p>
                    <p>Daily/Weekly</p>
                    <p>Mandatory</p>
        </label>*/}
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
                        value={itemInTheList.duration}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.isDailyTask}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.isMandatory}>
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
                        value={itemInTheList.isSelected }>
                    </input>
                </label>):'';
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                </div>
                </div>
            </div>
        );
    }
}

export default MActivities;