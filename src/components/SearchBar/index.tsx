import React from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import appIcons from '../../constants/icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../config';


interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onPress:(a:any,b:any)=>void,
  placeholder?: string;
  navigation: any,
  closeAction?: () => void;
  leftIconName?: string;
  disableLeftIcon?: boolean;
  leftIconColor?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search Location...',
  navigation,
  closeAction,
  onPress,

  disableLeftIcon = false,
}) => {
  const clearInput = () => {
    onChangeText('');
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => (closeAction ? closeAction() : navigation.goBack())}
        disabled={disableLeftIcon}
        activeOpacity={0.7}
        style={styles.backIcon}>
          <Image source={appIcons.cheveronLeft.source} style={appIcons.cheveronLeft.style} />
      </TouchableOpacity>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder={placeholder}
          onPress={(data, details = null) => {
            onPress(details,data)
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en', 
          }}
          styles={{
            textInput: styles.inputBox,
          }}
        />
       
      </View>
    </View>
  );
};

export default SearchBar;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingVertical:20

  },
  backIcon: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  clearIcon: {
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  inputBox: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1,
  },
});
