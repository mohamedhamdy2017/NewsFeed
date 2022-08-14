import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  darkMode: {
    backgroundColor: colors.black,
  },
  container: {
    flexGrow: 1,
  },
  list: {
    flexGrow: 1,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 343,
    height: 59,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 10,
    alignSelf: 'center',
    textAlign: 'left',
  },
  loadingMore: {
    marginTop: 30,
  },
  noResult: {
    fontSize: 20,
  },
});
