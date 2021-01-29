import React from 'react';
import api from './../../../api/api.js';

class ProductTempl extends React.Component{
  handleCheck = async () => {
    try {
      await api.product.check_product({product_id: this.props.product_id});
    } catch (error){
      console.log(error);
    }
  }

  handleOverdue = async () => {
    try {
      await api.product.overdue_product({product_id: this.props.product_id});
    } catch (error){
      console.log(error);
    }
  }

  render(){
    const data = {...this.props};
    return(
      <React.Fragment>
        <div class="weekly_check">
          <div>{data.product_id}</div>
          <div>{data.distributor}</div>
          <div>{data.product_name}</div>
          <div>{data.main_product + ''}</div>
          <div>{data.price_rub} руб.</div>
          <div><button onClick={this.handleCheck}>Чекнуть</button></div>
          <div><button onClick={this.handleOverdue}>Отправить в просрочку</button></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductTempl;
