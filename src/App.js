import './App.scss';
import {bankOne, bankTwo} from './components/data';
import React, {useEffect, useState} from 'react';


function App() {
  const [volume, setVolume] = useState(1);
  const [displayText, setDisplayText] = useState("");
  return (
    <div className="bg-info min-vh-100 text-white">
      <div className="text-center" id="drum-machine">
        <div id="display">
          {bankOne.map((clip, idx) => (
            <Pad key={idx} clip={clip} volume={volume} setDisplayText={setDisplayText}/>
          ))}
        </div>
        <br/>
        <h4>Volume</h4>
        <input className="w-50" type="range" name="volume" id="volume" step="0.01" min="0" max="1" value={volume} onChange={(e)=> setVolume(e.target.value)}/>
        <h3>{displayText}</h3>
      </div>
    </div>
  );
}

function Pad ({clip, volume, setDisplayText}) {
  const [active, setActive] = useState(false);

  useEffect(()=> {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  })
  
  const handleKeyPress = (e) =>{
    if(e.keyCode === clip.keyCode){
      playSound();
    }
  }

  const playSound = () => {
    let audio = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(()=> setActive(false), 200);
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play();
    setDisplayText(clip.id)
  }
  
  return(
    <div className={`btn btn-secondary p-4 m-3 ${active && "btn-warning"}`  } onClick={playSound}>
      <audio src={clip.url} id={clip.keyTrigger} />
      {clip.keyTrigger}
    </div>
  )
}

export default App;
