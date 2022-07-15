import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
  },
  list: {
    paddingBottom: 30,
  },
  input: {
    width: 343,
    height: 59,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  loadingMore: {
    marginTop: 30,
  },
});
