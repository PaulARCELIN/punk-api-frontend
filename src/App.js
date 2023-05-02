import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import Details from './components/Details/Details';
import { getBeerList } from './services/api';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'


function App() {

  const [beerList, setBeerList] = useState({})


  useEffect(() => {
    initData()
  }, [])

  async function initData() {
    const data = await getBeerList()
    setBeerList(data)
  }

  function dataEmptyCheck(data) {
    return Object.keys(data).length === 0 && data.constructor === Object;
  }

  if(dataEmptyCheck(beerList))
    return (<div className='App'>
      <Error />
    </div>)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<CardList data={beerList}/>}>
          </Route>
          <Route exact path="/" element={<Navigate to="/home" />}></Route>
          <Route exact path='/beer/*' element={<Details />}></Route>
          <Route exact path="/random" element={<Details />}></Route>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
