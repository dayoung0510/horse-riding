import React, { useContext } from 'react';
import { horses } from 'App/datas';
import { GroundDiv, GoalLine, HorseLine, HorseGrid } from 'components/styles';
import Horse from 'components/Horse';
import { GameContext } from 'App/context';

const Ground: React.FC = () => {
  const { state, setState } = useContext(GameContext);

  // console.log('그라운드에서의 speeddistribution', state.speedDistribution);
  console.log('화면에서보이는일등', state.speedDistribution.indexOf(0));

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
