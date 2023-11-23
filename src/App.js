import { useState } from 'react';
import StartGame from './component/StartGame';
import GamePlay from './component/GamePlay';

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePlay=()=>{
    setIsGameStarted((pre)=>!pre);
  }
  return (
   <div>{
    isGameStarted ? <GamePlay/>: <StartGame toggle={toggleGamePlay}/>
    }
     
   </div>
  );
}



export default App;
