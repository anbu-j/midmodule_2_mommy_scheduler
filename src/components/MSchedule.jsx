import React, { Component } from 'react';
//import Datetime from 'react-datetime';
//import "react-datetime/css/react-datetime.css";
import ImageCharts from 'image-charts';

class MSchedule extends Component {
   
     constructor(props){
        super(props)
        this.state = {
          time: 0,
          start: 0,
          startTime: 0,
          endTime: 0,
          dispStart: '',
          dispEnd: '',
          loading: true,
          Blobimage: ''
          
        }
        const url = new ImageCharts()
        this.chartRef = React.createRef()
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
      }
      startTimer() {
        this.setState({
          isOn: true,
          //this.state.challenge.isOn:true,
          time: this.state.time,
          start: Date.now() - this.state.time,
          //startTime: Date.now(),
          //start: Date.getHours()+":"+Date.getMinutes()+":"+Date.getSeconds()+ Date.getHours
          //start: Date.getHours+":"+Date.getMinutes+":"+Date.getSeconds
          //start: Date.now()>this.state.time? 
          dispStart: ((Math.floor(((Date.now()-this.state.start)/1000/(60*60))%24)-4)+":"+(Math.floor(((Date.now()-this.state.start)/1000/60)%60))+":"+(Math.floor(((Date.now()-this.state.start)/1000)%60)))
          
        })
        this.timer = setInterval(() => this.setState({
          //time: Date.now() - this.state.start
            //time: (Date.getHours+":"+Date.getMinutes+":"+Date.getSeconds - this.state.start)
            time: ((Math.floor(((Date.now()-this.state.start)/1000/(60*60))%24))+":"+(Math.floor(((Date.now()-this.state.start)/1000/60)%60))+":"+(Math.floor(((Date.now()-this.state.start)/1000)%60)))
        }), 1000);

      }
      stopTimer() {
        this.setState(
          {
            isOn: false,
            endTime: Date.now()- this.state.time,
            dispEnd: ((Math.floor(((Date.now()- this.state.endTime)/1000/(60*60))%24)-4)+":"+(Math.floor(((Date.now()- this.state.endTime)/1000/60)%60))+":"+(Math.floor(((Date.now()- this.state.endTime)/1000)%60)))
          })

        clearInterval(this.timer)
      }
      resetTimer() {
        this.setState(
          {
            time: 0, 
            isOn: false,
            endTime: Date.now()-this.state.time,
            dispEnd: ((Math.floor(((Date.now()- this.state.endTime)/1000/(60*60))%24)-4)+":"+(Math.floor(((Date.now()- this.state.endTime)/1000/60)%60))+":"+(Math.floor(((Date.now()- this.state.endTime)/1000)%60)))
          })
      }

      async componentDidMount() {
        //const url = `https://api.randomuser.me/`;
        //const url = "http://www.colourlovers.com/api/color/6B4106";
        //const url = `https://pokeapi.co/api/v2/pokemon/pikachu`

        
        const url = `https://image-charts.com/chart?cht=p3&chd=t:90,10&chs=700x100`
        const response = await fetch(url);
        const data = await response.blob();
        //data.toDataURI()
        //this.setState({Blobimage: response});
        /*var blob = new Blob([data], {type: "image/png"})
        var imageURL = urlCreator.createObjectURL(blob);*/
        
        //const pieURL = ImageCharts(url).cht('p').chd('a:2.5,5,8.3').chs('100x100');
        //console.log(pieURL.toDataURI());
        //console.log(pieURL)
        console.log(data)
        /*this.myChart = new Chart(this.canvasRef.current, 
                                  {
                                    type: 'pie',
                                    
                                  });*/
        //this.setState({color: data.colors[0]})
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1> Mommy's Schedule </h1> 
                    {/*<h1>{console.log(t)}</h1>
                    <h3>timer: {this.state.time}</h3>
                    <h3>{Math.floor((Date.Datetime/1000)%60)}</h3>
                    <h3>{Date()}</h3>
                    <h3>{"Start time " + this.state.startTime}</h3>
                    <h3>{Date.now()}</h3>
                    <h3>{Math.floor(((Date.now()-this.state.start)/(1000*60*60*24)))}</h3>
                    <h3>{Math.floor(((Date.now()-this.state.start)/(1000*60*60))%24)}</h3>
                    <h3>{Math.floor(((Date.now()-this.state.start)/1000/(60*60))%24)}</h3>
                    <h3>{Math.floor(((Date.now()-this.state.start)%(1000*60*60*24))/(1000*60*60))}</h3>
                    <h3>{Math.floor(((Date.now()-this.state.start)/1000/60)%60)}</h3>
                    <h3>{Math.floor(((Date.now()-this.state.start)/1000)%60)}</h3>*/}
                    <img source={{uri: this.state.Blobimage}} style={{ height: 200, width: null, flex: 1 }}/>
                </div>
                <div className="scheduler">
                  <label className="labels">
                <input
                        className="schHeaderText"
                        type="textbox"
                        readOnly={true}
                        value="Activity">
                    </input>
                    <button className="schHeaderButton">Start</button>
                    <input
                        className="schHeaderText"
                        type="textbox"
                        readOnly={true}
                        //value="Start Time">
                        value="Start Time">
                    </input>
                    <input
                        className="schHeaderText"
                        type="textbox"
                        readOnly={true}
                        value="End Time">
                    </input>
                    <input
                        className="schHeaderText"
                        type="textbox"
                        readOnly={true}
                        value="Time Left">
                    </input>
                    <button className="schHeaderButton">Complete</button>
                    <button className="schHeaderButton">Stop</button>
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
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.name}>
                    </input>
                    <button onClick={this.state.isOn? '':this.startTimer}>Start</button>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        //value="Start Time">
                        value={this.state.dispStart}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={this.state.dispEnd}>
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
                    <canvas ref={this.chartRef} />
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
                    <button onClick={this.state.isOn? '':this.startTimer}>Start</button>
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