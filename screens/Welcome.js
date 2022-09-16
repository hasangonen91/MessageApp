import React , { Component }from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Animated,
} from 'react-native';

import { BlurView } from 'expo-blur';

class ImageLoader extends Component {
    state = {
      opacity: new Animated.Value(0),
    }
  
    onLoad = () => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    }
  
    render() {
      return (
        <Animated.Image
          onLoad={this.onLoad}
          {...this.props}
          style={[
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  })
                },
              ],
            },
            this.props.style,
          ]}
        />
      );
    }
  }

const Welcome = ({navigation}) => {
  const {height} = Dimensions.get('window');
  return (
    <>
        <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <ImageLoader
            source={{
              uri: 'https://i.pinimg.com/originals/62/44/3d/62443df70f4d745953dbae0214825a99.jpg',
            }}
            style={{
              width: '95%',
              height: (height / 3) * 1.4,
              borderRadius: 16,
              marginBottom: 40,
              borderWidth: 2,
             
              
             
            }}
          />
          
          <View style={styles.contentContainer}>
          <BlurView intensity={100} style={styles.blurContainer}>
            <Text style={styles.title}>Message App</Text>
            <Text style={styles.title}>Let's Go</Text>
            <Text style={styles.body}>
            It's time to text, let's start right now
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
              style={styles.button1}  
              onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.buttonsText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.button2}>
                <Text style={styles.buttonsText}>Login</Text>
              </TouchableOpacity>
            </View>
            </BlurView>
            </View>
     
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B6D0E2',
    padding: 5,
  },
  contentContainer: {
    paddingHorizontal: 0,
    backgroundColor: '#ADD8E6',
    borderRadius: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 45,
    textAlign: 'center',
    color: '#353147',
  },
  body: {
    paddingTop: 0,
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '400',
    textAlign: 'center',
    color: '#353147',
  },
  buttonsText: {
    fontWeight: '500',
    color: 'white',
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1F51FF',
    padding: 16,
    borderRadius: 6,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 13,
    borderTopLeftRadius:13,
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0096FF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 13,
    borderTopRightRadius: 13,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
    backgroundColor: '#DFE3E630',
    marginTop: 40,
  
  },
  blurContainer: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'white',
    width: '100%',
    padding: 20,
    backgroundColor: 'red',
    
    
   
  },
});