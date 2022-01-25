import {
  InputLeftAddon,
  Select,
  NativeBaseProvider,
  CheckIcon,
  Center,
  Button,
  Input,
  Text,
} from 'native-base';
import React from 'react';
import {Alert, Linking} from 'react-native';

interface IProps {
  navigation: any;
  id: any;
}

const Home: React.FunctionComponent<IProps> = ({navigation}) => {
  const [clientId, setClient] = React.useState('2065');
  const [areaId, setArea] = React.useState('4028');
  const [locationId, setLocation] = React.useState('4029');
  const [lat, setLat] = React.useState('35.65310291');
  const [lng, setLng] = React.useState('-119.101189111');
  const [locationType, setLocationType] = React.useState(
    'inversion_temperature',
  );
  const goToTechnician = () => {
    Linking.openURL(
      `phytech-technician-app://clients/${clientId}/areas/${areaId}/location-type/${locationType}/location-id/${locationId}/lat/${lat}/lng/${lng}`,
    );
  };

  const handleChange = (event: any, setter) => setter(event.target.value);

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Text fontSize="md">CLIENT ID</Text>
        <Input
          onChange={e => handleChange(e, setClient)}
          value={clientId}
          placeholder="Client Id"
          w={300}
          size="xl"
          mb={5}
        />
        <Text fontSize="md">AREA ID</Text>
        <Input
          onChange={e => handleChange(e, setArea)}
          value={areaId}
          placeholder="Area Id"
          w={300}
          mb={5}
          size="xl"
        />
        <Text fontSize="md">LOCATION TYPE </Text>
        <Select
          selectedValue={locationType}
          minWidth="300"
          placeholder="Location Type"
          mb={5}
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          onValueChange={itemValue => setLocationType(itemValue)}>
          <Select.Item label="Inversion" value="inversion_temperature" />
          <Select.Item label="Location" value="location" />
          <Select.Item label="Logger" value="logger" />
          <Select.Item label="Rain Meter" value="rain_meter" />
          <Select.Item label="Water Counter" value="water_counter" />
        </Select>
        <Text fontSize="md">LOCATION ID</Text>
        <Input
          size="xl"
          onChange={e => handleChange(e, setLocation)}
          value={locationId}
          placeholder="Location Id"
          w={300}
          mb={5}
        />
        <Text fontSize="md">LATITUDE</Text>
        <Input
          size="xl"
          onChange={e => handleChange(e, setLat)}
          value={lat}
          placeholder="Latitude"
          w={300}
          mb={5}
        />
        <Text fontSize="md">LONGITUDE</Text>
        <Input
          size="xl"
          isRequired
          onChange={e => handleChange(e, setLng)}
          value={lng}
          placeholder="Longitude"
          w={300}
          mb={5}
        />

        <Button mt={5} width="300" onPress={goToTechnician}>
          GO TO TECHNICIAN
        </Button>
      </Center>
    </NativeBaseProvider>
  );
};

export default Home;
