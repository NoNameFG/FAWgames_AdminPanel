import React from 'react';
import api from './../../api/api.js';
import GameName from './../AddProduct/GameName/GameName.jsx';
import './AddKey.css';

class AddKey extends React.Component{
  state = {
    games: [],
    searchGameName: '',
    key_name: '',
    currentGame: {}
  }

  handleSearchField = e => {
    this.setState({
      searchGameName: e.target.value
    })
  }

  handleGameChange = data => {
    this.setState({
      currentGame: data
    });
  }

  handleFindGames = async () => {
    try{
      const data = await api.product.search_game_add_product({
        name: this.state.searchGameName
      })
      this.setState({
        games: data.data
      });
    } catch(error){
      console.log(error);
    }
  }

  handleKeyChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAddKey = async () => {
    try {
      await api.game.add_key({
        key_name: this.state.key_name,
        game_id: this.state.currentGame._id
      });
    } catch (error){
      console.log(error);
    }
  }

  render(){
    const gamesList = this.state.games.map((el, index) =>
      <GameName
        {...el}
        handleGameChange={this.handleGameChange}
        key={index}
      />
    );
    return(
      <React.Fragment>
        <div className="admin_search--product">
          <input type="text" name="admin_search_product" placeholder="Поиск" onChange={this.handleSearchField}/>
          <button onClick={this.handleFindGames}>ПОИСК</button>
        </div>
        <ul>
          {gamesList}
        </ul>
        <div className="add_key">
          <div>Название игры:<span>{this.state.currentGame.name}</span></div>
          <div><input placeholder="Ключ" type="text" name="key_name" onChange={this.handleKeyChange}/></div>
          <button onClick={this.handleAddKey}>Добавить ключ</button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddKey;
