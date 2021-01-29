import React from 'react';
import api from './../../api/api.js';
import './OverdueProducts.css';
import OverdueEx from './OverdueEx/OverdueEx.jsx';

class OverdueProducts extends React.Component{
  state = {
    overdueList: []
  }

  async componentDidMount(){
    try{
      const data = await api.product.get_overdue_products();
      this.setState({
        overdueList: data.data
      });
    } catch(error){
      console.log(error);
    }
  }

  render(){
    const overdueList = this.state.overdueList.map((el, index) =>
      <OverdueEx
        {...el}
        key={index}
      />
    )
    return(
      <React.Fragment>
        <div className="overdue_product">
          <div>ID товара</div>
          <div>Название</div>
          <div>Дистрибьютор</div>
          <div>В наличии</div>
          <div>Предзаказ</div>
          <div>Основной товар</div>
          <div>Сохранить</div>
          <div>УДАЛИТЬ</div>
        </div>
        {overdueList}
      </React.Fragment>
    );
  }
}

export default OverdueProducts;
