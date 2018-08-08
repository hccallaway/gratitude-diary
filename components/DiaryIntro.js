import React, { Component } from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import styles from '../styles';

class DiaryIntro extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'http://www.portoalegre.travel/upload/b/90/902423_northern-lights-iphone-wallpaper.jpg',
          }}
          style={styles.homeImg}
        >
          <Text style={styles.h4white}>
            Nothing lasts longer than a moment, but few of us take time to
            appreciate things while we can.
          </Text>
          <Text style={styles.h4white}>
            Each day, note moments for which you are grateful. Seeing them
            grouped together will multiply your happiness over time.
          </Text>
          <Text style={styles.h4white}>
            Each time you leave the app, your list disappears, just as each
            moment disappears.
          </Text>
          <Text style={styles.h4white}>
            But now you find that you are ready for this, as you've taken the
            time to reflect upon all of them.
          </Text>
          <Text style={styles.h2white}>Ready to begin?</Text>
          <Button
            onPress={() => navigation.navigate('Login')}
            title="Yes!"
            color="white"
          />
        </ImageBackground>
      </View>
    );
  }
}

export default DiaryIntro;
