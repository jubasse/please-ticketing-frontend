import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useAppDispatch } from '../../hooks/redux';
import { signIn } from '../../stores/auth.reducer';
import { signUp } from '../../stores/users.reducer';
import styles from './Signup.style';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }} />
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="username"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
          keyboardType="visible-password"
        />
        <Button
          title="Sign up"
          onPress={() =>
            dispatch(signUp({ username, email, password }))
          }></Button>
      </View>
      <View style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default Signin;
