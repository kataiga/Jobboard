import React from 'react';

const SampleContext = React.createContext<any>({} as any);

const SampleProvider = ({ children }: { children: JSX.Element }): JSX.Element => {

  return <SampleContext.Provider value={{null: null}}>{children}</SampleContext.Provider>;
};

const useSampleContext = (): any => {
  return React.useContext(SampleContext);
};

export { SampleProvider, useSampleContext };