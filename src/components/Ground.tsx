import React, { useContext, useEffect } from 'react';
import { horses, people, speeds } from 'App/datas';
import { GroundDiv, GoalLine, HorseLine, HorseGrid } from 'components/styles';
import Horse from 'components/Horse';
import { GameContext } from 'App/context';

const Ground: React.FC = () => {
  const { position, state, setState } = useContext(GameContext);

  const AfterRiding = state.speedDistribution.indexOf(0);

  // state에 1등말 넣어줌
  useEffect(() => {
    setState((prev) => {
      return { ...prev, winnerHorse: AfterRiding };
    });
  }, [AfterRiding, setState, state.winnerHorse]);

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
