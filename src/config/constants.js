/*
  URL: 10.0.2.2 -> localhost do emulador, então equivale a colocar no browser: 
    localhost:8000/visualizar-alimentos

  header: Para recuperar em JSON, é necessário colocar o Accept: application/json (content negotiation)

  PS: Recomendo mudar a estrutura do servidor para ao invés de renderizar a aplicação nele,
    fazer o mesmo retornar somente json e criar um cliente web que consome ele
    (em react ou vue.js[Seria bom fazer em vue pra se preparar pro estágio né])
*/

export const URL = 'http://10.0.2.2:8000/visualizar-alimentos';
export const header = {
  Accept: 'application/json'
};
