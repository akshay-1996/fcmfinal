import React,{Component} from "react";
import firebase from './firebase';

class App extends Component {

  constructor(props){
    super(props)
    this.state={}
  }

  componentDidMount(){
    const messaging = firebase.messaging()
    messaging.requestPermission().then(()=>{
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