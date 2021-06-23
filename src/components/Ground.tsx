import React, { useContext } from 'react';
import { horses, people } from 'App/datas';
import { GroundDiv, GoalLine, HorseLine, HorseGrid } from 'components/styles';
import Horse from 'components/Horse';
import { GameContext } from 'App/context';

const Ground: React.FC = () => {
  const { bet, state, setState, position } = useContext(GameContext);

  // console.log('그라운드에서의 speeddistribution', state.speedDistribution);
  console.log('화면에서보이는일등', state.speedDistribution);

  if (position === 9) {
    const WinnerHorse = state.speedDistribution.indexOf(0);

    bet.map((b, idx) => {
      if (b.bettingHorse === WinnerHorse) {
        return console.log(
          `${people[idx].name}의 자산을 ${b.bettingMoney}만큼 늘립니다.`,
        );
      }
      return console.log(
        `${people[idx].name}의 자산을 ${b.bettingMoney}만큼 줄입니다. ${b.bettingHorse}에 걸었습니다.`,
      );
    });

    console.log(WinnerHorse);
    console.log(state.speedDistribution.indexOf(0));
  }

  return (
    <>
      <GroundDiv>
        {/* <GoalLine>GOAL</GoalLine> */}
        <HorseLine>
          {horses.map((horse) => {
            const speedArrIdx = state.speedDistribution[horse.id];

            return (
              <HorseGrid key={horse.id}>
                {speedArrIdx}
                <Horse bg={horse.color} name={horse.name} speed={speedArrIdx} />
              </HorseGrid>
            );
          })}
        </HorseLine>
      </GroundDiv>
    </>
  );
};

export default Ground;
