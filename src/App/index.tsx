import React, { useState, useEffect } from 'react';
import Base from 'components/Base';
import { horses } from 'App/datas';
import { GameContext, BettingType, defaultValues } from 'App/context';
import './index.css';

function App() {
  const [state, setState] = useState<BettingType>(defaultValues);

  // 말 스피드 섞기위한 셔플
  const speedShuffle = () => {
    setState((prevState) => {
      const arr = horses.map((horse) => {
        return horse.id;
      });
      let currentIdx = arr.length;
      while (currentIdx !== 0) {
        const randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx -= 1;
        [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]];
      }
      return { ...prevState, speedDistribution: arr };
    });
  };

  return (
    <div className="App">
      <GameContext.Provider value={{ state, setState, speedShuffle }}>
        <Base />
      </GameContext.Provider>
    </div>
  );
}

export default App;
