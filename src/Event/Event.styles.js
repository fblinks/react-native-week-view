import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 0,
    flex: 1,
    overflow: 'hidden',
  },
  touchableContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    marginVertical: 0,
    marginHorizontal: 2,
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default styles;
