import React from 'react';
import api from './../../../api/api.js';

class OverdueEx extends React.Component{
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCheckboxChange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  handleUpdateProduct = async () => {
    try {
      await api.product.update_product({
        ...this.state,
        _id: this.props._id
      });
    } catch (error){
      console.log(error);
    }
  }

  handleDeleteProduct = async () => {
    try {
      await api.product.delete_product({
        _id: this.props._id
      })
    } catch (error){
      console.log(error);
    }
  }

  render(){
    const data = this.props;
    return(
      <div className="overdue_product">
        <div><input type="text" className="overdue_input" name="product_id" defaultValue={data.product_id} onChange={this.handleChange}/></div>
        <div><input type="text" className="overdue_input" name="product_name" defaultValue={data.product_name} onChange={this.handleChange}/></div>
        <div>
          <select defaultValue={data.distributor} name="distributor" onChange={this.handleChange}>
            <option value="Steam">Steam</option>
            <option value="Origin">Origin</option>
            <option value="Battle.net">Battle.net</option>
            <option value="Uplay">Uplay</option>
            <option value="Epic Games Store">Epic Games Store</option>
            <option value="Rockstar Social Club">Rockstar Social Club</option>
            <option value="Windows Store">Windows Store</option>
            <option value="GOG.com">GOG.com</option>
            <option value="Bethesda.net">Bethesda.net</option>
          </select>
        </div>
        <div><input type="checkbox" className="overdue_input" name="in_stock" defaultChecked={data.in_stock} onChange={this.handleCheckboxChange}/></div>
        <div><input type="checkbox" className="overdue_input" name="preoder" defaultChecked={data.preoder} onChange={this.handleCheckboxChange}/></div>
        <div><input type="checkbox" className="overdue_input" name="main_product" defaultChecked={data.main_product} onChange={this.handleCheckboxChange}/></div>
        <div><button onClick={this.handleUpdateProduct}>СОХРАНИТЬ</button></div>
        <div><button onClick={this.handleDeleteProduct}>УДАЛИТЬ</button></div>
      </div>
    );
  }
}

export default OverdueEx;
