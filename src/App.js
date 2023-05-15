
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {

  const [mode,setMode]=useState('light')
  const [alert,setAlert] = useState(null)
  
 
  const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  const ModeChange = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert('Dark Mode is Enable','success')
      document.title='Agent - Dark Mode '
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert('Light Mode is Enable','success')
      document.title='Agent - Light Mode '
    }
  }
  return (
    <Router>
      <Navbar title="Agent" MyHome="Home"  mode={mode} ModeChange={ModeChange}></Navbar>
   <Alert alert={alert} />
    <div className='container'>
    <Switch>
          <Route exact path="/about">
          <About/>
          
          </Route>
          
          <Route exact path="/">
          <TextForm mode={mode} showAlert={showAlert}/>
          </Route>
    </Switch>
      
      
      
      
      
    

   
    </div>
    </Router>
   
  );
}

export default App;
