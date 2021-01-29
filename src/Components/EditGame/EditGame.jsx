import React from 'react';
import './EditGame.css';
import ExGame from './ExGame/ExGame.jsx';
import api from './../../api/api.js';

class EditGame extends React.Component{
  state = {
    name: '',
    data: []
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleFindGames = async () => {
    try {
      const data = await api.game.get_games_edit({name: this.state.name});
      this.setState({
        data: data.data
      });
    } catch(error){
      console.log(error);
    }
  }

  render(){
    const gamesList = this.state.data.map((el, index) =>
      <ExGame
        game_id={el._id}
        key={index}
        name={el.name}
        image1={el.image1}
        image2={el.image2}
        image3={el.image3}
        game_url={el.game_url}
        video={el.video}
        description={el.description}
        requirements={el.requirements}
        genres={el.genres}
        language={el.language}
        release_date={el.release_date}
        publisher={el.publisher}
        developer={el.developer}
        region={el.region}
      />)
    return(
      <React.Fragment>
        <div className="admin_game--search">
          <input type="text" name="name" placeholder="Игра" onChange={this.handleChange}/>
          <button onClick={this.handleFindGames}>Искать</button>
        </div>
        <ul id="game_list_edit">
          {gamesList}
        </ul>
      </React.Fragment>
    );
  }
}


export default EditGame;
