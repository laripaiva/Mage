import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { URL, header } from '../config/constants';
import axios from 'axios';

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
