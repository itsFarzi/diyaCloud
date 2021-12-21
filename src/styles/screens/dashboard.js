import {StyleSheet} from 'react-native';
import {Colors, Size} from '../../helper';

export const DashboardStyles = StyleSheet.create({
  card: {
    elevation: 5,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: Size.mv(20),
    paddingVertical: Size.vs(20),
    paddingHorizontal: Size.hs(20),
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
  },
  content: {
    flexGrow: 1,
    paddingVertical: Size.vs(30),
    paddingHorizontal: Size.hs(25),
  },
  data: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: Colors.dark,
    fontSize: Size.mv(20),
  },
  landscapeImg: {
    width: '100%',
    height: Size.vs(200),
    marginTop: Size.vs(60),
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Size.vs(25),
  },
  textFeild: {
    borderWidth: 1,
    paddingVertical: 0,
    height: Size.vs(50),
    borderRadius: Size.mv(5),
    borderColor: Colors.silver,
  },
});
