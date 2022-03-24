import * as React from "react";

export interface IAppContext {
  name: string;
  age: number;
  setName: (name: string) => void;
}

export const contextDefaultValues: IAppContext = {
  name: "John Doe",
  age: 30,
  setName: (name: string) => {},
};
export const AppContext = React.createContext<IAppContext | null>(
  contextDefaultValues
);
