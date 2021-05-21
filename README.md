# Mommy Scheduler
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#technical-details">Technical Details</a></li>
    <li><a href="#bugs">Bugs</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project aims at building an online scheduler for Mommies who struggle to complete all their planned activities and find time for themselves. It schedules the activities and solve their challenges by alloting time daily based on priorities.This is a systematic approach to find some ** ME TIME ** for all busy mommies who are juggling to fit into their schedule.

## Built With
 
The game is developed using the following:
* React
* React Router Dom
* Javascript
* CSS
*  React -Bootstrap
## Getting Started

To start the scheduler;

### Prerequisites
1. Visual Studio 
2. Chrome (Version 89.0.4389.128 or later)
3. API

### Installation
Clone the Git repository to your local system <br>

```bash
    git clone https://github.com/anbu-j/project_mommy_scheduler.git 
```

## Usage
The Scheduler starts when the user selects the different checkboxes and clicks on the button "**Start **". The scheduler charts the schedule of activities based on priorities (* higher priority will be considered first- on a scale of (1-10) *) and check it with time duration for each activity to finish, calculates to find out the remaining time available in a day to finish the other activities with next high priority. If the user has still some free time left,then we will let user select from their challenges with highest priority and add it that to activity (*solving their challenge to find time to do *) and incorporate that to schedule chart.We have a timer to remind the user when to start and stop their activities in a time frame assigned. 

 The Mommy Scheduler screen is split into 4 sections 
 * **M CHALLENGES :** It lets the the users to identify their "**Challenges**" from a table of common challenges facing in daily life and identified challenges will be displayed along with priorities.
 * **M ACTIVITIES :** It lets the user to choose their "**Activities**" from a table based on time taken to finish, whether it is a daily or weekly activity or a mandatory one. 
 * **REVIEW SCHEDULE :** It displays the "** identified challenges and activities **" from the previous two links and let the users reassign their priorities and choices for final reviewing.
 * ** M SCHEDULER :** It displays the final schedule table with timers enabled with start, stop and complete button. Also we calculate left over time in a day and allows users to add their challenges to activity field and thus solving their time constraints to finish their challenges.


## Features
1. Time left for activities  is highlighted with different colors.
<!--2. The navigation is implemented for different pagesselection made by the user on the on-screen keyboard turns the color of the key to
    * "**Golden**" upon matching a letter in the mystery sentence 
    * "**Grey**" upon not matching a letter in the mystery sentence.
3. Each time a key is selected, the players "**Turns left**"  and points "**Score**" are updated in the "**Score Board**".
4. Users are alerted of the game progress as alerts during the game.
5. Users can restart the game at any time during the play, using the button "**Restart**"
6. A winner is declared after 5 rounds of play.
7. Automaticaly determine the number of turns based on the mystery sentence.-->

## Roadmap
<!--1. Display in game messages in the "**Game Message**" section of the Players Console.
2. Add Screenshots of the game to README file

## Technical Details
1. **atClick** - Function called each time a key on the On screen keyboard is selected.
2. **startGame** - Function called each time the Start button is selected. Disabled when the game is in progress.
3. **disp_string** - Function that calls disp_board() and disp_space() functions to create the hidden sentence on the game console.
4. **disp_comp**- Function that compares the Key selected on the On screen keyboard with the hidden letter on the game console and changes both to "**Golden**" uppon successful match and "**Grey**" upon unsuccessful match. Also calls the pointsCalc() and winCalc() functions to calculate the points and determine if the round is complete.
5. **winCalc** - Function calculates if the mystery sentence has been successfully found within the number of turns. If all 5 rounds have completed successfully, the function declares a winner of the game. The function calls reGame() function to start the next round and endGame() to go back to the Start of the game.
6. **reGame** - Resets the game console and Scoreboard. Resets all the in game variables used by the program.
7. **quitGame** - Resets the game console, Player console and the score board. Start button is activated at this point.
8. **homeRun** - Function gives the in-turn player an opportunity to take out the second player from the game and predict the sentence. Turns are recalculated to ensure the player has minimum opportunities to win. If successful, the player gets all the points for the round. If unsuccessful, no player gets a point for the round.
9. **getString** - Function scans through the array of available sentenes and randomly selects a sentence for the round.
10. **clearDisplayBoard** - Function clears the mystery sentence, upon calling.
11. **clearKeyColor** - Function clears the key selected on the keyboard (after completion of a round/game/restart)
12. **clearPoints** - Function clears the points for both players in each round, upon calling.
13. **disp_board** - Function creates a box of letter in the mystery sentence, upon calling.
14. **disp_space** - Function creates a blank space between two words, upon calling.
15. **turnsCalc** - Scans through the mystery sentence, finds the count of unique letters, and marks it as the number of turns a player has to predict the mystery sentence.
16. **pointsCalc** - Function calculates the points after each user selection on the on screen keyboard, upon calling.
17. **resultMessage**- Function displays the alert message notifying players about the status of play, upon calling.
18. **scoreBoard** - Functions prints the scoreboard in the game screen during play, upon calling.
19. **endGame**- Function clears the player in round scoreboard, after each round, upon calling.-->

## Bugs
<!--1. Points are displayed after the alert message.
2. Repeated click on an already selected letter leads to losing a chance.-->
## Contact
Email - anbuelza_cherian@yahoo.com <br>
LinkedIn - [linkedin-url]: https://linkedin.com/in/anbu-joselin
## Acknowledgement
[w3 schools](W3Schools Online Web Tutorialshttps://www.w3schools.com) <br>
[stack overflow](Stack Overflow - Where Developers Learn, Share, & Build ...https://stackoverflow.com)
<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)