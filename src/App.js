import './App.scss';
import {bankOne, bankTwo} from './components/data';
import React, {useEffect, useState} from 'react';


function App() {
  const [volume, setVolume] = useState(1)
  const [displayText, setDisplayText] = useState("Heater Kit");
  const [banks, setBanks] = useState(bankOne);
  const [power, setPower] = useState(true);

  const togglePower = () => {
    if(power){
      setPower(false);
      setDisplayText("OFF");
    } else {
      setPower(true);
      setDisplayText("ON");
    }
  }
  
  const selectBank = () => {
  if(power){
    if(banks === bankOne){
      setBanks(bankTwo);
      setDisplayText("Smooth Piano Kit");
    } else {
      setBanks(bankOne)
      setDisplayText("Heater Kit");
    }
  }
}

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="pad-bank">
            {banks.map((clip,idx) => (
              <Pad key={idx} clip={clip} volume={volume} power={power} setDisplayText={setDisplayText} />
            ))}
        </div>
        <br/>
        <div id="controls">
          <br/>
          <h5>Power</h5>
            <label className="switch">
              <input type="checkbox" onClick={togglePower} value={power} />
              <span className="slider"></span>
            </label>
          <br/>
          <h5 id="screen">{displayText}</h5>
          <h4>Volume</h4>
          <input type="range" value={volume} min="0" max="1" step="0.01" onChange={(e)=> setVolume(e.target.value)} className="w-50"/>
          <br/>
          <div id="switcher" >
            <h5>Audio Bank</h5>
            <label className="switch">
              <input type="checkbox" onClick={selectBank} />
              <span className="slider"></span>
            </label>
        </div>
        </div>
      </div>
    </div>
  );
}

function Pad ({clip, volume, power, setDisplayText }) {
  const [active, setActive] = useState(false);

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
    return ()=> document.removeEventListener("keydown", handleKeyPress);
  })

  const handleKeyPress = (e) => {
    if(e.keyCode === clip.keyCode){
      playSound();
    }
  }

  
  const playSound = () =>{
    if(power){
      let audio = document.getElementById(clip.keyTrigger);
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      setActive(true);
      setTimeout(()=> setActive(false), 200);
      setDisplayText(clip.id);
      }
    }


  return(
    <div onClick={playSound} className={`buttons btn btn-secondary p-4 m-3 ${active && "btn-warning"}`} >
      
      <audio src={clip.url} id={clip.keyTrigger} />
      {clip.keyTrigger}
      
    </div>
  )
}

export default App;