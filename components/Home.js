import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import styles from '../styles';

export default class Home extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'http://www.newsshare.in/wp-content/uploads/2017/05/Nature-Wallpaper-iPhone-6.jpg',
          }}
          style={styles.homeImg}
        >
          <Button
            primary
            style={{ marginTop: 10 }}
            full
            rounded
            onPress={() => {
              navigation.navigate('DiaryIntro');
            }}
          >
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
              Gratitude Diary
            </Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }
}
