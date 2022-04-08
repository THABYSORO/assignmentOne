
import React from "react";
import { View, StatusBar ,StyleSheet,ScrollView,Image, Text } from "react-native";
import { SimpleLineIcons,Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";


export default function App(){
  return(
    <>
    <StatusBar style={"auto"}/>
      <View style = {Styles.Header}>
       <TouchableOpacity>
      <SimpleLineIcons name="menu" size={24} style={{margin:10,}} color="black" />
      </TouchableOpacity>
        <View style = {{flex: 0.7, alignItems:'center', justifyContent:'center',}}>
          <Image source={require('./assets/beauty.jpg')} style = {{height: 150,marginStart:40, width:150, borderRadius: 100,}} />
        </View>
        <View style = {{flex: 1,justifyContent:'center',}}>
          <View style = {{marginLeft: 40,}}>
          <Text style = {Styles.HeeaderText}>Rethabile Soro</Text>
          <Text style = {Styles.HeeaderText}>901013570</Text>
          <Text style = {Styles.HeeaderText}>BScSM</Text>
          
        </View>
        </View>
        <TouchableOpacity>
        <Ionicons name="md-search-circle" size={35} color="black"/>
        </TouchableOpacity>
      </View>
      <View style = {{flex: 2}}>
      <ScrollView>
        <View style = {Styles.Body}>
          
          <View style = {Styles.BodyView}>
          <Text style={{fontSize:15, marginEnd:150}}>SEMESTER ONE </Text>  
          <Text style={{fontSize:10}}>Algebra                                                    c+ </Text>
          <Text style={{fontSize:10}}>Business Communication                     c+</Text>
          <Text style={{fontSize:10}}>Creative and Innovation Studies         B+</Text>
          <Text style={{fontSize:10}}>Introduction to computer Skills          B+</Text>
          <Text style={{fontSize:10}}>Programming C++ one                        C+</Text>
          <Text style={{fontSize:10}}>Fandermentals of Design                      B</Text>
           </View>
          <View style = {Styles.BodyView}>
            <Text style={{marginStart:-170}}>SEMESTER TWO</Text>
            <Text style={{fontSize:10}}>Calculus                                                   C+</Text>
                <Text style={{fontSize:10}}> Introduction to Database                      C+</Text>
               <Text style={{fontSize:10}}>Intro to DataCom                                   B+</Text>
               <Text style={{fontSize:10}}>Introduction to Digital Graphics         C+</Text>
               <Text style={{fontSize:10}}>Introductin to Imaging                         C+</Text>
               <Text style={{fontSize:10}}>Principles of Software Engineering  C+</Text>
               <Text style={{fontSize:10}}>Introduction to Multimedia                   B-</Text>
              
          </View>
          <View style = {Styles.BodyView}>
            <Text style={{marginStart:-145}}>SEMESTER THREE</Text>
            <Text style={{fontSize:10}}>Calculus II                                                C+</Text>  
              <Text style={{fontSize:10}}>Principles of Web Design                        B</Text>  
              <Text style={{fontSize:10}}>C++ Programming I                                C+</Text>
              <Text style={{fontSize:10}}>Multimedia Technology                          B-</Text>
              <Text style={{fontSize:10}}>DataCom And Networking                    C+</Text>
              <Text style={{fontSize:10}}>Fundamentals of IT                                C+</Text>
          </View>
          <View style = {Styles.BodyView}>
            <Text style={{marginStart:-158,marginTop:-220}} >SEMESTER FOUR</Text>
            <Text>coming soon...</Text>
          </View>
        </View></ScrollView>
      </View>
    </>
  );
}
const Styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  Header:{
    height:190,
    width:380,
    flexDirection: 'row',
    backgroundColor:'#FCE4EC',
  },
  Body: {
   // flex: 2,
    height: 1200,
    backgroundColor:'#FFCDD2' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeeaderText:{
    fontSize: 12
  },
  PictureCicle:{
    backgroundColor:'white',
    width:155,
    height:155,
    borderRadius:50,
    marginEnd:10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  semester:{
    height:230,
    width:360,
    backgroundColor:'#F8BBD0',
  },
  BodyView:{
    height:300,
    width:380,
    backgroundColor:'white',
    margin:10,
    
   // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
      

