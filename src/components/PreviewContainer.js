import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CollegeIcon from '../../assets/College.png';
import CollegeDarkIcon from '../../assets/CollegeDark.png';
import CourseIcon from '../../assets/Course.png';
import CourseDarkIcon from '../../assets/CourseDark.png';

const PreviewContainer = ({college, course, year, isDarkMode}) => {
  const styles = StyleSheet.create({
    Container: {
      width: wp(84),
      height: hp(17.4),
      backgroundColor: isDarkMode ? undefined : '#F0F0F0',
      alignContent: 'center',
      alignSelf: 'center',
      flexDirection: 'column',
    },
    ViewWrapper: {
      flexDirection: 'row',
      marginBottom: hp(5),
      width: wp(95),
      alignSelf: 'center',
    },
    Image: {
      marginRight: 5,
    },
    CollegeText: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 24,
    },
  });
  return (
    <View style={styles.Container}>
      <View style={styles.ViewWrapper}>
        {isDarkMode ? (
          <Image style={styles.Image} source={CollegeIcon} />
        ) : (
          <Image style={styles.Image} source={CollegeDarkIcon} />
        )}
        <Text style={styles.CollegeText}>{college}</Text>
      </View>
      <View style={styles.ViewWrapper}>
        {isDarkMode ? (
          <Image style={styles.Image} source={CourseIcon} />
        ) : (
          <Image style={styles.Image} source={CourseDarkIcon} />
        )}
        <Text style={styles.CollegeText}>
          {course} - {year}
        </Text>
      </View>
    </View>
  );
};

export default PreviewContainer;
