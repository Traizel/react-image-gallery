import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const getGallery = () => {
    console.log('Getting Gallery..');
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log(response.data)
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(error)
    });
  }
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGallery()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hall of Fame</h1>
      </header>
      <h2>The Legends</h2>
      <GalleryList 
      galleryLists={galleryList}
      getGallery={getGallery}
      />
    </div>
  );
}

export default App;