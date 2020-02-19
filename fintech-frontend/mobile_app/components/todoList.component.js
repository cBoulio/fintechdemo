import React, { Component } from 'react';
import { Image, Modal, StyleSheet, Text, View,SafeAreaView, FlatList, ScrollView,TextInput,Button  } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import testService from '../services/test.service';
import TodoItem from '../components/todoItem.component';

export default class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dataSource :[],
        isLoading : true,
        modalVisible: false,
        editModalVisible: false,
        newNote:'',
        noteToBeChanged:'',
        noteToBeChangedId:''
      }
    }

    AddNewTodo = () => {
        
        fetch('http://192.168.1.18:8080/v1/todo/createTodo', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({note: this.state.newNote}),
        }).then((response) => {
            return response;
        })
            .catch((error) => {
            console.error(error);
        });
        this.getAllTodos();
        this.setState({modalVisible: false});
    }

    updateTodo = () => {
        
        fetch('http://192.168.1.18:8080/v1/todo/updateTodo', {
        method: 'UPDATE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id:this.state.noteToBeChangedId,note: this.state.noteToBeChanged}),
        }).then((response) => {
            return response;
        })
            .catch((error) => {
            console.error(error);
        });
        this.getAllTodos();
        this.setState({modalVisible: false});
    }
    
    getAllTodos(){
        fetch("http://192.168.1.18:8080/v1/todo/getAllTodos")
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          });
        });
    }

    editNote(id,note){
        this.setEditModalVisible(true);
        this.setState({noteToBeChanged: note});
        this.setState({noteToBeChangedId: id});
    }
    
    deleteNote(id){
        fetch('http://192.168.1.18:8080/v1/todo/deleteTodo', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id:id}),
        }).then((response) => {
            return response;
        })
            .catch((error) => {
            console.error(error);
        });
        this.getAllTodos();
        this.setState({modalVisible: false});
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    setEditModalVisible(visible) {
        this.setState({editModalVisible: visible});
    }

    componentWillMount() {
        this.getAllTodos();
    }
  
    render() {
        if(this.state.isLoading){
        return (
            <View style={{ flex: 1, padding: 20 }}>
                  <Text>Hello s</Text>
            </View>
          );
      
       }
       return (
        <View style={{ flex: 1, padding: 20 }}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                    <View>
                    <TextInput
                    style={{height: 40}}
                    placeholder="Add a new note here!"
                    onChangeText={(newNote) => this.setState({newNote})}
                    value={this.state.text}
                    />

                    <Button title="Save" onPress={() => { this.AddNewTodo();}} />
                    <Button title="Close" onPress={() => { this.setModalVisible(!this.state.modalVisible);}} />

                    </View>

                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.editModalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                    <View>
                    <TextInput
                    style={{height: 40}}
                    placeholder={this.state.noteToBeChanged}
                    onChangeText={(noteToBeChanged) => this.setState({noteToBeChanged})}
                    value={this.state.noteToBeChanged}
                    />

                    <Button title="Save" onPress={() => { this.updateTodo();}} />
                    <Button title="Close" onPress={() => { this.setEditModalVisible(!this.state.editModalVisible);}} />

                    </View>

                </View>
            </Modal>

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>

                    <View style={styles.itemContainer}>
        
                            
                                <TodoItem note={item.note}/>
                                
                                    <View style={styles.colA}>
                                        <View><Ionicons
                                        onPress={() => { this.editNote(item.id, item.note);}}
                                        name={Platform.OS === 'ios' ? `ios-create` : 'md-create'}
                                        size={25}
                                    
                                        color={'black'}
                                    /></View>
                                    </View>
                                    <View style={styles.colB}>
                                        <View><Ionicons
                                        onPress={() => { this.deleteNote(item.id);}}
                                        name={Platform.OS === 'ios' ? `ios-trash` : 'md-trash'}
                                        size={25}
                                    
                                        color={'black'}
                                    /></View>
                                  
                            </View>


                    </View>

                
                
                }

                    keyExtractor={item => item.id}
                    
                />
            </SafeAreaView>
            <Button title="Add New Todo" onPress={() => { this.setModalVisible(true);}} />
        </View>
      );
  
    
     
    }
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
      itemContainer: {
        flexDirection:'row', 
        height:80,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:4,
        borderColor:'black',
      
      
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      colA: {

        flex:1, 
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