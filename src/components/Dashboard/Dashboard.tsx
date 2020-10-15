import React from 'react';
import AffirmationWall from '../AffirmationWall/AffirmationWall';
import firebase from '../../firebase';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div>
            <h2>Logged in as <span className="userName"> {firebase.auth().currentUser.displayName}! </span></h2>
            <img alt="profile photo" src={firebase.auth().currentUser.photoURL} />
          <AffirmationWall />  
        </div>
    )
}
