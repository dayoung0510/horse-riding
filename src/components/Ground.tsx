import React from 'react';
import { horses } from 'App/datas';
import {
  GroundDiv,
  GoalLine,
  HorseLine,
  HorseGrid,
  Horse,
} from 'components/styles';

const Ground: React.FC = () => {
  return (
    <>
      <GroundDiv>
        <GoalLine>GOAL</GoalLine>

        <HorseLine>
          {horses.map((horse) => {
            return (
              <HorseGrid key={horse.id}>
                <Horse bg={horse.color} bt={0}>
                  {horse.name}
                </Horse>
              </HorseGrid>
            );
          })}
        </HorseLine>
      </GroundDiv>
    </>
  );
};

export default Ground;
