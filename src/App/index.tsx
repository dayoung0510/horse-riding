import { useState, useEffect } from 'react';
import Base from 'components/Base';
import { horses, speeds, people } from 'App/datas';
import {
  GameContext,
  GameStateType,
  defaultValues,
  BettingType,
  bettingValues,
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

  const InitializeState = () => {};

  // 내 지갑 계산
  const UpdateWallet = (firstPrize: string) => {
    console.log(state);
    // console.log('우승마!', state.speedDistribution.indexOf(0), '번째 말');
    // console.log('before : ', people);
    // // console.log('firstPrize : ', firstPrize);
    // bet.map((b, idx) => {
    //   if (b.bettingHorse === firstPrize) {
    //     console.log(
    //       `${people[idx].name}의 자산을 ${b.bettingMoney}만큼 늘립니다.`,
    //     );
    //     return people[idx].assets + b.bettingMoney;
    //   }
    //   console.log(
    //     `${people[idx].name}의 자산을 ${b.bettingMoney}만큼 줄입니다.`,
    //   );
    //   return people[idx].assets - b.bettingMoney;
    // });
  };

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
      const firstPrize = horses[arr.indexOf(0)].name;

      UpdateWallet(firstPrize);
      console.log('클릭스타트에서의 1등', arr.indexOf(0));

      return { ...prevState, isOngoing: true, speedDistribution: arr };
    });
  };

  return (
    <div className="App">
      <GameContext.Provider
        value={{
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
