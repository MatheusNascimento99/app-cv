import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { stylesSkill } from './SkillScreenStyle';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SkillScreen = () => {
    return (
        <View style={stylesSkill.containerFull}>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>Typescript</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star-half-empty"size={22} color="yellow"/>
                    <FontAwesome name="star-o" size={22} color="yellow" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>HTML</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>Css / Saas</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star-half-empty"size={22} color="yellow"/>
                    <FontAwesome name="star-o" size={22} color="yellow" />

                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>React</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star-half-empty"size={22} color="yellow"/>
                    <FontAwesome name="star-o" size={22} color="yellow" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>R. Native</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star-half-empty"size={22} color="yellow"/>
                    <FontAwesome name="star-o" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>Dotnet</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                </View>
            </View>
            <View style={stylesSkill.skills}>
                <Text style={stylesSkill.skillText}>Node</Text>
                <View style={stylesSkill.skillUnion}>
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                    <FontAwesome name="star-o" size={22} color="yellow" />
                </View>
            </View>
            <View style={stylesSkill.cotact}>
                <Text style={stylesSkill.cotactText}>Entre em Contato!</Text>
                <a target="_blank" href="https://wa.link/ogi4l3">
                    <FontAwesome5
                        name="whatsapp-square"
                        size={42}
                        color="#06CF9C"
                    />
                </a>
            </View>
        </View>
    );
};

export default SkillScreen;
