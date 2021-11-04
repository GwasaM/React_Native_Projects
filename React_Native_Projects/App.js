import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground
} from 'react-native';

import Bonyeza from './CustomButton/GwaBonyeza';
import Kichwa from './CustomHeader/Header';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState(false);
  const onPressHandler = () =>{
    if(name.length > 4){
      setSubmitted(!submitted);
    }else{
      setWarning(true);
    }
    
  }
  return(
    <ImageBackground 
    style = {styles.body}
    source = {{uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png'}}>

<Kichwa />

<Modal 
visible={warning}
        transparent
        onRequestClose={() =>
          setWarning(false)
        }
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>TAHADHARI!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>Jina latakiwa kuwa na herufi zaidi ya 4</Text>
            </View>
            <Pressable
              onPress={() => setWarning(false)}
              style={styles.warning_button}
              android_ripple={{ color: '#fff' }}
            >
              <Text style={styles.text}>SAWA</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>
        Tafadhali andika jina lako:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='mfano. Abdul'
        onChangeText={(value) => setName(value)}
      />
      <Bonyeza
      onPressFunction = {onPressHandler}
      title = {submitted ? 'Futa' : 'Kusanya'}
      color = {'#4503fc'}
      />
      <Bonyeza
      onPressFunction = {() => { }}
      title = {'Jaribu'}
      color = {'#03fc66'} 
      style = {{margin: 10}}
      />
      {/* <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable> */}
      {
        submitted ?
          <View style={styles.body}>
            <Text style={styles.text}>
              Umesajiliwa kama {name}
            </Text>
            <Image
              style={styles.image}
              source={require('./images/checkicon.webp')}
              resizeMode='stretch'
            />
          </View>
          :
          <Image
            style={styles.image}
            source={{ uri: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png' }}
            resizeMode='stretch'
          />
      }
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    color:'#03fc66',

  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }
});

export default App;
