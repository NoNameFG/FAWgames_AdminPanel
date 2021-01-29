import React from 'react';
import { withRouter } from 'react-router-dom';
import './AdminPanel.css';

class AdminPanel extends React.Component{
  render(){
    return(
      <div className="admin_panel">
        <div className="admin_panel--game">
          <button onClick={() => {
            this.props.history.push(`${this.props.history.location.pathname}/add_game`)
          }}>Добавление игры</button>
        </div>
        <div className="admin_panel--game">
          <button onClick={() => {
            this.props.history.push(`${this.props.history.location.pathname}/edit_game`)
          }}>Редактирование игры</button>
        </div>
        <div className="admin_panel--product">
          <button onClick={() => {
            this.props.history.push(`${this.props.history.location.pathname}/add_product`)
          }}>Добавление продукта</button>
        </div>
        <div className="admin_panel--expired_product">
          <button onClick={() => {
            this.props.history.push(`${this.props.history.location.pathname}/overdue_products`)
          }}>Просроченные продукты</button>
        </div>
        <div className="admin_panel--weekly_check">
          <button onClick={() => {
            this.props.history.push(`${this.props.history.location.pathname}/weekly_check`)
          }}>Еженедельная проверка</button>
        </div>
        <div className="admin_panel--add_key">
          <button onClick={() => {
            this.props.history.push(`${this.props.history.location.pathname}/add_key`)
          }}>Добавить ключ</button>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminPanel);
