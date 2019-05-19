import React, { useEffect, useState, Component } from "react";
import { View, Text } from "react-native";
// import { URL, header } from "./config/constants";
import axios from "axios";

//Fiz isso aqui com Hooks. Hooks é um conceito novo no react, onde componentes
//De funções podem lidar com estados. Mais em baixo, você pode ver o equivalente em classe
//(Como da pra perceber, Hooks torna bem menos verboso o codigo)
export default props => {
  const [api, updateApi] = useState("Carregando dados...");

  useEffect(() => {
    axios
      .get("http://10.0.2.2:8000/visualizar-alimentos", {
        headers: { Accept: "application/json" }
      })
      .then(data => {
        updateApi(data.data);
        const dados = JSON.parse(data.data);
        console.log("DATA -------------", data.data);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);

  const dataaa = JSON.stringify(api);
  var quant = Object.keys(dataaa);
  return (
    <View>
      <Text>{dataaa}</Text>
      {/* <Text>{this.state.meusProdutos}</Text> */}
    </View>
  );
};

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       api: "API should appear here!"
//     };
//   }
//   componentDidMount() {
//     axios
//       .get(URL, { headers: { Accept: "application/json" } })
//       .then(data => {
//         this.setState({ api: data.data });
//       })
//       .catch(e => {
//         console.log(e.message);
//       });
//   }
//   render() {
//     return (
//       <View>
//         <Text>{JSON.stringify(this.state.api)}</Text>
//         <Text>{this.state.data.nome}</Text>
//       </View>
//     );
//   }
// }
