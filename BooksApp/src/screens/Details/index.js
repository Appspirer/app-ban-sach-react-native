import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

var { height, width } = Dimensions.get('window')

export default function Details({ navigation, route }) {
    const { data } = route.params
    const [favorite, setFavorite] = useState(false)
    const favoriteBorder = useRef(new Animated.Value(36)).current
    const heartWidth = useRef(new Animated.Value(17)).current
    const heartHeight = useRef(new Animated.Value(15)).current
    const info = useRef(new Animated.Value(width)).current
    const content = useRef(new Animated.Value(height)).current
    const imgPositionX = useRef(new Animated.Value(parseInt(data[0].id % 3) * (data[0].width + 16))).current
    const imgPositionY = useRef(new Animated.Value(10 + parseInt((data[0].id + 1) / 3.1) * (data[0].height + 16))).current

    useEffect(() => {
        if (favorite) {
            Animated.timing(favoriteBorder, {
                toValue: 46,
                duration: 200,
                useNativeDriver: false
            }).start()
            Animated.timing(heartWidth, {
                toValue: 27,
                duration: 200,
                useNativeDriver: false
            }).start()
            Animated.timing(heartHeight, {
                toValue: 25,
                duration: 200,
                useNativeDriver: false
            }).start()
            setTimeout(() => {
                Animated.timing(favoriteBorder, {
                    toValue: 36,
                    duration: 200,
                    useNativeDriver: false
                }).start()
                Animated.timing(heartWidth, {
                    toValue: 17,
                    duration: 200,
                    useNativeDriver: false
                }).start()
                Animated.timing(heartHeight, {
                    toValue: 15,
                    duration: 200,
                    useNativeDriver: false
                }).start()
            }, 200)
        }
        Animated.timing(imgPositionX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
        Animated.timing(imgPositionY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
        setTimeout(() => {
            Animated.timing(info, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start()
            Animated.timing(content, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true
            }).start()
        }, 300)
    }, [favorite])

    const renderRating = (rate) => {

        const arrB = [...Array(rate).keys()]
        const arrY = [...Array(5 - rate).keys()]

        return (
            <View style={styles.rating_container}>
                {arrB.map((item, index) => {
                    return (
                        <View key={index} style={styles.star}>
                            {Icons.Icons({ name: "star_b", height: 13.31, width: 14 })}
                        </View>
                    )
                })}
                {arrY.map((item, index) => {
                    return (
                        <View key={index} style={styles.star}>
                            {Icons.Icons({ name: "star_y", height: 13.31, width: 14 })}
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Header
                    leftIcon={Icons.Icons({ name: "arrowb", height: 11, width: 20 })}
                    onLeftPress={() => navigation.goBack()}
                />
                <View style={styles.top_row}>
                    <View style={styles.top_info}>
                        <Animated.View style={[styles.img_container, { transform: [{ translateX: imgPositionX }, { translateY: imgPositionY }] }]}>
                            <Image source={data[0].img} style={styles.img} />
                        </Animated.View>
                        <Animated.View style={[styles.info_container,{transform:[{translateX:info}]}]}>
                            <Text style={styles.name}>Logo Design Love:</Text>
                            <Text style={styles.name}>A Guide to Creating Iconic Brand Identities</Text>
                            <Text style={styles.auth}>by David Airey</Text>
                            <View style={styles.rate_container}>
                                <Text style={styles.price}>$9.99</Text>
                                {renderRating(4)}
                            </View>
                        </Animated.View>
                    </View>
                    <Animated.View style={[styles.top_row_bottom,{transform:[{translateX:info}]}]}>
                        <Text style={styles.page}>216 pages</Text>
                        <View style={styles.buy_container}>
                            <TouchableOpacity style={styles.buy_button}>
                                <Text style={styles.buy_text}>BUY IT NOW</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setFavorite(!favorite)} style={styles.favorite_container}>
                                <Animated.View style={[styles.favorite, {
                                    height: favoriteBorder,
                                    width: favoriteBorder
                                }]} >
                                    <Animated.Image source={favorite ? Images.heart_active : Images.heart} style={{ height: heartHeight, width: heartWidth }} />
                                </Animated.View>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>
            </View>
            <ScrollView style={styles.content_container} showsVerticalScrollIndicator={false}>
                <Animated.Text style={[styles.content,{transform:[{translateY:content}]}]}>
                    Completely updated and expanded, the second edition of David Airey's Logo Design Love contains more of just about everything that made the first edition so great: more case studies, more sketches, more logos, more tips for working with clients, more insider stories, and more practical information for getting the job and getting it done right.

                    In Logo Design Love, David shows you how to develop an iconic brand identity from start to finish, using client case studies from renowned designers. In the process, he reveals how designers create effective briefs, generate ideas, charge for their work, and collaborate with clients. David not only shares his personal experiences working on identity projects - including sketches and
                </Animated.Text>
            </ScrollView>
            <View style={{ height: 30 }} />
        </View>
    )
}