const React = require('react-native');
const { StyleSheet } = React;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  homeImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 80,
    marginRight: 80,
  },
  divider: {
    width: 150,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 100,
    marginRight: 100,
  },
  pastEntriesContent: {
    fontSize: 15,
    textAlign: 'left',
    paddingLeft: 10,
  },
  textInput: {
    paddingLeft: 10,
  },
  h2: {
    fontSize: 25,
    textAlign: 'center',
  },
  h2white: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  h3: {
    fontSize: 20,
    padding: 10,
  },
  h4: {
    fontSize: 15,
    padding: 10,
  },
  h4white: {
    fontSize: 15,
    padding: 10,
    color: 'white',
  },
  welcome: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
});

module.exports = styles;
