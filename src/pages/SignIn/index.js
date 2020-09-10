import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { api } from '../../services';

export default function SignIn() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = useCallback(async () => {
    
    try {
      const auth = { usuario, password };
      const response = await api.post('/auth/login', auth);
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }, []);
  

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.divLogo}>
        <Image
          style={styles.logo}
          source={require('../../../assets/Mind-Branco.png')}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Insira seu E-mail ou CPF"
          autoCorrect={false}
          style={styles.input}
          onChangeText={text => setUsuario(text)}
        />

        <TextInput
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry
          style={styles.input}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity onPress={handleSignIn} style={styles.btnEntrar}>
          <Text style={styles.btnTextEntrar}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastro}>
          <Text style={styles.btnTextCadastro}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  divLogo: {
    backgroundColor: '#191919',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#dddd',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 20,
    borderRadius: 7,
    padding: 15,
  },
  btnEntrar: {
    backgroundColor: '#2BAE66FF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnTextEntrar: {
    color: '#fff',
    fontSize: 20,
  },
  btnCadastro: {
    marginTop: 15,
  },
  btnTextCadastro: {
    color: '#0063B2FF',
    fontSize: 18,
  },
})