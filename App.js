import React, {useState, useEffect} from 'react';
import { Text, StyleSheet } from 'react-native';
import Axios from 'axios';
import { Button } from 'native-base';
import User from './components/User';

const App = () => {

  const [details, setDetails] = useState(null)
  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get('https://randomuser.me/api');
      const details = data.results[0];

      
      setDetails(details);


    } catch (error) {
      console.error(error)
    }
    useEffect(() => {
      fetchDetails()
      
    }, [])

    if (!details) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <View>
            <User details={detail}/>
            <Button
              rounded
              style={styles.button}
            onPress={() => fetchDetails()}>
              <Text>New user</Text>
            </Button>
          </View>
        </View>
      );
    }

  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22831',

  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,

  }
})