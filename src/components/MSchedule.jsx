import React, { Component } from 'react';
//import Datetime from 'react-datetime';
//import "react-datetime/css/react-datetime.css";

class MSchedule extends Component {
   
    
    
      /*componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }

      countDownTime(e){
        let startTime= Date().substr(16,8);
        console.log(startTime)
        //console.log(Date.now())
        //let runTime = e - startTime
        //console.log(runTime)
 
     }*/
     constructor(props){
        super(props)
        this.state = {
          time: 0,
          isOn: false,
          start: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
      }
      startTimer() {
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
          //start: Date.getHours()+":"+Date.getMinutes()+":"+Date.getSeconds()+ Date.getHours
          //start: Date.getHours+":"+Date.getMinutes+":"+Date.getSeconds
          //start: Date.now()>this.state.time? 
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
            //time: (Date.getHours+":"+Date.getMinutes+":"+Date.getSeconds - this.state.start)
        }), 1000);
      }
      stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
      }
      resetTimer() {
        this.setState({time: 0, isOn: false})
      }
    
    render() {
        return (
            <div>
                <div>
                    <h1> Mommy's Schedule </h1> 
                    {/*<h1>{console.log(t)}</h1>
                    <h3>timer: {this.state.time}</h3>
                    <h3>{Math.floor((Date.Datetime/1000)%60)}</h3>*/}
                    <h3>{Date()}</h3>
                    <h3>{Math.floor((Date.now()/(1000*60*60*24)))}</h3>
                    <h3>{Math.floor((Date.now()/(1000*60*60))%24)}</h3>
                    <h3>{Math.floor((Date.now()/1000/(60*60))%24)}</h3>
                    <h3>{Math.floor((Date.now()%(1000*60*60*24))/(1000*60*60))}</h3>
                    <h3>{Math.floor((Date.now()/1000/60)%60)}</h3>
                    <h3>{Math.floor((Date.now()/1000)%60)}</h3>
                </div>
                <div>
                {this.props.activity.map((itemInTheList,i)=>{
                        return (itemInTheList.isSelected && (itemInTheList.isMandatory))? (<label className="labels">
                        <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.name}>
                    </input>
                    <button onClick={this.startTimer}>Start</button>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Start Time">
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="End Time">
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={this.state.isOn ? this.state.time:"Start Time"}>
                    </input>
                    <button onClick={this.resetTimer}>Complete</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Daily Activity">
                    </input>
                    </label>):'';
                    }
                    )

                    }
                    {this.props.challenge.map((itemInTheList,i)=>{
                        return (itemInTheList.isSelected && (itemInTheList.isMandatory))? (<label className="labels">
                        <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.name}>
                    </input>
                    <button >Start</button>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Start Time">
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="End Time">
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Time Left">
                    </input>
                    <button >Complete</button>
                    <button >Stop</button>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value="Challenge">
                    </input>
                    </label>):'';
                    }
                    )

                    }
                </div>
            </div>
        );
    }
}

export default MSchedule;