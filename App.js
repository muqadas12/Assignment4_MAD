import * as React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableHighlight,
  ImageBackground,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
const image = { uri: "https://reactjs.org/logo-og.png" };
const Stack = createStackNavigator();

const LocationsScreen=({navigation,route})=>{
   
  const [text3, onChangetext3] = React.useState(null);
  const [text4, onChangetext4] = React.useState(null);
    const [aray2 , setaray2] =useState([]);
    const {loc}=route.params;
  const addLocation=()=>{
aray2.push(text3);
aray2.push(text4);
onChangetext3("");
onChangetext4("");
console.log(loc)
  }
   	 const image2= { uri: "https://www.xda-developers.com/files/2019/03/GPS-location.png" };

   return (

   <View>
    <ImageBackground source={image2} style={styles.image} >
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      {
        aray2.length != 0 ?
      aray2.map( e =>
            <View style={styles.button}>
     <Text style={{fontSize:"20px",fontWeight:"bold"}}>{e}</Text>
     </View>

      ) :
       <Text>No locations for this city!</Text>
      
      }
      
 <TextInput
          style={styles.input3}
          onChangeText={onChangetext3}
          value={text3}
          placeholder="Location name"
		  placeholderTextColor = "blue"
        />

        <TextInput
          style={styles.input4}
          onChangeText={onChangetext4}
          value={text4}
          placeholder="Location info"
		   placeholderTextColor = "green"
        />
    
    <View>
      <Button title="Add Location" onPress={() =>  navigation.navigate('Locations',{loc:aray2}) || addLocation()} />
      </View>
    </View>
	 </ImageBackground>
	   </View>
  );
}

const CitiesScreen=({route,navigation})=> {
	
     const { data }  = route.params;
	 const image1 = { uri: "http://2.bp.blogspot.com/-1TUiK-k6PEM/VnlMwyqb6TI/AAAAAAAAArk/KKPzg0hiR6c/s1600/kota.jpg" };
       return (
	   <View>
	   <ImageBackground source={image1} style={styles.image}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      }}>
     
      
      <View >
      
    {data.map( e =>
    
    <TouchableHighlight onPress={() =>  navigation.navigate('Locations', { n: e.split("(",1) })
         
            }>
            <View style={styles.button}>
     <Text style={{fontSize:"20px",fontWeight:"bold"}}>{e}</Text>
     </View>
     </TouchableHighlight>
      )}
    </View>
      
      
    </View>
	</ImageBackground>
	 </View>
  );
}
const AddCityScreen=({ navigation })=> {
  const [text, onChangetext] = React.useState(null);
  const [text2, onChangetext2] = React.useState(null);
  const [aray , setaray] =useState([]);

  const addcity = () => {
  
  var a=text +"(" +text2+")";
  
    aray.push(a)   
    onChangetext("");
    onChangetext2("");
  };
  const image = { uri: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/df/3a.jpg" };
  return (
  <View>
    <ImageBackground source={image} style={styles.image}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
      <View>
        <Text style={styles.city}>Cities</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangetext}
          value={text}
          placeholder="City name"
        />

        <TextInput
          style={styles.input2}
          onChangeText={onChangetext2}
          value={text2}
          placeholder="Country name"
        />
      </View>
      <View style={styles. btnaddity}>
      <Button title="Add City" onPress={() => {navigation.navigate('Cities', {
            screen: 'Cities',
            params:{data: aray}
          }) || addcity()
            }} />
      </View>
     
    </View>
	 </ImageBackground>
	</View>
  );
}
const Tab = createMaterialBottomTabNavigator();

function MyTabs({navigation}) {
	
  return (
    <Tab.Navigator
      initialRouteName="AddCity"
      activeColor="white"
      barStyle={{
        backgroundColor: '#ADD8E6',
      }}>
      
     
      
      <Tab.Screen name="Cities"options={{
          tabBarLabel: 'Cities',
          headerShown:true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="city" color={color} size={26} />
          ),
        }} component={Cities}></Tab.Screen>
        <Tab.Screen
        name="AddCity"
        options={{
          tabBarLabel: 'Add City',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
          ),
        }}
        component={AddCityScreen}
      />
    </Tab.Navigator>
  );
}
function Cities({navigation,route}){
 
  return(
 <Stack.Navigator  >   
      <Stack.Screen name="Cities" options={{headerTitleAlign:"center"}} component={CitiesScreen} /> 
       <Stack.Screen name="Locations" options={({ route }) => ({ title: route.params.n })} component={LocationsScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
     <MyTabs/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  city: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    fontFamily:"Times New Roman",
    marginTop:180,
	fontSize:30,
	color:'black'
  },
  input: {
    marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
		color:'black'
    
   
 
  },
  input2: {
    marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'white',
        borderBottomWidth:1
    
     
  },
  input3: {
    marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'black',
        borderBottomWidth:1,
		color:'black'
    
   
 
  },
  input4: {
    marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'black',
        borderBottomWidth:1,
		
    
     
  },
   button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding:10,
    marginTop:'5%'
    
  },
  btnaddity:{
    marginBottom:370,
	width:150,
	height:40,

  },
   image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
	height:600
  },

});