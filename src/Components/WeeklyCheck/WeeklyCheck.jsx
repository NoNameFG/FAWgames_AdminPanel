import React from 'react';
import './WeeklyCheck.css';
import ProductTempl from './ProductTempl/ProductTempl.jsx';
import api from './../../api/api.js';

class WeeklyCheck extends React.Component{
  state = {
    productList: []
  }

  async componentDidMount(){
    try {
      const data = await api.product.get_weekly_check();
      this.setState({
        productList: data.data
      })
    } catch (error){
      console.log(error);
    }
  }

  render(){
    const productList = this.state.productList.map((el, index) =>
      <ProductTempl
        key={index}
        {...el}
      />
    );
    return(
      <React.Fragment>
        <div className="weekly_check">
          <div>ID товара</div>
          <div>Дистрибьютор</div>
          <div>Название</div>
          <div>Основной товар</div>
          <div>Цена в руб.</div>
          <div>Чекнуто</div>
          <div>Отправить в просрочку</div>
        </div>
        {productList}
      </React.Fragment>
    );
  }
}

export default WeeklyCheck;
