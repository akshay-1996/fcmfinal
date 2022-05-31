import React,{Component} from "react";
import firebase from './firebase';
// import {requestPermission} from 'firebase/auth'
// import {messaging} from 'firebase/messaging'



class App extends Component {

  constructor(props){
    super(props)
    this.state={}
  }

  componentDidMount(){
    // console.log(firebase)
    const messaging = firebase.messaging()
    // console.log(messaging)
    messaging.requestPermission().then(()=>{
      // console.log();
      return messaging.getToken()
    }).then(token=>{
      console.log('Token', token);
    }).catch((err)=>{
      console.log('Error=', err);
    })
  }

  render() { 
    return (
      <div>
      <h1>Firebase Push Notification</h1>
      </div>
    );
  }
}
 
export default App;