import React, { createContext } from 'react';

export type ParticipantsInfoType = {
  id: number;
  name: string;
  assets: number;
};
export type ParticipantsType = ParticipantsInfoType[];

export type BettingInfoType = {
  bettingPerson: string;
  bettingHorse: number;
  bettingMoney: number;
};
export type BettingType = BettingInfoType[];

export type GameStateType = {
  speedDistribution: number[];
  isOngoing: boolean;
  winnerHorse: string;
};

export type GameContextProps = {
  participants: ParticipantsType;
  setParticipants: React.Dispatch<React.SetStateAction<ParticipantsType>>;
  bet: BettingType;
  setBet: React.Dispatch<React.SetStateAction<BettingType>>;
  state: GameStateType;
  setState: React.Dispatch<React.SetStateAction<GameStateType>>;
  ClickStart: () => void;
  position: number;
  setPosition: (position: number) => void;
};

export const participantsValues = {
  id: 0,
  name: '',
  assets: 100000,
};

export const defaultValues = {
  speedDistribution: [],
  isOngoing: false,
  winnerHorse: '',
};

export const bettingValues = {
  bettingPerson: '',
  bettingHorse: 0,
  bettingMoney: 0,
};

export const GameContext = createContext<GameContextProps>({
  participants: [],
  setParticipants: () => {},
  bet: [],
  setBet: () => {},
  state: defaultValues,
  setState: () => {},
  ClickStart: () => {},
  position: 0,
  setPosition: () => {},
});
