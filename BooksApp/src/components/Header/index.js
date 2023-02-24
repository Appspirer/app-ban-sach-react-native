import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Header({ leftIcon, onLeftPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.ic} onPress={ onLeftPress ? onLeftPress : null}>
                {leftIcon ? leftIcon : Icons.Icons({ name: "menu", height: 16, width: 19 })}
            </TouchableOpacity>
            <View style={styles.title_container}>
                <Text style={styles.title}>Design Books</Text>
            </View>
            <TouchableOpacity style={styles.ic}>
                {Icons.Icons({ name: "search", height: 19, width: 19 })}
            </TouchableOpacity>
        </View>
    )
}