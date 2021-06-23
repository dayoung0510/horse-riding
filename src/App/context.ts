import React, { createContext } from 'react';

export type BettingInfoType = {
  bettingPerson: string;
  bettingHorse: string;
  bettingMoney: number;
};

export type BettingType = BettingInfoType[];

export type GameStateType = {
  speedDistribution: number[];
  isOngoing: boolean;
};

export type GameContextProps = {
  bet: BettingType;
  setBet: React.Dispatch<React.SetStateAction<BettingType>>;
  state: GameStateType;
  setState: React.Dispatch<React.SetStateAction<GameStateType>>;
  SpeedShuffle: () => void;
  position: number;
  setPosition: (position: number) => void;
};

export const defaultValues = {
  speedDistribution: [],
  isOngoing: false,
};

export const bettingValues = {
  bettingPerson: '',
  bettingHorse: '',
  bettingMoney: 0,
};

export const GameContext = createContext<GameContextProps>({
  bet: [],
  setBet: () => {},
  state: defaultValues,
  setState: () => {},
  SpeedShuffle: () => {},
  position: 0,
  setPosition: () => {},
});
