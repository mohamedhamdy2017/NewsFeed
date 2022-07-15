import {StyleSheet} from 'react-native';
import { colors } from '../../../../constants/colors';

export default StyleSheet.create({
  item: {
    width: 340,
    height: 390,
    alignSelf: 'center',
    marginTop: 40,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
  title: {},
  description: {},
  content: {
    width: 290,
    height: 80,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: -20,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    padding: 15,
  },
  textSize: {
    fontSize: 30,
  },
});
