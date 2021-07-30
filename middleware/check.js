import * as Cookies from 'js-cookie';

export default function(ctx){
  // console.log(ctx);
  let user = Cookies.get('user');
  let token = Cookies.get('token');

  

  if(!user || !token){
    // ctx.redirect('/login')
  }
}