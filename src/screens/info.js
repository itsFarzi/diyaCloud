import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Size} from '../helper';
import {InfoStyles} from '../styles';

const Meter = ({
  text = '',
  range = 0,
  color = Colors.green,
  icon = require('../assets/images/polygon_green.png'),
}) => {
  const [meter, setMeter] = useState(0);
  useEffect(() => {
    var interrval = setInterval(() => setMeter(value => value + 1), 10);
    if (meter >= range) clearInterval(interrval);
    return () => {
      clearInterval(interrval);
    };
  }, [meter]);
  return (
    <View style={InfoStyles.meter}>
      <Image source={icon} resizeMode="contain" style={InfoStyles.meterIcon} />
      <Text children={meter} style={InfoStyles.meterText} />
      <Text children={text} style={InfoStyles.meterDescription(color)} />
    </View>
  );
};

const Information = ({
  pop = () => {},
  city = '',
  temp = 0,
  minTemp = 0,
  maxTemp = 0,
  description = '',
}) => {
  const kToC = kelvin => kelvin - 273.15;

  return (
    <View style={InfoStyles.card}>
      <View style={InfoStyles.box}>
        <TouchableOpacity onPress={pop}>
          <Image
            resizeMode="contain"
            source={require('../assets/images/left-arrow.png')}
            style={InfoStyles.arrowImg}
          />
        </TouchableOpacity>
        <Text children={city} style={InfoStyles.name} />
        <Image
          resizeMode="contain"
          source={require('../assets/images/left-arrow.png')}
          style={[InfoStyles.arrowImg, {opacity: 0}]}
        />
      </View>
      <Image
        resizeMode="contain"
        style={InfoStyles.waveImg}
        source={require('../assets/images/waves.png')}
      />
      <View style={InfoStyles.tempParent}>
        <Text children={kToC(temp).toFixed(1)} style={InfoStyles.temp} />
        <Text children={description} style={InfoStyles.description} />
      </View>
      <View style={InfoStyles.meterParent}>
        <Meter text="Min" range={kToC(minTemp)} />
        <View style={{width: Size.hs(60)}} />
        <Meter
          text="Max"
          color={Colors.red}
          range={kToC(maxTemp)}
          icon={require('../assets/images/polygon_red.png')}
        />
      </View>
    </View>
  );
};

export default Information;
