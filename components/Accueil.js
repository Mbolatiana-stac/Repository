import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'
import { 
    StyleSheet,
     Text, 
     View, 
     Image, 
     TouchableWithoutFeedback, 
     StatusBar, 
     TextInput, 
     SafeAreaView, 
     Keyboard, 
     TouchableOpacity, 
     KeyboardAvoidingView,
     ImageBackground, 
     Dimensions,
     Button,
     Alert,
     ScrollView,
     Modal,
     Pressable
    } from 'react-native'

    import SelectInput from 'react-native-select-input-ios';

    const options = [
        {value : 0, label: 'Homme'},
        {value: 1, label: 'Femme'}
    ];

function Accueil(){

    const [modalVisible, setModalVisible] = useState(false);

    const toogleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return(
        <View>
        <Modal
        animationType="slide"
        visible={modalVisible}>
          <View style={{
            backgroundColor:"black",
            opacity:0.9
        }}>
            <ScrollView>
            <View style={{
                    width:50,
                    marginTop:10,
                    marginLeft:180, 
                }}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setModalVisible(false)}>
                    <Image source={require('../img/homme.png')} ></Image>
                </TouchableOpacity>
                        
                </View>

                <View style={{
                    alignItems:'center' }}>
                    <View style={{
                        borderBottomColor:'white',
                        borderBottomWidth:1,
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white', 
                            fontWeight:'bold', 
                            fontSize:40,
                            marginTop:20 
                        }}>
                            SE CONNECTER
                        </Text>                        
                    </View>
                    <View style={{marginTop:10}}>
                        <Image
                            source={require('../img/icone-inscrit.png')}
                        >
                        </Image>
                    </View>

                    <View style={{
                       marginTop:50,
             
                    }}>
                        <Text style={{
                            color : 'white',
                            fontSize : 20
                        }}>
                                Nom d'utilisateur ou pseudo:
                        </Text>
                        <TextInput  style={{
                        width : 300,
                        height : 40,
                        borderWidth: 2,
                        marginTop : 20,
                        color : 'white',
                        borderRadius: 10,
                        borderColor : 'white',
                        fontSize : 20,
                        paddingHorizontal : 10
                        }}>
                        
                        </TextInput>

                    </View>

                    <View style={{
                       marginTop:30,
                       
             
                    }}>
                        <Text style={{
                            color : 'white',
                            fontSize : 20
                        }}>
                                Mot de passe:
                        </Text>
                        <TextInput secureTextEntry={true} style={{
                        width : 300,
                        height : 40,
                        borderWidth: 2,
                        marginTop : 20,
                        color : 'white',
                        borderRadius: 10,
                        borderColor : 'white',
                        fontSize : 20,
                        paddingHorizontal : 10
                        }}>
                        
                        </TextInput>

                        <Text style={{ marginTop:10, fontSize : 18, color:'white'}}>
                            Mot de passe oublié?
                        </Text>

                    </View>
                    <View style={{
                        marginTop: 20,
                        borderBottomWidth : 1,
                        borderBottomColor : 'white',
                        alignItems:'center'
                    }}>
                    <Image source={require('../img/submit.png')} style={{
                        marginBottom : 10
                    }}></Image>

                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image source={require('../img/fb.png')}></Image>
                    </TouchableOpacity>
                    
                </View> 
                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image source={require('../img/google.png')}></Image>
                    </TouchableOpacity>
                    
                </View>
                    </View>
                    </View>
            </ScrollView>

                
            
          </View>
          
      </Modal>

            <Image source = {require('../img/back2.png')} style={{
                    position : 'absolute',
                    top : 0,
                    left : 0,
                    right : 0,
                    bottom : 0,
                    width : Dimensions.get("window").width,
                    height : 900
                }}></Image>
            <ScrollView
                    style={{
                    backgroundColor : 'transparent',                   
                }}>
                   <View style={{
                        flexDirection:'row', 
                        backgroundColor:'#f8f9fa',
                        opacity: 0.7
                        }}>
                    <Image
                        source={require('../img/logo2.png')}
                        style={{marginTop:30}}
                    >
                    </Image>
                    <View style={{height:10, width:150, marginTop:70, marginLeft:100}}>
                        <Button title='Connectez-vous'
                            onPress={()=>setModalVisible(true)}
                            style={{marginTop:30}}
                        ></Button>
                    </View>
                </View>

                <View style={{
                    marginTop:30,
                    borderRadius: 10,
                    marginHorizontal:10,
                    backgroundColor:'#000000',
                    height:750,
                    opacity:0.7,
                }}>
                    <View style={{
                    alignItems:'center' }}>
                    <View style={{
                        borderBottomColor:'white',
                        borderBottomWidth:1,
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white', 
                            fontWeight:'bold', 
                            fontSize:40,
                            marginTop:20 
                        }}>
                            INSCRIVEZ-VOUS
                        </Text>
                        <Text style={{
                            marginTop:10,
                            color:'#ec008a',
                            fontSize:25,
                            fontWeight:'bold',
                            paddingBottom:10
                        }}>
                            C'est gratuit
                        </Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Image
                            source={require('../img/icone-inscrit.png')}
                        >
                        </Image>
                    </View>
                    <Text
                        style={{
                            paddingLeft:40,
                            color: 'white',
                            fontSize: 20
                        }}
                    >
                        Bonjour, je suis votre guide virtuel. Veuillez nous indiquer si vous êtes un homme ou une femme?Que recherchez-vous?
                    </Text>
                    </View>

                    

                    <View style={{
                        marginTop: 50,
                        marginLeft: 40,
                        flexDirection : 'row',
                    }}>
                        <Text style={{
                            color:'white',
                            marginTop: 15,
                            fontSize: 20
                        }}>
                             Je suis
                        </Text>

                        <SelectInput value={0} options={options} color = "white" style={{
                            width : 200,
                            borderWidth : 2,
                            borderColor : 'white',
                            borderRadius: 10,
                            marginLeft : 55
                        }} ></SelectInput>
                        
                        
                    </View>

                    <View style={{
                        marginTop: 50,
                        marginLeft: 40,
                        flexDirection : 'row',
                    }}>
                        <Text style={{
                            color:'white',
                            marginTop: 15,
                            fontSize: 20
                        }}>
                             Je cherche
                        </Text>

                        <SelectInput value={0} options={options} style={{
                            width : 200,
                            borderWidth : 2,
                            borderColor : 'white',
                            borderRadius: 10,
                            marginLeft : 20
                        }} ></SelectInput>
                        
                        
                    </View>

                    <View style={{ 
                        marginTop: 50,
                        marginLeft : 40
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize: 20
                        }}>
                            Nom d'utilisateur ou pseudo :</Text>

                        <TextInput  style={{
                        height : 40,
                        borderWidth: 2,
                        marginRight : 35,
                        marginTop : 10,
                        paddingHorizontal : 15,
                        color : 'white',
                        borderRadius: 10,
                        borderColor : 'white',
                        fontSize : 20
                        }}>
                        
                        </TextInput>        
                    </View>
                    <View style={{ 
                        
                        marginLeft : 40
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize: 20
                        }}>
                            Mot de passe :</Text>

                        <TextInput secureTextEntry={true}  style={{
                        height : 40,
                        borderWidth: 2,
                        marginRight : 35,
                        marginTop : 10,
                        paddingHorizontal : 15,
                        color : 'white',
                        borderRadius: 10,
                        borderColor : 'white',
                        fontSize : 20
                        }}>
                        
                        </TextInput>    
                        <View style={{height:10, width:200, marginTop:20, marginLeft:50}}>
                        <Button title='Je tente ma chance'
                            onPress={() => {}}
                            color='#e6005c'
                        ></Button>
                    </View>    
                    </View>
                    
                </View>  

                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image source={require('../img/fb.png')}></Image>
                    </TouchableOpacity>
                    
                </View> 
                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                        <Image source={require('../img/google.png')}></Image>
                    </TouchableOpacity>
                    
                </View> 

            </ScrollView>
            
        </View>
    );
}

export default Accueil
