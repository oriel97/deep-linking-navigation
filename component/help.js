import {Text, View} from 'react-native';
import React from 'react';

interface IProps {
  navigation: Navigator;
  route: any;
}

const Help: React.FunctionComponent<IProps> = ({route, navigation}) => {
  const {id, name, color, textColor} = route.params || {};

  return (
    <View
      style={{
        backgroundColor: color ? color : 'black',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: textColor ? textColor : 'white',
          alignSelf: 'center',
        }}>
        {`my name is: ${name ? name : 'default name'}\n and my id is: ${
          id ? id : ' default id'
        }`}
      </Text>
    </View>
  );
};

export default Help;
