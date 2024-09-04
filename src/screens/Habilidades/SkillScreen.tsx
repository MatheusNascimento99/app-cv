import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { stylesSkill } from './SkillScreenStyle';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';

const SkillScreen = () => {
    return (
        <View style={stylesSkill.containerFull}>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>Typescript</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome
                        name="star-half-empty"
                        size={22}
                        color="#4EB1CD"
                    />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>HTML</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>Css / Saas</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome
                        name="star-half-empty"
                        size={22}
                        color="#4EB1CD"
                    />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>React</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome
                        name="star-half-empty"
                        size={22}
                        color="#4EB1CD"
                    />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>R. Native</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome
                        name="star-half-empty"
                        size={22}
                        color="#4EB1CD"
                    />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>Dotnet</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>Node</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                    <FontAwesome name="star-o" size={22} color="#4EB1CD" />
                </View>
            </View>
            <View >
                <TouchableOpacity style={stylesSkill.cotact} onPress={()=> Linking.openURL("https://wa.link/ogi4l3")}>
                    <Text style={stylesSkill.cotactText}>
                        Entre em Contato!
                    </Text>
                    <FontAwesome5
                        name="whatsapp-square"
                        size={42}
                        color="#4EB1CD"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SkillScreen;

