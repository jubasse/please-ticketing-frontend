import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <Text style={styles.header}>Ticketing</Text>
        <View style={styles.outerWrapper}>
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <SimpleLineIcons name={'login'} size={100} color={'purple'} onPress={() => navigation.navigate('Signin')} />
            <Text style={{fontSize: 25}}>Sign in</Text>
          </View>
          
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Ionicons name={'create-outline'} size={100} color={'purple'} onPress={() => navigation.navigate('Signup')}/>
            <Text style={{fontSize: 25}}>Sign up</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styleUser = StyleSheet.create<any>({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10,
});

export default Home;
