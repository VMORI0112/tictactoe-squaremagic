import React, { useState, useEffect } from 'react';

import './squaremagic.css';

const Tictactoe = () => {

         const [play, setPlay] = useState("X");
         const [count, setCount] = useState(0);
         const [xwon, setXwon] = useState(false);
         const [owon, setOwon] = useState(false);
         const [scoreX, setScoreX] = useState([]);
         const [scoreO, setScoreO] = useState([]);
         const [winx, setWinx] = useState(0);
         const [wino, setWino] = useState(0);
        // console.log("flag" + flag, "lights" + lightsoff)

            let i=0;
            let j=0;

            const getini = () => {
                  if (count === 1){
                      setScoreX([]);
                      setScoreO([]);
                      setWinx(0);
                      setWino(0);
                   }
            }
            const getplay = (event) => {
                  let idval = event.target.id;
                  (play === "X") ? setPlay("O") : setPlay("X");
                      document.getElementById(idval).innerHTML = play ;
                      document.getElementById(idval).style.opacity = ".3";
                      document.getElementById(idval).disable=true;
                      document.getElementById(idval).style.pointerEvents = 'none';
                      (play === "X") ? scoreX.push(idval) : scoreO.push(idval);
                      setCount(count + 1);
                    //  console.log(count, scoreX, scoreO);
            console.log(count, scoreX, scoreO);
            }
            // getini();

            const getwinner = () => {

                    if (count >= 3 && count <= 9) {
                        // console.log(count, scoreX, scoreO);
                        for (i=0; i < scoreX.length; i++) {
                             winx = winx + scoreX[i] ;
                        }
                        if (winx === 15) {
                            setXwon(true) ;
                        } else {
                            for (j=0; j < scoreO.length; j++) {
                                wino = wino + scoreO[j] ;
                            }
                            if (wino === 15){
                                setOwon(true)
                            }

                        }
                    }
            }

                    //  console.log(winx, wino, xwon, owon);
                    // document.getElementById("yellowone").style.opacity = ".3";
                    // document.getElementById("greenone").style.opacity = ".3";
                    // document.getElementById("walk").style.opacity = ".3";
                    // document.getElementById("stop").style.opacity = ".3";



    // useEffect(() => {

    //     if (flag === 1 && lightsoff === 0)  {
    //         setLightsoff(0);
    //         setTimeout(() => setTime(time + 1), 1000);
    //         if (time === 2)  onYellow();
    //         if (time === 4)  onRed();
    //         if (time === 10)  onGreen();
    //         if (time === 16)  setTime(0);
    //     }


    // }, [time, flag, lightsoff])


	return (
       <>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-2 ads"> "ads </div>
            <div class="col-12 col-sm-6 content">
                <div class="container-fluid tic-container">
                <div class="row tic-row">
                    <div class="col-4 tic-box" onClick={getplay} id="4"> 1 </div>
                    <div class="col-4 tic-box" onClick={getplay} id="9"> 2 </div>
                    <div class="col-4 tic-box" onClick={getplay} id="2"> 3 </div>
                </div>
                <div class="row tic-row">
                    <div class="col-4 tic-box" onClick={getplay} id="3">4</div>
                    <div class="col-4 tic-box" onClick={getplay} id="5">5 </div>
                    <div class="col-4 tic-box" onClick={getplay} id="7">6 </div>
                </div>
                <div class="row tic-row">
                    <div class="col-4 tic-box" onClick={getplay} id="8"> 7</div>
                    <div class="col-4 tic-box" onClick={getplay} id="1"> 8</div>
                    <div class="col-4 tic-box" onClick={getplay} id="6"> 9</div>
                </div>
                </div>
            </div>
            <div class="col-12 col-sm-2 tic-panel"> PANEL-THINGY<br/>Score:<br/>Foo bar: stuff<br/> Reset game and all that blank </div>
             <div class="col-12 col-sm-2 ads"> ads </div>
             <div class="col-12 col-sm-2 ads"> {count} </div>
         </div>
  </div>
      </>
	);

};

export default Tictactoe;
