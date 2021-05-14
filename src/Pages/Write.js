import React from 'react';
import TopBar2 from '../components/TopBar2'
import { Provider } from '../Context';



export default function Home() {

  return (
    <Provider>
      <TopBar2></TopBar2>
      {/* <MainTitle className={classes.mainTitle}></MainTitle> */}
      {/*<MainCheck className={classes.mainCheck}></MainCheck> */}
    </Provider>
  );
}