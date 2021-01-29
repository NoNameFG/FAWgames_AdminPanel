import React from 'react';
import './AddGame.css';
import api from './../../api/api.js';

class AddGame extends React.Component{
  state = {
    genres: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleGenresChange = e => {
    if(e.target.checked){
      let arr = this.state.genres.map(el => el).concat(e.target.name);
      this.setState({
        genres: arr
      });
    } else {
      let arr = this.state.genres.map(el => el).filter(el => el !== e.target.name);
      this.setState({
        genres: arr
      });
    }
  }

  upload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    let name = e.target.name;
    reader.onloadend = () => {
      this.setState({
        [name]: reader.result
      });
    }
    reader.readAsDataURL(file);
    e.target.value = null;
  }

  handleSendData = async () => {
    await api.game.add_game(this.state);
  }

  render(){
    return(
      <React.Fragment>
        <div className="res16x9" id="res16x9">
          <img src={this.state.image1} alt="#" />
        </div>
        <div className="res9x16" id="res9x16">
          <img src={this.state.image2} alt="#" />
        </div>
        <div className="template_img" id="template_img">
          <img src={this.state.image3} alt="#" />
        </div>
        <div>
          Название игры
          <input type="text" name="name" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Картинка 1920х1080
          <input type="file" name="image1" accept="image/*" onChange={this.upload}/>
        </div>
        <div>
          Картинка 1080х1920
          <input type="file" name="image2" accept="image/*" onChange={this.upload}/>
        </div>
        <div>
          Картинка для Template
          <input type="file" name="image3" accept="image/*" onChange={this.upload}/>
        </div>
        <div>
          Ссылка на игру
          <input type="text" name="game_url" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Ссылка на видео
          <input type="text" name="video" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Описание
          <textarea name="description" onChange={this.handleChange}>{}</textarea>
        </div>
        <div>
          Процессор
          <input type="text" name="processor" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Оперативная память
          <input type="text" name="ram" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Видеокарта
          <input type="text" name="video_card" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Место на диске
          <input type="text" name="disk_space" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          {/*genres*/}
          Жарны
          <div>
            <input type="checkbox" name="arcade" onChange={this.handleGenresChange}/>
            arcade
          </div>
          <div>
            <input type="checkbox" name="post-apocalyptic" onChange={this.handleGenresChange}/>
            post-apocalyptic
          </div>
          <div>
            <input type="checkbox" name="strategy" onChange={this.handleGenresChange}/>
            strategy
          </div>
          <div>
            <input type="checkbox" name="shooter" onChange={this.handleGenresChange}/>
            shooter
          </div>
          <div>
            <input type="checkbox" name="RPG" onChange={this.handleGenresChange}/>
            RPG
          </div>
          <div>
            <input type="checkbox" name="racing" onChange={this.handleGenresChange}/>
            racing
          </div>
          <div>
            <input type="checkbox" name="casual" onChange={this.handleGenresChange}/>
            casual
          </div>
          <div>
            <input type="checkbox" name="horror" onChange={this.handleGenresChange}/>
            horror
          </div>
          <div>
            <input type="checkbox" name="survival" onChange={this.handleGenresChange}/>
            survival
          </div>
          <div>
            <input type="checkbox" name="action" onChange={this.handleGenresChange}/>
            action
          </div>
          <div>
            <input type="checkbox" name="fighting" onChange={this.handleGenresChange}/>
            fighting
          </div>
          <div>
            <input type="checkbox" name="adventure" onChange={this.handleGenresChange}/>
            adventure
          </div>
          <div>
            <input type="checkbox" name="roguelike" onChange={this.handleGenresChange}/>
            roguelike
          </div>
          <div>
            <input type="checkbox" name="steampunk" onChange={this.handleGenresChange}/>
            steampunk
          </div>
          <div>
            <input type="checkbox" name="sport" onChange={this.handleGenresChange}/>
            sport
          </div>
          <div>
            <input type="checkbox" name="simulator" onChange={this.handleGenresChange}/>
            simulator
          </div>
          <div>
            <input type="checkbox" name="coop" onChange={this.handleGenresChange}/>
            coop
          </div>
          <div>
            <input type="checkbox" name="battleroyale" onChange={this.handleGenresChange}/>
            battleroyale
          </div>
        </div>
        <div>
          Языки
          <input type="text" name="language" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Дата выхода
          <input type="date" name="release_date" onChange={this.handleChange}/>
        </div>
        <div>
          Издатель
          <input type="text" name="publisher" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Разработчик
          <input type="text" name="developer" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          Регион (данную игру можно активировать на територии)
          <input type="text" name="region" autoComplete="off" onChange={this.handleChange}/>
        </div>
        <div>
          <input type="button" value="Добавить" onClick={this.handleSendData}/>
        </div>
      </React.Fragment>
    );
  }
}

export default AddGame;
