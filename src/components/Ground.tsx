import React, { useContext } from 'react';
import { horses, people } from 'App/datas';
import { GroundDiv, GoalLine, HorseLine, HorseGrid } from 'components/styles';
import Horse from 'components/Horse';
import { GameContext } from 'App/context';

const Ground: React.FC = () => {
  const { bet, state, participants, setParticipants, position } =
    useContext(GameContext);

  if (position === 9) {
    const WinnerHorse = state.speedDistribution.indexOf(0);

    bet.map((b, idx) => {
      const BeforeAsset = participants[idx].assets;

      console.log('1', people[idx].assets);
      if (Number(b.bettingHorse) === WinnerHorse) {
        return BeforeAsset + 8;
      }
      console.log('2', people[idx].assets);

      return BeforeAsset - b.bettingMoney;
    });
  }

  console.log(participants);

  return (
    <>
      <GroundDiv>
        <GoalLine>GOAL</GoalLine>
        <HorseLine>
          {horses.map((horse) => {
            const speedArrIdx = state.speedDistribution[horse.id];

            return (
              <HorseGrid key={horse.id}>
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
