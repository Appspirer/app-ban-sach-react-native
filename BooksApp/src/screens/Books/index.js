import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Header from "../../components/Header";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        img: Images.b1
    },
    {
        id: 1,
        img: Images.b2
    },
    {
        id: 2,
        img: Images.b3
    },
    {
        id: 3,
        img: Images.b4
    },
    {
        id: 4,
        img: Images.b5
    },
    {
        id: 5,
        img: Images.b6
    },
    {
        id: 6,
        img: Images.b7
    },
    {
        id: 7,
        img: Images.b8
    },
    {
        id: 8,
        img: Images.b9
    },
    {
        id: 9,
        img: Images.b10
    },
    {
        id: 10,
        img: Images.b11
    },
    {
        id: 11,
        img: Images.b12
    },
]

export default function Books({ navigation }) {
    const [listPosition, setListPosition] = useState([])

    const getPosition = (nativeEvent, item) => {
        let arr = listPosition
        let positionItem = {
            id: item.id,
            height: nativeEvent.layout.height,
            width: nativeEvent.layout.width,
            x: nativeEvent.layout.x,
            y: nativeEvent.layout.y,
            img: item.img
        }
        arr = arr.concat(positionItem)
        setListPosition(arr)
    }

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                style={styles.list}
                data={data}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => navigation.navigate("Details", { data: listPosition.filter(_ => _.id === item.id) })}
                            onLayout={({ nativeEvent }) => getPosition(nativeEvent, item = item)}
                        >
                            <Image source={item.img} style={styles.img} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}