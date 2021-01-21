import Api from './api';

export default {
  checkToken: async (token) => {
    console.log('Token');
    console.log(token);
    return JSON.stringify({response: 'certo', token: 'teste'});
  },
  Logar: async (email, senha) => {
    console.log('Logar');
    console.log(email);
    console.log(senha);
    return JSON.stringify({response: '', token: 'teste'});
  },
  CadastrarUsuario: async (Usuario) => {
    console.log('Registra usuario');
    console.log(Usuario);
    return JSON.stringify({response: 'cadastrado', token: 'teste'});
  },
  // await Api.delete(`users/${this.state.id}`).then((res) => {
  //   console.log(res);
  //   console.log(res.data);
  // });
};
