import React from 'react';
import MainCheck from './MainCheck'
import CountryButton from './CountryButton'
import Table from './Table'

export default function Main(props) {
    
    return (
      <div>
      <MainCheck></MainCheck>
      <CountryButton type={props.type}></CountryButton>
      <Table type={props.type}></Table>
    </div>
    );
  }
  
  
  
  