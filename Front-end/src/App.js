import React, {useEffect, useState} from 'react';
import './App.css';
import SitesList from './components/SitesList.jsx'
import axios from 'axios';

function App() {

  const [sites, setSites] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001')
      .then(response => {
        console.log(response);
        setSites(response.data);
      })
      .catch(err => {
        console.log('error:', err);
      });
  }, []);

  return (
    <div className="App">
      <h1> Welcome Campers </h1>
      <SitesList sites={sites}/>

    </div>
  );
}

export default App;
