import { StyleSheet } from 'react-native';

export const stylesSkill = StyleSheet.create({
    containerFull: {
        backgroundColor: '#dedafb',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cotact: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cotactText: {
        fontSize: 20,
        fontWeight:"bold",
        marginTop:30,
    },
    skills:{
        padding:6,
        flexDirection:"row",
        gap:10,
        width:"70%",
    },
    skillText:{
        fontSize:18,
        fontWeight:"700",
        fontStyle:"italic",
        width:"40%",
    },
    skillUnion:{
        flexDirection:"row",
        gap:5,
        width:"60%",
    }
    ,
});
