
import React, { useState } from 'react';
import { FlatList, View, StatusBar, SafeAreaView,StyleSheet,ActivityIndicator } from 'react-native';
import SearchBar from '../../components/SearchBar';
import Divider from '../../components/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { updateAddress } from '../../store/actions';
import colors from '../../constants/colors';
interface SearchPageProps{
  route?:any
  navigation?:any
}
const SearchPage = ({ navigation }:SearchPageProps) => {
  const data = useSelector((state: any) => state.stateContent);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [loading,setLoading]=useState(false);

  const handleTextChange = (text:any) => {
    setInputValue(text);
  };

  const handleAddressUpdate  =(details:any,addressData:any)=>{
    setLoading(true)
    updateAddress(details, addressData, dispatch, () => {
      if(!data?.requestLoading){
        setLoading(false)
        navigation.navigate('Home')
      }
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView>
        <SearchBar 
        navigation={navigation} 
        value={inputValue} 
        onChangeText={handleTextChange} 
        onPress = {handleAddressUpdate}
        />
        <View >
          {loading? <ActivityIndicator/> : null}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.LIGHT_01
},
})
