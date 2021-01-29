import axios from 'axios';

export default {
  admin:{
    login: data => axios.get('/admin', {params: {...data}})
  },
  game:{
    get_games_edit: data => axios.get('/admin/game', {params: {...data}}),
    add_game: data => axios.post('/admin/game', data),
    update_game: data => axios.put('/admin/game', data),
    delete_game: data => axios.delete('/admin/game', {params: {...data}}),
    add_key: data => axios.post('/admin/key', data)
  },
  product:{
    search_game_add_product: data => axios.get('/admin/product', {params: {...data}}),
    add_product: data => axios.post('/admin/product', data),
    get_weekly_check: () => axios.get('/admin/product/weekly_check'),
    check_product: data => axios.post('/admin/product/weekly_check', data),
    overdue_product: data => axios.post('/admin/product/overdue_products', data),
    get_overdue_products: () => axios.get('/admin/product/overdue_products'),
    update_product: data => axios.put('/admin/product', data),
    delete_product: data => axios.delete('/admin/product',  {params: {...data}})
  }
};
