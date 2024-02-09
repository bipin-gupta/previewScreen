import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const specialitiesData = [
  {id: 1, name: 'THORACIC SURGICAL ONCOLOGIST'},
  {id: 2, name: 'INFERTILITY'},
  {id: 3, name: 'ACUPRESSURIST'},
  {id: 4, name: 'PANCHAKARMA'},
  {id: 5, name: 'HOMEOPATH'},
  {id: 6, name: 'ACUPUNCTURIST'},
  {id: 7, name: 'PEDIATRIC CARDIAC SURGEON'},
  {id: 8, name: 'NATUROPATHIC PHYSICIAN'},
  {id: 9, name: 'LOW VISION SPECIALIST'},
  {id: 10, name: 'PSM SPECIALIST'},
];

const SpecialitiesContainer = ({isDarkMode}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setfilteredData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [specialityData, setSpecialityData] = useState(specialitiesData);

  useEffect(() => {
    const filteredData = specialitiesData.filter(issue =>
      issue.issue.toLowerCase().includes(searchText.toLowerCase()),
    );
    setfilteredData([...filteredData]);
  }, [searchText]);

  const handleCrossPress = () => {
    setSearchText('');
    setIsTyping(false);
  };

  const handleDataClick = data => {
    setSelectedData(prevSelectedData => {
      if (!prevSelectedData.find(selected => selected.id === data.id)) {
        return [...prevSelectedData, data];
      }
      return prevSelectedData;
    });
    setSpecialityData(prevSpecialityData =>
      prevSpecialityData.filter(speciality => speciality.id !== data.id),
    );
  };

  const handleCrossClick = id => {
    setSelectedData(prevSelectedData =>
      prevSelectedData.filter(data => data.id !== id),
    );
    setSpecialityData(prevSpecialityData => {
      const alreadySelectedData = selectedData.find(data => data.id === id);
      if (alreadySelectedData) {
        return [...prevSpecialityData, alreadySelectedData];
      }
      return prevSpecialityData;
    });
  };

  function boldMatchedText(text, searchText) {
    const index = text.toLowerCase().indexOf(searchText.toLowerCase());
    if (index !== -1) {
      const preMatched = text.substring(0, index);
      const matched = text.substring(index, index + searchText.length);
      const postMatched = text.substring(index + searchText.length);
      return (
        <>
          {preMatched}
          <Text style={{fontWeight: '900'}}>{matched}</Text>
          {postMatched}
        </>
      );
    }
    return <>{text}</>;
  }

  const styles = StyleSheet.create({
    Container: {
      backgroundColor: isDarkMode ? '#000' : '#FFF',
      flexDirection: 'column',
    },
    headerWrapper: {},
    header: {
      flexDirection: 'row',
    },
    searchBarContainer: {
      width: wp(86),
      flexDirection: 'row',
      borderRadius: 22,
      backgroundColor: isDarkMode
        ? 'rgba(183, 183, 183, 0.26)'
        : 'rgba(242, 242, 242, 0.9)',
      paddingHorizontal: wp(4),
      marginTop: hp(3),
    },
    CrossWrapper: {
      position: 'absolute',
    },
    CrossImage: {
      position: 'absolute',
      marginLeft: wp(86),
      marginTop: hp(4.8),
    },
  });

  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <View style={styles.searchBarContainer}>
            {isDarkMode ? (
              <Image source={searchIconDark} style={styles.searchIcon} />
            ) : (
              <Image source={searchIcon} style={styles.searchIcon} />
            )}
            <TextInput
              placeholder="Search your speciality"
              placeholderTextColor={isDarkMode ? '#fff' : '#4A4A4A'}
              clearButtonMode="always"
              style={styles.input}
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
                if (!isTyping) setIsTyping(true);
              }}
            />
          </View>
          {isTyping && (
            <TouchableHighlight
              style={styles.CrossWrapper}
              onPress={handleCrossPress}>
              {isDarkMode ? (
                <Image style={styles.CrossImage} source={CrossDark} />
              ) : (
                <Image style={styles.CrossImage} source={Cross} />
              )}
            </TouchableHighlight>
          )}
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollAreaStyle}>
        <View style={styles.SelectedDataView}>
          {selectedData.map(data => (
            <View style={styles.SelectedDataItem} key={data.id}>
              <TouchableOpacity onPress={() => handleCrossClick(data.id)}>
                <Text style={styles.SelectedDataText}>{data.name}</Text>
                <Image source={Cross} style={styles.CrossImage} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {isTyping && searchText.length > 0 ? (
          <>
            {filteredData.map(data => (
              <TouchableOpacity
                style={styles.TopCityCard}
                key={data.id}
                onPress={() => handleDataClick(data)}>
                <Text style={styles.TopCityText}>
                  {boldMatchedText(data.name, searchText)}
                </Text>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <>
            {specialityData.map(data => (
              <TouchableOpacity
                style={styles.TopCityCard}
                key={data.id}
                onPress={() => handleDataClick(data)}>
                <Text style={styles.TopCityText}>{data.name}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}
        <View style={{padding: 60}} />
      </ScrollView>
    </View>
  );
};

export default SpecialitiesContainer;
