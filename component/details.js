import {Text, View} from 'react-native';
import React from 'react';

interface IProps {
  navigation: any;
  route: any;
}

const Details: React.FunctionComponent<IProps> = ({navigation, route}) => {
  const {oriel} = route.params;
  return (
    <View>
      <Text>Details+{oriel}</Text>
    </View>
  );
};

export default Details;
