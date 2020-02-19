import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,Text, View,Button, Alert,ScrollView} from 'react-native';


export default function todoItem(props) {

 const noteId = props.id;

  return (
    <View style={styles.colA}><Text style={styles.noteStyle}>{props.note}</Text></View>
  );
}

const styles = StyleSheet.create({

    itemContainer: {
      flexDirection:'row', 
      height:80,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:4,
      borderColor:'black',
    
    
    },
    colA: {

        flex:6, 
        height:80,
        alignItems:'center',
        justifyContent:'center',

        borderWidth:4,
        borderColor:'black',
      
      
    },
    colB: {
        flex:1, 
        height:80,
        alignItems:'center',
        justifyContent:'center',
    
        borderWidth:4,
        borderColor:'black',
      
      
    },
    noteStyle: {
        
        fontSize:20,
        paddingLeft:10
      
      
    }
});
