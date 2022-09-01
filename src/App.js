import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //weather dark mode is enabled or not
  const [mode2, setMode2] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const [btnTextColor,setTextColor]=useState('text-dark')
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      // setTextColor('text-dark');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils-Light Mode";
    } else {
      setMode("dark");
      // setTextColor('text-light')
      document.body.style.backgroundColor = "#202830";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils-Dark Mode";
      // setInterval(() => {
      //   document.title='Textutils is Amazing Mode';
      // }, 1500);
      // setInterval(() => {
      //   document.title='Install-Textutils Now';
      // }, 3000);
    }
  };

  // toggle mode 2nd button
  const toggleMOde2 = () => {
    if (mode2 === "dark") {
      setMode2("light");
      // setTextColor('text-dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode2("dark");
      // setTextColor('text-light')
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
     
        {/* <Navbar title="TextUtils" homeText="Home" aboutText="About Us"/> */}
        <Navbar
          mode={mode}
          // toggleMOde2={toggleMOde2}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
       
        
          <TextForm
          showAlert={showAlert}
          heading="Enter the text to analize"
          mode={mode} />    
  

    </>
  );
}

export default App;
