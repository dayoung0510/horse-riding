import React, { useEffect, useState } from 'react';
import { speeds } from 'App/datas';
import styled, { css, FlattenInterpolation } from 'styled-components';
import { GameContext } from 'App/context';

type Props = {
  bg: string;
  name: string;
  speed?: number;
};

const Shape = styled.div<Props>`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: absolute;
  border-radius: 50%;

  ${({ bg }): FlattenInterpolation<Props> => css`
    background-color: ${bg};
  `}
`;

const Horse: React.FC<Props> = ({ bg, name, speed = 0 }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      if (position < speeds.length) {
        setPosition((prevState) => {
          return prevState + 1;
        });
      }
    }, 1000);
    return () => clearInterval(count);
  }, [position, setPosition]);

  return (
    <>
      {speeds[speed]}
      <Shape
        style={{ bottom: `${speeds[speed][position]}%` }}
        name={name}
        bg={bg}
      >
        {name}
      </Shape>
    </>
  );
};

export default Horse;
