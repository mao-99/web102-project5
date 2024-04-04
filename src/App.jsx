import { fetchData, generateDates, fetchHistoricalData } from "./components/api/api";
import axios from "axios";
import { useState, useEffect } from 'react';
import Index from './components';
import Table from './components/table';
//import Header from './components/header'
import './App.css'

function App() {
  return (
    <>
    <div className='body'>
      <Index />
      <Table/>
    </div>
    </>
  )
}

export default App

