import { useState, useEffect } from 'react';
import Base from 'components/Base';
import { horses, speeds, people } from 'App/datas';
import {
  GameContext,
  GameStateType,
  defaultValues,
  BettingType,
  bettingValues,
  ParticipantsType,
  participantsValues,
} from 'App/context';
import './index.css';

function App() {
  const [state, setState] = useState<GameStateType>(defaultValues);
  const [position, setPosition] = useState(0);

  const [bet, setBet] = useState<BettingType>([
    bettingValues,
    bettingValues,
    bettingValues,
  ]);
  const [participants, setParticipants] = useState<ParticipantsType>(people);

  console.log(participants);

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

  const ClickStart = () => {
    setState((prevState) => {
      setPosition(0);

      // 말 스피드 셔플
      const arr = horses.map((horse) => {
        return horse.id; // arr=[0,1,2,3,4]
      });
      let currentIdx = arr.length;
      while (currentIdx !== 0) {
        const randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx -= 1;
        [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]];
      }

      return { ...prevState, isOngoing: true, speedDistribution: arr };
    });
  };

  return (
    <div className="App">
      <GameContext.Provider
        value={{
          participants,
          setParticipants,
          bet,
          setBet,
          position,
          setPosition,
          state,
          setState,
          ClickStart,
        }}
      >
        <Base />
      </GameContext.Provider>
    </div>
  );
}

export default App;
