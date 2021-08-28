import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native';

function User1(){
    return(
        <View>
            <ScrollView style={{
                    backgroundColor : 'transparent',                   
            }}>

            <View style={{
                        flexDirection:'row', 
                        backgroundColor:'#f8f9fa',
                        opacity: 0.7,
                        height:130,
                        alignItems:'center'
            }}>
                <Image
                        source={require('../../img/recherche.png')}
                        style={{
                            marginLeft:50,
                            width:40,
                            height:40
                        }}
                    >
                    </Image>

                    <Image
                        source={require('../../img/msg.png')}
                        style={{
                            marginHorizontal:50,
                            width:40,
                            height:40
                        }}
                    >
                    </Image>

                    <Image
                        source={require('../../img/Membre.png')}
                        style={{
                            
                            width:50,
                            height:40
                        }}
                    >
                    </Image>

            </View>

            <View style={{
                    flexDirection:'row', 
                    marginVertical:20,
                    justifyContent:'center'
                }}>

                <Image source={require('../../img/vip.png')} style={{
                        width:75,
                        height:50
                }}></Image>

                <View style={{
                    flexDirection: 'column',
                    alignItems:'center'
                }}>
                    <Text style={{marginHorizontal:40,fontSize:30}}>Devenez V.I.P</Text>
                    <Image source={require('../../img/couronne.png')} style={{
                        width:75,
                        height:50
                    }}></Image>
                </View>
            </View>

            <View style={{
                    flexDirection:'row',
                    marginVertical:20,
                    marginHorizontal:12
                }}>

            <ScrollView horizontal={true}>
                <View>
                <Image source={require('../../img/profile.jpg')} style={{
                        width:130,
                        height:230,
                        borderRadius:25,
                        marginHorizontal:5
                }}></Image>

                    <View style={{
                        position:'absolute',
                        marginTop:100,
                        
                    }}>
                    <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20
                    }}>Nutellasucrée</Text>

                        <Text style={{
                            marginTop:15,
                            color:'white',
                            marginLeft:20,
                            
                        }}>Toulouse</Text>

                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20,
                        }}>France</Text>

                        <View style={{
                            flexDirection:'row',
                            marginTop:15
                        }}>
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:10,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
                </View>

                <View>
                <Image source={require('../../img/profile.jpg')} style={{
                        width:130,
                        height:230,
                        borderRadius:25,
                        marginHorizontal:5
                }}></Image>

                    <View style={{
                        position:'absolute',
                        marginTop:100,
                        
                    }}>
                    <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20
                    }}>Nutellasucrée</Text>

                        <Text style={{
                            marginTop:15,
                            color:'white',
                            marginLeft:20,
                            
                        }}>Toulouse</Text>

                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20,
                        }}>France</Text>

                        <View style={{
                            flexDirection:'row',
                            marginTop:15
                        }}>
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:10,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
                </View>
                <View>
                <Image source={require('../../img/profile.jpg')} style={{
                        width:130,
                        height:230,
                        borderRadius:25,
                        marginHorizontal:5
                }}></Image>

                    <View style={{
                        position:'absolute',
                        marginTop:100,
                        
                    }}>
                    <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20
                    }}>Nutellasucrée</Text>

                        <Text style={{
                            marginTop:15,
                            color:'white',
                            marginLeft:20,
                            
                        }}>Toulouse</Text>

                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20,
                        }}>France</Text>

                        <View style={{
                            flexDirection:'row',
                            marginTop:15
                        }}>
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:10,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:5,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
                   
                </View> 
                
            </ScrollView>        
            
            </View>
            <View>
                <Text style={{marginLeft:20, fontSize:30, fontWeight:'bold'}}>En ligne</Text>
            </View>

            <View style={{
                alignItems:'center',
                height:50,
                marginTop:12
            }}>
                
                <Image source={require('../../img/Button_enable.png')} style={{
                    position:'absolute',
                    
                }}></Image>
                <Text style={{
                    marginTop:12,
                    color:'#e70083',
                    fontWeight:'bold'
                }}>Près de votre région</Text>
            </View>

            <View style={{
                alignItems:'center',
                height:50
            }}>
                
                <Image source={require('../../img/Boutton_disable.png')} style={{
                    position:'absolute',
                    
                }}></Image>
                <Text style={{
                    marginTop:5,
                    color:'#007bff',
                    fontWeight:'bold'
                }}>Vos personnalités</Text>
            </View>

            <View style={{
                marginTop:-20,
                alignItems:'center',
                height:50,
            }}>
                <Image source={require('../../img/voir_tous.png')} style={{
                    
                }}></Image>
                
            </View>

            <ScrollView horizontal={true}>

            <View style={{
                marginLeft:20,
                marginTop:10
            }}>
                <Image source={require('../../img/profile2.jpg')} style={{
                        borderRadius:5,
                        width:170,
                        height:230,
                        marginHorizontal:5
                }}></Image>

                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>

                            <Image source={require('../../img/triangle_femme.png')} style={{
                                width:40,
                                height:40,
                                marginLeft:135
                            }}></Image>
                        </View>
                    <Text style={{
                            marginTop:65,
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20
                    }}>Isalsa</Text>

                        <Text style={{
                            marginTop:15,
                            color:'white',
                            marginLeft:20,
                            
                        }}>Toulouse</Text>

                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20,
                        }}>France</Text>

                        <View style={{
                            flexDirection:'row',
                            marginTop:15
                        }}>
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
                </View>

            <View style={{
                marginLeft:20,
                marginTop:10
            }}>
                <Image source={require('../../img/profile3.png')} style={{
                        borderRadius:5,
                        width:170,
                        height:230,
                        marginHorizontal:5
                }}></Image>

                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>
                            
                            <Image source={require('../../img/triangle_femme.png')} style={{
                                width:40,
                                height:40,
                                marginLeft:135
                            }}></Image>
                        </View>
                    <Text style={{
                            marginTop:65,
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20
                    }}>Isalsa</Text>

                        <Text style={{
                            marginTop:15,
                            color:'white',
                            marginLeft:20,
                            
                        }}>Toulouse</Text>

                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20,
                        }}>France</Text>

                        <View style={{
                            flexDirection:'row',
                            marginTop:15
                        }}>
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
                </View>

            <View style={{
                marginLeft:20,
                marginTop:10
            }}>
                <Image source={require('../../img/profile4.jpg')} style={{
                        borderRadius:5,
                        width:170,
                        height:230,
                        marginHorizontal:5
                }}></Image>

                    <View style={{
                        position:'absolute',
                        
                    }}>
                        <View style={{
                            flexDirection:'row'
                        }}>

                            <Image source={require('../../img/triangle_femme.png')} style={{
                                width:40,
                                height:40,
                                marginLeft:135
                            }}></Image>
                        </View>
                    <Text style={{
                            marginTop:65,
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20
                    }}>Isalsa</Text>

                        <Text style={{
                            marginTop:15,
                            color:'white',
                            marginLeft:20,
                            
                        }}>Toulouse</Text>

                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:20,
                        }}>France</Text>

                        <View style={{
                            flexDirection:'row',
                            marginTop:15
                        }}>
                            <Image source={require('../../img/Coeur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/message_vip.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                            <Image source={require('../../img/fleur_new.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:40
                            }}></Image>
                            <Image source={require('../../img/Kiss.png')} style={{
                                marginLeft:15,
                                width:25,
                                height:20
                            }}></Image>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View>
                <Text style={{marginTop:20,marginLeft:20, fontSize:30, fontWeight:'bold', color:'#007bff'}}>Membres</Text>
            </View>
        
            

            </ScrollView>
        </View>
    );
}

export default User1