import React, { useEffect, useState, Component } from 'react';
import { View, Text } from 'react-native';
import { URL, header } from '../config/constants';
import axios from 'axios';

//Fiz isso aqui com Hooks. Hooks é um conceito novo no react, onde componentes
//De funções podem lidar com estados. Mais em baixo, você pode ver o equivalente em classe
//(Como da pra perceber, Hooks torna bem menos verboso o codigo)
export default props => {
  const [api, updateApi] = useState('API should appear here!');

  useEffect(() => {
    axios
      .get(URL, { headers: { Accept: 'application/json' } })
      .then(data => {
        updateApi(data.data);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);
  return (
    <View>
      <Text>{JSON.stringify(api)}</Text>
    </View>
  );
};

/*
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: 'API should appear here!'
    };
  }

  componentDidMount() {
    axios
      .get(URL, { headers: { Accept: 'application/json' } })
      .then(data => {
        this.setState({ api: data.data });
      })
      .catch(e => {
        console.log(e.message);
      });
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.api)}</Text>
      </View>
    );
  }
}
*/
