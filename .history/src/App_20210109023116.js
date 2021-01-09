import React,{useEffect} from 'react'
import './App.css';
import './index.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from "./Components/Login"
import {useStateValue} from './Components/StateProvider'
import {auth} from "./Components/firebase";

function App() {
  const [user,dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
     if(authUser){
       //user is logged in

      //  dispatch({
      //    type:'SET_USER',
      //    user: authUser
      //  })
     }
     else{
       //user is logged out
       dispatch({
        type:'SET_USER',
        user: null
      })
     }
    })

    return ()=>{
      unsubscribe();
      //detaching listener
      //Any cleanup operations goes here
    }
  },[])

  //console.log("USER IS ",user);


  return (
   <Router>
     <div className="app">
       <Switch>
         <Route path='/checkout'>
         <Header/>
          <h1>checkout</h1>
          <Checkout/>
         </Route>
         <Route path='/login'>
           <Login/>
         </Route>
         <Route path='/'>
           <Header/>
           <Home/>
         </Route>
       </Switch>
     </div>
   </Router>
  );
} 

export default App;
