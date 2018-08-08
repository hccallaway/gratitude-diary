import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import styles from '../styles';

class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      text: '',
    };
    this.addEntry = this.addEntry.bind(this);
    this.clearEntries = this.clearEntries.bind(this);
  }

  addEntry(text) {
    const entry = {
      key: text,
    };
    this.setState({ entries: this.state.entries.concat([entry]) });
  }

  clearEntries() {
    this.setState({ entries: [] });
    alert('Your entries have been cleared.');
  }

  render() {
    const navigation = this.props.navigation;
    const entries = this.state.entries;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.welcome}>
          Welcome, {navigation.state.params.email}!
        </Text>
        <Image
          source={{
            uri:
              'https://cdn.dribbble.com/users/46067/screenshots/446200/hr.png',
          }}
          style={styles.divider}
        />
        <Text style={styles.h3}>What were you grateful for today?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Today this amazing thing happened to me..."
          onChangeText={text => this.setState({ text })}
          clearButtonMode="always"
        />
        <Button
          onPress={() => {
            this.addEntry(this.state.text);
            this.setState({ text: '' });
          }}
          title="Add Entry"
        />
        <Button
          onPress={() => {
            this.clearEntries();
          }}
          title="Start Over"
        />
        <Image
          source={{
            uri:
              'https://cdn.dribbble.com/users/3554/screenshots/2828927/grateful_1x.png',
          }}
          style={styles.img}
        />
        {entries.length ? (
          <View>
            <Text style={styles.h3}>Past Entries</Text>
            <FlatList
              data={entries}
              renderItem={({ item }) => (
                <Text style={styles.pastEntriesContent}>{item.key}</Text>
              )}
            />
          </View>
        ) : (
            <View>
              <Text style={styles.h3}>Past Entries</Text>
              <Text style={styles.pastEntriesContent}>
                No entries yes! Why don't you add one?
            </Text>
            </View>
          )}
        <Button onPress={() => navigation.navigate('Home')} title="Sign Out" />
      </KeyboardAvoidingView>
    );
  }
}

export default Diary;
