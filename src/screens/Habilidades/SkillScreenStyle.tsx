import { StyleSheet } from 'react-native';

export const stylesSkill = StyleSheet.create({
    containerFull: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cotact: {
        alignItems: 'center',
        justifyContent: 'center',

        borderColor: 'white',
        borderWidth: 2,
    },
    cotactText: {
        fontSize: 20,
        fontWeight:"bold",
    },
    skills:{
        padding:6,
        flexDirection:"row",
        gap:10,

        width:"70%",
        borderColor: 'green',
        borderWidth: 2,
    },
    skillText:{
        fontSize:18,
        fontWeight:"600",
        fontStyle:"italic",
        width:"40%",
        
    },
    skillUnion:{
        flexDirection:"row",
        borderColor: 'blue',
        borderWidth: 2,
        gap:5,
        width:"60%",

    }
    ,
});
