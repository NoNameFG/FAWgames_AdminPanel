import React from 'react';
import './AddProduct.css';
import api from './../../api/api.js';
import GameName from './GameName/GameName.jsx';

class AddProduct extends React.Component {
  state = {
    games: [],
    searchGameName: '',
    currentGame: {},
    productData: {
      main_product: false,
      preoder: false
    }
  }

  handleChange = e => {
    this.setState({
      productData: {
        ...this.state.productData,
        [e.target.name]: e.target.value
      }
    })
  }

  handleCheckboxChange = e => {
    this.setState({
      productData: {
        ...this.state.productData,
        [e.target.name]: e.target.checked
      }
    })
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

  handleAddProduct = async () => {
    try {
      await api.product.add_product({
        ...this.state.productData,
        game_id: this.state.currentGame._id,
        release_date: this.state.currentGame.release_date
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

          <div className="add_product">
            <div>Название игры:<span>{this.state.currentGame.name}</span></div>
            <div>
              ID товара(с сайта)
              <input type="text" name="product_id" onChange={this.handleChange}/>
            </div>
            <div>
              Название товара(придумать своё)
              <input type="text" name="product_name" onChange={this.handleChange}/>
            </div>
            <div>
              Предзаказ
              <input type="checkbox" name="preoder" onChange={this.handleCheckboxChange}/>
            </div>
            <div>
              Основной товар для игры
              <input type="checkbox" name="main_product" onChange={this.handleCheckboxChange}/>
            </div>
            <div className="dist_radio">
              Дистрибьютор
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="Steam"/>Steam</label>
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="Origin"/>Origin</label>
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="Battle.net"/>Battle.net</label>
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="Uplay"/>Uplay</label>
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="Epic Games Store"/>Epic Games Store</label>
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="Rockstar Social Club"/>Rockstar Social Club</label>
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="Windows Store"/>Windows Store</label>
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="GOG.com"/>GOG.com</label>
              <label><input onChange={this.handleChange} type="radio" name="distributor" value="Bethesda.net"/>Bethesda.net</label>
            </div>
            <div><button onClick={this.handleAddProduct}>Добавить</button></div>
          </div>
        </React.Fragment>
    );
  }
}

export default AddProduct;
