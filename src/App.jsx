/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import { PIXABAY_IMAGE_TYPE, PIXABAY_API } from "./constants/links";


import Card from './components/card/card'

import Search from "./components/search/Search";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  const FULL_PIXABAY_URL = PIXABAY_API+term+PIXABAY_IMAGE_TYPE

  useEffect(()=>{
      fetch(FULL_PIXABAY_URL)
          .then(res => res.json())
          .then(data => {
              setImages(data.hits);
              setIsLoading(false)
          })
          .catch(err=> console.error(err));
  },[term, FULL_PIXABAY_URL]);

  return (
    <div className='max-w-screen-xl my-0 mx-auto'>
      <Search
        searchText={text=> setTerm(text)}
      />

      {!isLoading && images.length ===0 && <h1 className="text-6xl text-center mx-auto mt-32">No images were found</h1> }

      {isLoading?<h1 className="text-6xl text-center mx-auto mt-32">Loading</h1>:<div className="grid grid-cols-3 gap-4">
        {
          images.map(image =>(
            <Card
              key={image.id}
              image={image}
            />
          ))
        }
      </div>
      }
    </div>
  )
}

export default App
