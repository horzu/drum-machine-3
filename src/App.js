import './App.scss';
import {bankOne, bankTwo} from './components/data';
import React, {useEffect, useState} from 'react';


function App() {
  const [volume, setVolume] = useState(1)
  const [displayText, setDisplayText] = useState("Heater Kit");
  const [banks, setBanks] = useState(bankOne);
  const [power, setPower] = useState(true);
  const [recording, setRecording] = useState("");
  const [speed, setSpeed] = useState(0.5);

  const playRecording = () =>{
    let index = 0;
    let recordArray = recording.split("|")
    const interval = setInterval(()=> {
        let audio = document.getElementById(recordArray[index]);
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play();
        index++;
        }, speed * 500);
        setTimeout(()=> clearInterval(interval), 
        500 * speed * recordArray.length-1
        )
  };

  const deletePrevious = () => {
    let recordArray = recording.split("|");
    recordArray.pop();
    recordArray.pop();
    let newRecord = recordArray.join("|");
    setRecording(newRecord  + "|");
  }

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
      setRecording("");
    } else {
      setBanks(bankOne)
      setDisplayText("Heater Kit");
      setRecording("");
    }
  }
}

  return (
    <div className="App">
      <div id="container">
      <div id="drum-machine">
        <div id="pad-bank">
            {banks.map((clip,idx) => (
              <Pad key={idx} clip={clip} volume={volume} power={power} setDisplayText={setDisplayText} setRecording={setRecording} />
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
      <br/>
      <div id="recording">
          {recording && (
            <>
              <h4>Tempo ({speed})</h4>
              <input type="range" value={speed} min="0.1" max="2" step="0.01" onChange={(e)=> setSpeed(e.target.value)} className="w-50"/>
              <br/>
              <button onClick={playRecording} className="btn btn-success">Play</button>
              <button onClick={deletePrevious} className="btn btn-danger">Delete</button>
              <button onClick={() => setRecording("")} className="btn btn-secondary">Clear</button>

            </>
            
          )}
          <h4>{recording}</h4>
        </div>
        </div>
    </div>
  );
}

function Pad ({clip, volume, power, setDisplayText,setRecording }) {
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
      let audio = document.getElementById(clip.id);
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      setActive(true);
      setTimeout(()=> setActive(false), 200);
      setDisplayText(clip.id);
      setRecording(prev => prev + clip.id + "|")
      }
    }


  return(
    <div onClick={playSound} className={`buttons btn btn-secondary ${active && "btn-warning"}`} >
      
      <audio src={clip.url} id={clip.id} />
      {clip.keyTrigger}
      
    </div>
  )
}

export default App;