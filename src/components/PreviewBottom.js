import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//import LeftArrow from '../../assets/searchSection/LeftArrowIcon.png';

const PreviewBottom = ({isDarkMode}) => {
  function handleButton() {
    // function logic
  }
  
  const styles = StyleSheet.create({
    Container: {
      width: wp(84),
      height: hp(6.8),
      backgroundColor: isDarkMode ? undefined : '#438FE2',
      alignContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: isDarkMode ? '#fff' : undefined,
      borderRadius: 20,
    },
    TextStyle: {
      color: isDarkMode == false ? '#fff' : '#438FE2',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={handleButton}>
        {/* <Image style={styles.ArrowImage} source={LeftArrow} /> */}
        <Text style={styles.TextStyle}> ➕ Add New Education</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PreviewBottom;
