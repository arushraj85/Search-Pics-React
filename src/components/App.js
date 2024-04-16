import React from 'react'
import SearchBar from './SearchBar'
import unsplash from '../Api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state={images: []};//here we are setting image value as empty error if we have set it to null it will end up returning error when we try to access it's value
   onSearchSubmit=async (term)=>{
   const response=await unsplash.get('/search/photos',{
      params:{query: term},
      

    });
      this.setState({images: response.data.results});//now here we are setting up state which will show us data which is fetched by axios
  }
  render(){
    return (
    <div className='ui container' style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found:{this.state.images.length} images  */}
         {/* This will return number of images on screen that is length of  our array */}
         <ImageList images={this.state.images} />
       
    </div>
  );
}
}

 export default App
