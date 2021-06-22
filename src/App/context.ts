import React, { createContext } from 'react';

export type BettingType = {
  bettingPerson: string;
  bettingHorse: string;
  bettingMoney: number;
  speedDistribution: number[];
  isOngoing: boolean;
};

export type GameContextProps = {
  state: BettingType;
  setState: React.Dispatch<React.SetStateAction<BettingType>>;
  SpeedShuffle: () => void;
  position: number;
  setPosition: (position: number) => void;
};

export const defaultValues = {
  bettingPerson: '',
  bettingHorse: '',
  bettingMoney: 0,
  speedDistribution: [],
  isOngoing: false,
};

export const GameContext = createContext<GameContextProps>({
  state: defaultValues,
  setState: () => {},
  SpeedShuffle: () => {},
  position: 0,
  setPosition: () => {},
});
