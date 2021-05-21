
/*MSchedule is the Parent page controlling all of the child pages.

Route render method is used to navigate to child pages. route navigation takes 3 parameters.
1. A copy of the localstorage of Challenge and Acitvity data
2. A variable to perform state updates to challenge and activity data (....Selected, .....UnSelected)
3. A variable to decide which activity/challenge makes it to the final scheduler
*/


import React, { Component } from 'react';
import challenges from '../data/challengedata';
import activities from '../data/activitiesdata';
import MChallenge from './MChallenge';
import MActivities from './MActivities';
import MReview from './MReview';
import MSchedule from './MSchedule'
import NavDisp from './NavDisp';
//import { BrowserRouter as Router } from 'react-router-dom';
import {BrowserRouter as  Router,Route, Switch} from 'react-router-dom';




class MScheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChallengeReady:false,
          isActReady: false,
          isPriorityReady: false,
          isSummaryReady: false,
          isSchedulerReady: false,
          isActivationReady: false,

          challenge:challenges,
           name:"",
           priority:'',
           isSelected:false,

           activity:activities,
           duration:'',
           

           /*currArray1 : challenges,*/
           
           }
           localStorage.setItem("currArray1",JSON.stringify(challenges))
            localStorage.setItem("currArray2",JSON.stringify(activities))
        };
    
    //const [currArray1, challengeSelection] = useState(challenge)
    

    challengeSelection = (itemInTheList,i) =>{
        let currArray = this.state.challenge
        let newVal = currArray[i]
        newVal.isSelected = true
        currArray[i] =newVal
        this.setState(
            {
                currArray
            }
        )
        //console.log(itemInTheList)
        console.log(this.state.challenge)
        localStorage.setItem("currArray1", JSON.stringify(currArray))
    
    }     
    challengeUnSelection = (itemInTheList,i) =>{
        let currArray = this.state.challenge
        let newVal = currArray[i]
        newVal.isSelected = false
        currArray[i] =newVal
        this.setState(
            {
                currArray
            }
        )
        //console.log(itemInTheList)
        console.log(this.state.challenge)
        localStorage.setItem("currArray1", JSON.stringify(currArray))
    }     

    activitySelection = (itemInTheList,i) =>{
        let currArray = this.state.activity
        let newVal = currArray[i]
        newVal.isSelected = true
        currArray[i] =newVal
        this.setState(
            {
                currArray
            }
        )
        //console.log(itemInTheList)
        console.log(this.state.activity)
        localStorage.setItem("currArray2", JSON.stringify(currArray))
    
    }    
    activityUnSelection = (itemInTheList,i) =>{
        let currArray = this.state.activity
        let newVal = currArray[i]
        newVal.isSelected = false
        currArray[i] =newVal
        this.setState(
            {
                currArray
            }
        )
        //console.log(itemInTheList)
        console.log(this.state.activity)
        localStorage.setItem("currArray2", JSON.stringify(currArray))
    
    }  

    reviewActSelection=(i) => {
        let currArray = this.state.activity
        let newVal = currArray[i]
        newVal.isMandatory = true
        currArray[i] =newVal
        this.setState(
            {
                currArray
            }
        )
        //console.log(itemInTheList)
        console.log(this.state.activity)
        localStorage.setItem("currArray2", JSON.stringify(currArray))
    }

    reviewChalSelection=(i) => {
        let currArray = this.state.challenge
        let newVal = currArray[i]
        newVal.isMandatory = true
        currArray[i] =newVal
        this.setState(
            {
                currArray
            }
        )
        //console.log(itemInTheList)
        console.log(this.state.activity)
        localStorage.setItem("currArray1", JSON.stringify(currArray))
    }

    activityReview=()=>{
        let chalMaxVal = Math.max.apply(Math, JSON.parse(localStorage.getItem("currArray1")).map(function(o) {return o.priority}))
        let actMaxVal = Math.max.apply(Math, JSON.parse(localStorage.getItem("currArray2")).map(function(o) {return o.priority}))
        let actHours = 0
        let chalHours = 0
        let chalArray = JSON.parse(localStorage.getItem("currArray1"))
        let actArray = JSON.parse(localStorage.getItem("currArray2"))
        //console.log(actArray)
        console.log(chalArray)
        console.log(chalMaxVal)
        for (let i = 1; i<=actMaxVal; i++) {
        actArray.map((itemInTheList,j)=>{
            /*console.log(actArray[j].name)
            console.log(actArray[j].priority)
            console.log(i + "th iteration of " + actMaxVal + " maximum val")
            console.log (actArray[j].priority===i?"yes":"no")*/
             if (actArray[j].priority===i && actHours+Number(actArray[j].duration) < 24) {
                //console.log(actArray[j].name + " Priority " + actArray[j].priority + " Duration " + actArray[j].duration)
                     this.reviewActSelection(j);
                    actHours = actHours+Number(actArray[j].duration);
                    console.log("Total Hours is " + actHours + " for priority " + i)      
            }
        });
    }
    //console.log(actHours)
    for (let k = 1; k<=chalMaxVal; k++) {
        chalArray.map((itemInTheList,m)=>{
            /*console.log(chalArray[m].name)
            console.log(chalArray[m].priority)
            console.log(k + "th iteration of " + chalMaxVal + " maximum val")
            console.log (chalArray[m].priority===k?"yes":"no")*/
             if (chalArray[m].priority===k && chalHours+Number(chalArray[m].duration) < 24) {
                //console.log(chalArray[m].name + " Priority " + chalArray[m].priority + " Duration " + chalArray[m].duration)
                     this.reviewChalSelection(m);
                    chalHours = chalHours+Number(chalArray[m].duration);
                    console.log("Total Hours is " + chalHours + " for priority " + k)      
            }
        });
    }
    localStorage.setItem("actHours",actHours);
    localStorage.setItem("chalHours",chalHours);
    }

    


    render() {
        //render={props => <MChallenge statusSelected={this.challengeSelected}
        return (
            <div className="Container1">
                <h1>Mommy Scheduler</h1>
                {/*<h1>{console.log("Chalenge " + this.state.challenge)}</h1>
                <h1>{console.log("Activity " + this.state.activity)}</h1>
        <h1>{console.log("CurrArray2 " + this.state.currArray2)}</h1>
                 <h1>{console.log("CurrArray1 " + this.state.currArray1)}</h1>
                <h1>{console.log(this.state.currArray1)}</h1>
                <h1>{console.log(JSON.parse(localStorage.getItem("currArray1")))}</h1>
                <h1>{console.log(JSON.parse(localStorage.getItem("currArray2")))}</h1>
                <h1>{console.log(Math.max.apply(Math, JSON.parse(localStorage.getItem("currArray1")).map(function(o) {return o.priority})))}</h1>
                <h1>{console.log(Math.max.apply(Math, this.state.activity.map(function(o) {return o.priority})))}</h1>
                <h1>{this.reviewSelection(1)}</h1>
                <h1>{this.activityReview()}</h1>*/}
                <div>

                <Router>
                <NavDisp />
                  <Switch>
                  {/*<Route exact path='/'component={MommyScheduler} />
                  <Route path='/MommyChallenges'component={MommyChallenges} />
                  <Route path='/MommyActivities'component={MommyActivities} />
                  <Route path='/MommyReview'component={MommyReview} /> 
                  <Route path='/MScheduler'component={MScheduler} />
                  <Route exact path='/' component={MScheduler}/>*/}

                  <Route exact path='/' render={()=>{return <div><h1>Please make a selection! </h1></div>}}/>
                  <Route path='/MChallenge' render={() => <MChallenge challenge={JSON.parse(localStorage.getItem("currArray1"))} challengeSelected={this.challengeSelection} challengeUnSelected={this.challengeUnSelection}/>} />
                  <Route path='/MActivities'render={() => <MActivities activity={JSON.parse(localStorage.getItem("currArray2"))} activitySelected={this.activitySelection} activityUnSelected={this.activityUnSelection} />} />
                  <Route path='/MReview' render={() => <MReview challenge ={JSON.parse(localStorage.getItem("currArray1"))} activity ={JSON.parse(localStorage.getItem("currArray2"))} ChallengeHours = {JSON.parse(localStorage.getItem("chalHours"))} ActivityHours = {JSON.parse(localStorage.getItem("actHours"))} />} />
                  <Route path='/MSchedule' render={() => < MSchedule challenge ={JSON.parse(localStorage.getItem("currArray1"))} activity ={JSON.parse(localStorage.getItem("currArray2"))} />} /> 
                 
                 {/*<Route path='/' render={()=>{return<div><h1>Please make a selection! </h1></div>}}/>*/}

                 {/*<Link to='/' render={()=>{return <div><h1>Please make a selection! </h1></div>}}/>
                  <Link to='/MChallenge' render={() => <MChallenge challenge ={JSON.parse(localStorage.getItem("currArray1"))} challengeSelected={this.challengeSelection} challengeUnSelected={this.challengeUnSelection}/>} />
                  <Link to='/MActivities'render={() => <MActivities activity ={JSON.parse(localStorage.getItem("currArray2"))} activitySelected={this.activitySelection} activityUnSelected={this.activityUnSelection} />} />
                  <Link to='/MReview' render={() => <MReview challenge ={JSON.parse(localStorage.getItem("currArray1"))} activity ={JSON.parse(localStorage.getItem("currArray2"))} ChallengeHours = {JSON.parse(localStorage.getItem("chalHours"))} ActivityHours = {JSON.parse(localStorage.getItem("actHours"))} />} />
                <Link to='/MSchedule' render={() => < MSchedule challenge ={JSON.parse(localStorage.getItem("currArray1"))} activity ={JSON.parse(localStorage.getItem("currArray2"))} />} />*/}
                  </Switch>
                
                </Router>
                </div>
                <div className="InitialSetup">
                    <label className="header">
                        <input
                            className="headerCheckbox"
                            type="checkbox"
                            readOnly={true}
                            checked={false}
                        >
                        </input>
                        <input
                            className="headerText"
                            type="textbox"
                            readOnly={true}
                            value="Scheduler Setup steps and status">
                        </input>
                    </label>
                   
                    <label className="labels">
                        <input
                            name="isChallengeReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isChallengeReady}
                        > 
                        </input>
                        <input
                            className="labelSetup"
                            type="textbox"
                            readOnly={true}
                            value="Identify Challenges">
                        </input>
                    </label>
                    <label className="labels">
                        <input
                            name="isSummaryReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isSummaryReady}
                        > 
                        </input>
                        <input
                            className="labelSetup"
                            type="textbox"
                            readOnly={true}
                            value="Prioritize challenges">
                        </input>
                    </label>
                    <label className="labels">
                        <input
                            name="isActReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isActReady}
                        > 
                        </input>
                        <input
                            className="labelSetup"
                            type="textbox"
                            readOnly={true}
                            value="Identify activities part of the challenges">
                        </input>
                    </label>

                    
                    <label className="labels">
                        <input
                            name="isPriorityReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isPriorityReady}
                        > 
                        </input>
                        <input
                            className="labelSetup"
                            type="textbox"
                            readOnly={true}
                            value="Prioritize activities and time">
                        </input>
                    </label>
                    


                    <label className="labels">
                        <input
                            name="isSchedulerReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isSchedulerReady}
                        > 
                        </input>
                        <input
                            className="labelSetup"
                            type="textbox"
                            readOnly={true}
                            value="Preview and Lock Scheduler">
                        </input>
                    </label>

                    <label className="labels">
                        <input
                            name="isActivationReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isActivationReady}
                        > 
                        </input>
                        <input
                            className="labelSetup"
                            type="textbox"
                            readOnly={true} 
                            value="Activate Scheduler">
                        </input>
                    </label>
                </div>
            </div>
        );
    }
}

export default MScheduler;