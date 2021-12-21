import React, {useEffect, useRef, useState} from 'react';
import {API, capitalize, Size, Colors} from '../helper';
import FlipCard from 'react-native-flip-card';
import {Information} from '.';
import {
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  Image,
  Alert,
  View,
  Text,
} from 'react-native';
import {DashboardStyles} from '../styles';

const Form = ({search = () => {}}) => {
  const [edit, setEdit] = useState(false);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const animate = useRef(new Animated.Value(0)).current;
  const disabled = edit && city == '';

  useEffect(() => {
    Animated.spring(animate, {
      toValue: edit ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [edit]);

  const interpolate = outputRange =>
    animate.interpolate({
      inputRange: [0, 1],
      outputRange,
      extrapolate: 'clamp',
    });

  const _search = async () => {
    setLoading(true);
    try {
      await search(city);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={DashboardStyles.form}>
      <Animated.View
        style={{
          opacity: interpolate([0, 1]),
          width: interpolate([0, Size.hs(200)]),
        }}
        children={
          <TextInput
            value={city}
            onChangeText={setCity}
            onSubmitEditing={_search}
            placeholder="Enter your city..."
            style={DashboardStyles.textFeild}
          />
        }
      />
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          if (edit) _search();
          else setEdit(true);
        }}>
        <Animated.View
          style={{
            position: 'relative',
            opacity: disabled ? 0.5 : 1,
            marginLeft: interpolate([0, Size.hs(10)]),
            width: interpolate([Size.vs(100), Size.vs(30)]),
            height: interpolate([Size.vs(100), Size.vs(30)]),
          }}>
          <Animated.Image
            resizeMode="contain"
            source={require('../assets/images/plus.png')}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              opacity: interpolate([1, 0]),
            }}
          />
          {loading ? (
            <ActivityIndicator color={Colors.dark} />
          ) : (
            <Animated.Image
              resizeMode="contain"
              source={require('../assets/images/right-arrow.png')}
              style={{
                width: '100%',
                height: '100%',
                opacity: interpolate([0, 1]),
              }}
            />
          )}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const Dashboard = () => {
  const [flip, setFlip] = useState(false);
  const [data, setData] = useState({});

  const getWeather = async (q = '') => {
    try {
      var {
        name = '',
        weather = [],
        main: {temp = 0, temp_max = 0, temp_min = 0} = {},
      } = await API.get({
        path: '/weather',
        body: {q},
      });

      setData({
        city: name,
        temp: temp,
        minTemp: temp_min,
        maxTemp: temp_max,
        description: weather.map(_ => _.main).join(','),
      });
      setFlip(true);
    } catch ({message = ''}) {
      Alert.alert(
        capitalize(message),
        'Something went wrong, kindly follow on message above',
      );
    }
  };

  return (
    <ScrollView
      style={{height: '100%'}}
      contentContainerStyle={DashboardStyles.content}>
      <FlipCard
        flipHorizontal
        flipVertical={false}
        clickable={false}
        flip={flip}>
        <View style={DashboardStyles.card}>
          <View style={DashboardStyles.data}>
            <Text children="Add City" style={DashboardStyles.title} />
            <Form search={getWeather} />
          </View>
          <Image
            resizeMode="cover"
            source={require('../assets/images/landscape.png')}
            style={DashboardStyles.landscapeImg}
          />
        </View>
        <Information pop={() => setFlip(false)} {...data} />
      </FlipCard>
    </ScrollView>
  );
};

export default Dashboard;
