import * as Cookies from 'js-cookie';

export default function({store, redirect}){
  // console.log(ctx);
  let user = Cookies.get('user');
  let token = Cookies.get('token');

  console.log(store.state.token);
}