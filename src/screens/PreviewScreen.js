import React from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import PreviewHeader from '../components/PreviewHeader';
import PreviewContainer from '../components/PreviewContainer';
import PreviewBottom from '../components/PreviewBottom';

const previewData = [
  {
    college:
      'Indira Gandhi Memorial Ayurvedic Medical College & Hospital, Bhubaneswar',
    course: 'BAMS',
    year: 2012,
  },
  {
    college: 'Another College Name',
    course: 'Another Course',
    year: 2013,
  },
];

const PreviewScreen = ({isDarkMode}) => {
  const renderItem = ({item}) => (
    <PreviewContainer
      college={item.college}
      course={item.course}
      year={item.year}
      isDarkMode={isDarkMode}
    />
  );

  const styles = StyleSheet.create({
    Container: {
      width: wp(100),
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
  });

  return (
    <SafeAreaView style={{height: hp(100)}}>
      <View style={styles.Container}>
        <PreviewHeader isDarkMode={isDarkMode} />
        <FlatList
          data={previewData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
      <PreviewBottom isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
};

export default PreviewScreen;
