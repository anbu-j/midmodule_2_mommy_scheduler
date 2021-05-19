import React, { Component } from 'react';
import challenges from '../data/challengedata';
import MChallenge from './MChallenge';
import MActivities from './MActivities';
import MReview from './MReview';
import NavDisp from './NavDisp';
//import { BrowserRouter as Router } from 'react-router-dom';
import {BrowserRouter as  Router,Route, Switch} from 'react-router-dom';


class MScheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChallengeReady: true,
          isActReady: false,
          isPriorityReady: true,
          isSummaryReady: false,
          isSchedulerReady: true,
          isActivationReady: false,

          challenge:challenges,
           name:"",
           priority:'',
           isSelected:false
        };
    }

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
    
    }     

    render() {
        //render={props => <MChallenge statusSelected={this.challengeSelected}
        return (
            <div className="Container1">
                <h1>Mommy Scheduler</h1>
                <div>

                <Router>
                <NavDisp />
                  <Switch>
                  {/*<Route exact path='/'component={MommyScheduler} />
                  <Route path='/MommyChallenges'component={MommyChallenges} />
                  <Route path='/MommyActivities'component={MommyActivities} />
                  <Route path='/MommyReview'component={MommyReview} />*/}
                  <Route exact path='/'component={MScheduler} />
                  <Route path='/MChallenge' render={props => <MChallenge challenge ={this.state.challenge} challengeSelected={this.challengeSelection} />} />
                  <Route path='/MActivities'component={MActivities} />
                  <Route path='/MReview'component={MReview} />
                  <Route path='/' render={()=>{return<div><h1>Please make a selection! </h1></div>}}/>
                  </Switch>
                
                </Router>
                </div>
                <div className="InitialSetup">
                   
                    <label className="labels">
                        <input
                            name="isChallengeReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isChallengeReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Identify Challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
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
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Identify activities part of the challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
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
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Prioritize activities and time">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
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
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Prioritize challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
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
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Preview Scheduler">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
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
                            className="labelText"
                            type="textbox"
                            readOnly={true} 
                            value="Activate Scheduler">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>
                </div>
            </div>
        );
    }
}

export default MScheduler;