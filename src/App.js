import React, { useState } from 'react';
import "./App.css";

function App() {
    const [initial, setinitial]=useState(false);
    const [health, sethealth]=useState(100);
    const [health2, sethealth2]=useState(100);
    const [count, setcount]=useState(0);

    const handleStart=()=>{
        setinitial(true)
    }
    const handleShoot=()=>{
            setcount(count+1)
            var random2=Math.floor(Math.random()*5)+1;
            var x=health-random2
            sethealth(health-random2)
            var random1=Math.floor(Math.random()*5)+1;
            var y=health2-random1
            sethealth2(health2-random1)
            if(count ===5){
                if (x===y) {
                    document.write("Game has been Tie")
                }else if(x>y){
                    document.write("Player 1 won the Game")
            
                }else{
                    document.write("player 2 won the Game")
                }
            }
    }
  return(
      <>
        <div align="center">
            <h1>Welcome to Shooting Game</h1>
           <button onClick={handleStart}>Start Game</button><br/><br/>
        { initial && <div className="content">
           <button onClick={handleShoot}>Shoot Each Other</button><br/>
           <h1>Only 5 Round</h1>
           <h1>Round:{count}</h1>
           <div className='player1'>
             <h2>Player 1-</h2>
             <h2 id="get1">Health:{health} %</h2>
           </div><br/>
           <div className='player2'>
           <h2>Player 2-</h2>
             <h2 id="get2">Health:{health2} %</h2>
           </div>
        </div>}
        </div>
      </>
  )
}

export default App;
