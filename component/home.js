import {Button, Text, View} from 'react-native';
import React from 'react';

interface IProps {
  navigation: any;
  id: any;
}

const Home: React.FunctionComponent<IProps> = ({navigation}) => {
  return (
    <View>
      <Button title={'press me'} onPress={() => navigation.navigate('Help')} />
    </View>
  );
};

export default Home;
