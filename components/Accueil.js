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

      <View>

      <ScrollView
        style={{
        backgroundColor : 'transparent',                   
      }}>

            <Image source = {require('../img/back2.png')} style={{
                    position : 'absolute',
                    top : 0,
                    left : 0,
                    right : 0,
                    bottom : 0,
                    width : Dimensions.get("window").width,
                    height : 1530
                }}></Image>
            
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
                    opacity:0.6,
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

                <View style={{
                    flexDirection:'row',
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center',
                    borderRadius: 25,
                    backgroundColor:'#00aeef',
                }}>
                    <View style={{
                        paddingVertical:40,
                        paddingLeft:40
                    }}>
                        <Image source={require('../img/icone1.png')}></Image>
                    </View>

                    <View style={{
                        paddingVertical:20,
                        paddingLeft:40,
                        alignItems:'center'
                    }}>
                        <View style={{
                            flexDirection:'row',
                            marginBottom:10
                        }}>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>2</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>8</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>6</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>6</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:2
                            }}>2</Text>
                            <Text style={{
                                backgroundColor:'white',
                                padding:7,
                                borderRadius:3,
                                marginHorizontal:3
                            }}>1</Text>
                        </View>
                        <Text style={{color:'white', fontSize:18}}>Personnes déja inscrites sur </Text>
                        <Text style={{color:'white', fontSize:18}}>Last-chance-dating </Text>
                    </View>     
                </View> 

                <View style={{
                    flexDirection:'row',
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center',
                    borderRadius: 25,
                    backgroundColor:'#00aeef',
                }}>
                    <View style={{
                        paddingVertical:20,
                        paddingLeft:40
                    }}>
                        <Image source={require('../img/icone2.png')}></Image>
                    </View>

                    <View style={{
                        paddingVertical:10,
                        paddingLeft:40,
                        alignItems:'center'
                    }}>
                        <View style={{
                            marginBottom:10,
                            alignItems:'center'
                        }}>
                            <Text style={{
                                color:'white', 
                                fontSize:30,
                                fontWeight:'bold'
                            }}>111 . 408</Text>
                               <Image source={require('../img/line2.png')}></Image>
                        </View>
                        <Text style={{color:'white', fontSize:18}}>Personnes connectées sur Last-</Text>
                        <Text style={{color:'white', fontSize:18}}>chance-dating en ce moment </Text>
                    </View>     
                </View> 

                <View style={{
                    flexDirection:'row',
                    marginTop: 20,
                    marginHorizontal: 20,
                    alignItems:'center',
                    borderRadius: 25,
                    backgroundColor:'#00aeef',
                    marginBottom:20
                }}>
                    <View style={{
                        paddingVertical:40,
                        paddingLeft:10
                    }}>
                        <Image source={require('../img/Verifi3.png')}></Image>
                    </View>
                    <View style={{
                        paddingLeft:100
                    }}>
                        <Image source={require('../img/securite.png')} style={{
                            width:100,
                            height:100
                        }}></Image>
                    </View>

                        
                </View>  
                <View style={{
                    marginHorizontal:20,
                    marginVertical:50,
                    alignItems:'center'
                    
                }}>
                    <Image source={require('../img/imgpsh_fullsize_anim.png')} style={{
                        borderRadius:10
                    }}></Image>
                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                    <View>
                        <Image source={require('../img/icone-celibataire.png')} style={{
                            marginVertical:20
                        }}></Image>

                        
                    </View>

                    
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:30
                        }}>Vous êtes célibataires?</Text>
                        <View style={{
                            marginVertical:20,
                            marginHorizontal:10,
                            alignItems:'stretch'
                        }}>
                        <Text adjustsFontSizeToFit={true} style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'justify'
                        }}>
                            Vous êtes du genre timide ? La vie de célibataire ne vous convient plus ? Vous cherchez un peu de compagnie pour casser la monotonie de vos quotidiens ? Peu importe les raisons qui vous ont poussées à sauter le pas et d’essayer les sites de rencontres, mais une chose est sure, si vous êtes sur Last-Chance-dating®, ce n’est pas par hasard et vous avez bien fait !
                        </Text>
                        <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:20
                        }}>
                            <Image source={require('../img/btn-en-savoir.png')}></Image>
                        </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                        
                    </View>
                
                </View>

                <View style={{
                    marginHorizontal:20,
                    alignItems:'center'
                    
                }}>
                    <Image source={require('../img/img2.png')} style={{
                        borderRadius:10
                    }}></Image>
                <View style={{
                    position:'absolute',
                    alignItems:'center'
                 }}>
                    <View>
                        <Image source={require('../img/icone-33.png')} style={{
                            marginVertical:10
                        }}></Image>

                        
                    </View>

                    
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:30
                        }}>Votre profil?</Text>
                        <View style={{
                            marginVertical:20,
                            marginHorizontal:10,
                            alignItems:'stretch'
                        }}>
                        <Text adjustsFontSizeToFit={true} style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'justify'
                        }}>
                            Ça y est, vous avez enfin décidé de prendre les choses en main et de partir à la conquête de l’amour, ou une histoire éphémère ? Avant de vous inscrire sur Last-Chance-dating®, vous devez penser à bien remplir votre profil, mais ce n’est pas chose facile. Qu’est-ce que vous allez y mettre ? Quelles sont les choses essentielles à écrire sur vous pour vous mettre en valeur
                        </Text>
                        <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:20
                        }}>
                            <Image source={require('../img/btn-en-savoir.png')}></Image>
                        </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                        
                    </View>
                
                </View>

                <View style={{
                    marginHorizontal:20,
                    alignItems:'center',
                    marginVertical:50
                    
                }}>
                    <Image source={require('../img/img3.png')} style={{
                        borderRadius:10
                    }}></Image>
                    <View style={{
                        position:'absolute',
                        alignItems:'center'
                    }}>
                    <View>
                        <Image source={require('../img/icone-help.png')} style={{
                            marginVertical:10
                        }}></Image>

                        
                    </View>

                    
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:30
                        }}>Comment ça marche?</Text>
                        <View style={{
                            marginVertical:20,
                            marginHorizontal:10,
                            alignItems:'stretch'
                        }}>
                        <Text adjustsFontSizeToFit={true} style={{
                            color:'white',
                            fontSize:20,
                            textAlign:'justify'
                        }}>
                            Last-Chance-dating® vient récemment de faire son entrée en scène en se plaçant aux côtés des sites de rencontre en ligne sérieux les plus réputés. Nous visons très haut en proposant aux célibataires, un accompagnement et une assistance complète dès leur inscription, jusqu’à la conclusion finale qui les a amenés sur notre site. Un coach en séduction efficace et sympathique...
                        </Text>
                        <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:15
                        }}>
                            <Image source={require('../img/btn-en-savoir.png')}></Image>
                        </TouchableOpacity>
                        </View> 
                    </View>  
                    </View>
                </View>

                <View style={{
                    marginHorizontal:10,
                    backgroundColor:'#bdb8b8',
                    alignItems:'center'
                }}>
                    <Image source={require('../img/img-block2.png')} style={{
                        height:800,
                        width:Dimensions.get("window").width-10,
                        opacity:0.3
                    }}>
                    </Image>
                    <View style={{
                        position:'absolute'
                    }}>
                    <Text style={{
                        marginVertical:40,
                        fontSize:30,
                        fontWeight:'bold',
                        textAlign:'center'
                    }}>
                        Last Chance Dating
                    </Text>
                    <Text style={{
                        color:'#c1edff',
                        fontSize:35,
                        fontWeight:'bold',
                        textAlign:'center'
                    }}>
                        Un Site de rencontre
                    </Text>
                    <View style={{
                        marginHorizontal:20,
                        marginTop:20,
                        
                    }}>
                    <View style={{
                        borderBottomWidth:2,
                        borderBottomColor:'#2faadd'
                    }}>
                    <Text style={{
                        textAlign:'center',
                        fontSize:21,
                        marginBottom:20
                    }}>
                        SITE DE RENCONTRES POUR LES CELIBATAIRES QUI ONT BESOIN DE CONSEILS DES PROFESSIONNELS EN SEDUCTION
                    </Text>
                    </View>
                    
                    </View>
                    <View style={{
                        marginTop:20,
                        marginHorizontal:20
                    }}>
                        <Text style={{
                            fontSize:22,
                            textAlign:'justify'
                        }}>
                            Lancé récemment sur le marché des love dating ou rencontres amoureuse, last-chance-dating.com est un site de rencontre sérieux à fortes potentialités qui déploie une large gamme de fonctionnalités pour vous permettre de trouver la perle rare en un temps record! Plonger au coeur de last-chance-dating.com, découvrer tous nos professionnels en séduction qui vont vous aider à franchir le pas. Vous pourriez enfin dire à dieu votre vie de célibataire...dès aujourd'hui
                        </Text>
                        <TouchableOpacity style={{
                            alignItems:'center',
                            marginTop:15
                        }}>
                            <Image source={require('../img/btn-en-savoir.png')}></Image>
                        </TouchableOpacity>
                    </View>  
                    </View>
                    
                                      
                </View>  
                <Text>Suite...</Text>
            </ScrollView>

            </View>

            <View>
            
            </View>
            
        </View>
    );
}

export default Accueil

