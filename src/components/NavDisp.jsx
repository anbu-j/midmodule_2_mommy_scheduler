import React from 'react';
//5. import link from react-router-dom so that we can make links to pages
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import eventKey from 'react-bootstrap'
import {BrowserRouter as Router} from 'react-router-dom'
import MChallenge from './MChallenge'
import { LinkContainer } from 'react-router-bootstrap';

function NavDisp() {
    /*const navStyle = {
        display:"flex",
        justifyContent:"space-around",
        margin:"10 px"
    }*/
    return (
        <div>
            <Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
                   
                   <Router>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
                                {/*<Nav.Link href='/'>Mommy Scheduler</Nav.Link>
                                <Link to='/MChallenges'>}>M Challenges</Link>
                                <Nav.Item><Nav.Link href='/'></Nav.Link></Nav.Item>
                                <LinkContainer to="/MChallenge"><Nav.link>M Challenge</Nav.link></LinkContainer >*/}
                                <Nav.Link href='/MChallenge'>M Challenges</Nav.Link>
                                <Nav.Link href='/MActivities'>M Activities</Nav.Link>
                                <Nav.Link href='/MReview'>Review Schedule</Nav.Link>
                                <Nav.Link href='/MSchedule'>Mommy's Schedule</Nav.Link>
                                
                                
                            </Nav>
                    {/*<Link to='/MommyChallenges'>Mommy Challenges</Link>
                    <Link to='/MommyActivities'>Mommy Activities</Link>
                    <Link to='/MommyReview'>Mommy Review</Link>    */}
                        </Navbar.Collapse>
                    </Router>
                </Navbar>
        </div>
    );
}

export default NavDisp;