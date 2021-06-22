import React, { useState, useEffect } from 'react';
import Base from 'components/Base';
import { horses, speeds } from 'App/datas';
import { GameContext, BettingType, defaultValues } from 'App/context';
import './index.css';

function App() {
  const [state, setState] = useState<BettingType>(defaultValues);
  const [position, setPosition] = useState(0);

  // useEffect로 position을 1초에 1씩 올려줌 > 말 달리기
  useEffect(() => {
    const Count = setInterval(() => {
      if (state.isOngoing === true && position < speeds[0].length - 1) {
        setPosition((prevState) => {
          return prevState + 1;
        });
      }
    }, 300);
    return () => {
      clearInterval(Count);
    };
  }, [state.isOngoing, position]);

  // 말 스피드 셔플하고 출발
  const SpeedShuffle = () => {
    setState((prevState) => {
      setPosition(0);
      const arr = horses.map((horse) => {
        return horse.id;
      });
      let currentIdx = arr.length;
      while (currentIdx !== 0) {
        const randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx -= 1;
        [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]];
      }

      const firstPrize = horses[arr.indexOf(0)].name;
      console.log('1등 : ', firstPrize);
      return { ...prevState, isOngoing: true, speedDistribution: arr };
    });
  };

  return (
    <div className="App">
      <GameContext.Provider
        value={{
          position,
          setPosition,
          state,
          setState,
          SpeedShuffle,
        }}
      >
        <Base />
      </GameContext.Provider>
    </div>
  );
}

export default App;
