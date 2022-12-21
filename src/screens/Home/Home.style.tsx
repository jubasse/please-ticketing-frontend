import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  SafeAreaView: { backgroundColor: '#FFF', flex: 1 },
  header: { flex: 1, flexDirection: 'row', alignItems: 'center', fontSize: 35, textAlign: 'center'},
  outerWrapper: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10,
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
});
