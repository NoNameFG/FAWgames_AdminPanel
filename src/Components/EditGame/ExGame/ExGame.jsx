import React from 'react';
import api from './../../../api/api.js';

class ExGame extends React.Component{
  state = {
    genresFlag: true,
    activeFlag: false,
    data: {
      genres: []
    }
  }

  componentDidMount(){
    this.setState({
      release_date: this.props.release_date.substr(0, 10),
      _id: this.props.game_id,
      data: {
        ...this.state.data,
        genres: this.props.genres
      }
    });
  }

  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  handleReqChange = e => {
    this.setState({
      dataReq: {
        ...this.state.dataReq,
        [e.target.name]: e.target.value
      }
    });
  }

  upload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    let name = e.target.name;
    reader.onloadend = () => {
      this.setState({
        data: {
          ...this.state.data,
          [name]: reader.result
        }
      });
    }
    reader.readAsDataURL(file);
    e.target.value = null;
  }

  handleFlagChange = () => {
    this.setState({
      activeFlag: !this.state.activeFlag
    })
  }

  handleGenresChange = e => {
    let arr;
    if(e.target.checked){
      arr = this.state.data.genres.map(el => el).concat(e.target.name);
    } else{
      arr = this.state.data.genres.map(el => el).filter(el => el !== e.target.name);
    }
    this.setState({
      data: {
        ...this.state.data,
        genres: arr
      }
    });
  }

  thisGenresCheckValue = name => {
    return this.props.genres.includes(name);
  }

  handleUpdateGame = async () => {
    try {
      await api.game.update_game({
        game_id: this.props.game_id,
        game: this.state.data,
        gameRequirements: this.state.dataReq
      });
    } catch (error){
      console.log(error);
    }
  }

  handleDeleteGame = async () => {
    try {
      await api.game.delete_game({
        game_id: this.props.game_id
      });
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    const data = this.props;
    return(
      <li>
        <div className="game_button" onClick={this.handleFlagChange}>{data.name}</div>
        <div className={`game_edit${this.state.activeFlag ? ' active' : ''}`}>
          <div>
            Название игры
            <input type="text" name="name" defaultValue={data.name} onChange={this.handleChange}/>
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
            <input type="text" name="game_url" defaultValue={data.game_url} onChange={this.handleChange}/>
          </div>
          <div>
            Ссылка на видео
            <input type="text" name="video" defaultValue={data.video} onChange={this.handleChange}/>
          </div>
          <div>
            Описание
            <textarea name="description" defaultValue={data.description} onChange={this.handleChange}></textarea>
          </div>
          <div>
            Процессор
            <input type="text" name="processor" defaultValue={data.requirements.processor} onChange={this.handleReqChange}/>
          </div>
          <div>
            Оперативная память
            <input type="text" name="ram" defaultValue={data.requirements.ram} onChange={this.handleReqChange}/>
          </div>
          <div>
            Видеокарта
            <input type="text" name="video_card" defaultValue={data.requirements.video_card} onChange={this.handleReqChange}/>
          </div>
          <div>
            Место на диске
            <input type="text" name="disk_space" defaultValue={data.requirements.disk_space} onChange={this.handleReqChange}/>
          </div>
          <div className="genres_block">
            Жарны
            <div>
              <input type="checkbox" name="arcade" defaultChecked={this.thisGenresCheckValue('arcade')} onChange={this.handleGenresChange}/>
              arcade
            </div>
            <div>
              <input type="checkbox" name="strategy" defaultChecked={this.thisGenresCheckValue('strategy')} onChange={this.handleGenresChange}/>
              strategy
            </div>
            <div>
              <input type="checkbox" name="shooter" defaultChecked={this.thisGenresCheckValue('shooter')} onChange={this.handleGenresChange}/>
              shooter
            </div>
            <div>
              <input type="checkbox" name="RPG" defaultChecked={this.thisGenresCheckValue('RPG')} onChange={this.handleGenresChange}/>
              RPG
            </div>
            <div>
              <input type="checkbox" name="racing" defaultChecked={this.thisGenresCheckValue('racing')} onChange={this.handleGenresChange}/>
              racing
            </div>
            <div>
              <input type="checkbox" name="casual" defaultChecked={this.thisGenresCheckValue('casual')} onChange={this.handleGenresChange}/>
              casual
            </div>
            <div>
              <input type="checkbox" name="horror" defaultChecked={this.thisGenresCheckValue('horror')} onChange={this.handleGenresChange}/>
              horror
            </div>
            <div>
              <input type="checkbox" name="survival" defaultChecked={this.thisGenresCheckValue('survival')} onChange={this.handleGenresChange}/>
              survival
            </div>
            <div>
              <input type="checkbox" name="action" defaultChecked={this.thisGenresCheckValue('action')} onChange={this.handleGenresChange}/>
              action
            </div>
            <div>
              <input type="checkbox" name="fighting" defaultChecked={this.thisGenresCheckValue('fighting')} onChange={this.handleGenresChange}/>
              fighting
            </div>
            <div>
              <input type="checkbox" name="adventure" defaultChecked={this.thisGenresCheckValue('adventure')} onChange={this.handleGenresChange}/>
              adventure
            </div>
            <div>
              <input type="checkbox" name="roguelike" defaultChecked={this.thisGenresCheckValue('roguelike')} onChange={this.handleGenresChange}/>
              roguelike
            </div>
            <div>
              <input type="checkbox" name="steampunk" defaultChecked={this.thisGenresCheckValue('steampunk')} onChange={this.handleGenresChange}/>
              steampunk
            </div>
            <div>
              <input type="checkbox" name="sport" defaultChecked={this.thisGenresCheckValue('sport')} onChange={this.handleGenresChange}/>
              sport
            </div>
            <div>
              <input type="checkbox" name="simulator" defaultChecked={this.thisGenresCheckValue('simulator')} onChange={this.handleGenresChange}/>
              simulator
            </div>
            <div>
              <input type="checkbox" name="coop" defaultChecked={this.thisGenresCheckValue('coop')} onChange={this.handleGenresChange}/>
              coop
            </div>
            <div>
              <input type="checkbox" name="battleroyale" defaultChecked={this.thisGenresCheckValue('battleroyale')} onChange={this.handleGenresChange}/>
              battleroyale
            </div>
          </div>
          <div>
            Языки
            <input type="text" name="language" defaultValue={data.language} onChange={this.handleChange}/>
          </div>
          <div>
            Дата выхода
            <input type="date" name="release_date" defaultValue={this.state.release_date} onChange={this.handleChange}/>
          </div>
          <div>
            Издатель
            <input type="text" name="publisher" defaultValue={data.publisher} onChange={this.handleChange}/>
          </div>
          <div>
            Разработчик
            <input type="text" name="developer" defaultValue={data.developer} onChange={this.handleChange}/>
          </div>
          <div>
            Регион (данную игру можно активировать на територии)
            <input type="text" name="region" defaultValue={data.region} onChange={this.handleChange}/>
          </div>
          <div>
            <input type="button" value="Удалить игру" onClick={this.handleDeleteGame}/>
            <input type="button" value="Сохранить изменения" onClick={this.handleUpdateGame}/>
          </div>
        </div>
        <div className="res16x9">
          <img src={this.state.data.image1 ? this.state.data.image1 : data.image1} alt="#"/>
        </div>
        <div className="res9x16">
          <img src={this.state.data.image2 ? this.state.data.image2 : data.image2} alt="#"/>
        </div>
        <div className="template_img">
          <img src={this.state.data.image3 ? this.state.data.image3 : data.image3} alt="#"/>
        </div>
      </li>
    );
  }
}

export default ExGame;
