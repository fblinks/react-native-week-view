import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

import { getCurrentMonth, availableNumberOfDays } from '../utils';
import styles from './Title.styles';

const getFontSizeHeader = (numberOfDays) => {
  if (numberOfDays > 1) {
    return 12;
  }
  return 16;
};

const Title = ({ style, showTitle, numberOfDays, selectedDate, textStyle, navigation, timeoutId }) => { //({ style, showTitle, numberOfDays, selectedDate, textStyle }) => {
  return (
    <View style={[styles.title, style]}>
      {showTitle ? (
        <Text
          style={[
            {
              fontSize: getFontSizeHeader(numberOfDays),
              textAlign: 'center',
            },
            textStyle,
          ]}
        >
          <TouchableOpacity
            style={{
                borderWidth: 2,
                borderColor:'rgba(255,255,255,0.5)',
                alignItems:'center',
                justifyContent:'center',
                width:40,
                height:40,
                backgroundColor:'#00f',
                borderRadius:20,
            }}
            onPress={
              () => {
                if (timeoutId) {
                  clearTimeout(timeoutId)
                }
                navigation.popToTop()
              }
            }
          >
            <Icon name="arrow-left" size={15} color="#fff" /> 
          </TouchableOpacity>
        </Text>
      ) : null}
    </View>
  );
};

Title.propTypes = {
  showTitle: PropTypes.bool,
  numberOfDays: PropTypes.oneOf(availableNumberOfDays).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

export default React.memo(Title);
