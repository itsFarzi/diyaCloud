import {StyleSheet} from 'react-native';
import {Colors, Size} from '../../helper';

export const InfoStyles = StyleSheet.create({
  card: {
    elevation: 5,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: Size.vs(20),
    borderRadius: Size.mv(20),
    paddingBottom: Size.vs(140),
    backgroundColor: Colors.primary,
    paddingHorizontal: Size.hs(20),
    justifyContent: 'space-between',
  },
  box: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: Size.mv(20),
    color: Colors.dark,
  },
  temp: {
    fontSize: Size.mv(35),
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  description: {
    fontSize: Size.mv(15),
    color: Colors.secondary,
  },
  arrowImg: {
    width: Size.hs(20),
  },
  waveImg: {
    height: Size.hs(100),
  },
  tempParent: {
    alignItems: 'center',
  },
  meterParent: {
    flexDirection: 'row',
  },
  meter: {
    alignItems: 'center',
  },
  meterIcon: {
    height: Size.hs(10),
    width: Size.hs(10),
  },
  meterText: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: Size.mv(18),
  },
  meterDescription: color => ({fontSize: Size.mv(10), color}),
});
