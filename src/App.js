import React, { Component } from 'react';
import axios from 'axios';
import Art from './Art';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      art: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    axios({
      method:'GET',
      url:'https://www.rijksmuseum.nl/api/en/collection/',
      params:{
        key:'0IM9KPlr',
        format:'json'
      }
    }).then((response)=>{
      response=response.data.artObjects;
      this.setState({
        art:response,
        isLoading:false
      })
    })
  }

  render() {
    return (
      <div className='App'>
        { this.state.isLoading ? <p>loading...</p>:
          //making a function component as opposed to a class component. (basically turning this into a JS function)
          this.state.art.map((item)=>{
            return (
              <Art
                key={item.id}
                imgUrl={item.webImage.url} 
                title={item.title}
                longTitle={item.longTitle}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
