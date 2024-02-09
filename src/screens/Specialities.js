import {StyleSheet} from 'react-native';
import React from 'react';

import SpecialitiesHeader from '../components/SpecialitiesHeader';
import SpecialitiesContainer from '../components/SpecialitiesContainer';
import SpecialitiesBottom from '../components/SpecialitiesBottom';

const Specialities = ({isDarkMode}) => {
  return (
    <>
      <SpecialitiesHeader isDarkMode={isDarkMode} />
      <SpecialitiesContainer isDarkMode={isDarkMode} />
      <SpecialitiesBottom isDarkMode={isDarkMode} />
    </>
  );
};

export default Specialities;

const styles = StyleSheet.create({});
