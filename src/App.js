import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const  toggleMode = ()=>{
       if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled", "success");
       }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
       }
        }

  return (
  <>
  <Router>
   <Navbar title="TextUtils" abouttext="about" mode={mode}  toggleMode={toggleMode} />
  <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
       </Route>
        </Switch>       
  </div>
  </Router>
  </>
  );
}

export default App;

