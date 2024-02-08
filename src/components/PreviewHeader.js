import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LeftArrow from '../../assets/LeftArrowIcon.png';
import LeftArrowDark from '../../assets/LeftArrowIconDark.png';

const PreviewHeader = ({isDarkMode}) => {
  function handleArrowClick() {
    // navigation.navigate("");
  }
  const styles = StyleSheet.create({
    ViewWrapper: {
      flexDirection: 'row',
      marginTop: hp(1.85),
      marginLeft: 8,
    },
    ArrowImage: {
      marginRight: wp(0),
      marginTop: 7.5,
    },
    EductaionText: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 28,
      fontStyle: 'normal',
      fontWeight: '800',
      lineHeight: 40,
    },
    EditText: {
      marginLeft: wp(37.86),
      color: '#007AFF',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 40,
    },
  });

  return (
    <View style={styles.ViewWrapper}>
      <TouchableOpacity onPress={handleArrowClick}>
        {isDarkMode ? (
          <Image style={styles.ArrowImage} source={LeftArrowDark} />
        ) : (
          <Image style={styles.ArrowImage} source={LeftArrow} />
        )}
      </TouchableOpacity>
      <Text style={styles.EductaionText}>Education</Text>
      <Text style={styles.EditText}>edit</Text>
    </View>
  );
};

export default PreviewHeader;
