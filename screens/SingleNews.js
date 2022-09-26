import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const SingleNews = ({ item, index }) => {

    return (
        <View style={{
            height: height,
            width: width,
            // transform: [{ scaleY: 1 }]
        }}>
            <Image
                source={{ uri: item.urlToImage }}
                style={{
                    height: '45%',
                    resizeMode: 'cover',
                    width: width
                }}
            />
            <View style={{
                ...styles.description, backgroundColor: '#282C35'
            }}>
                <Text style={{ ...styles.title, color: '#fff' }}>{item.title}</Text>
                <Text style={{ ...styles.content, color: '#fff' }}>{item.description}</Text>
                <Text style={{ color: '#fff' }}>
                    AUTHOR: {item.author ?? "- UNK -"}
                </Text>
                <ImageBackground
                    blurRadius={30}
                    source={{ uri: item.urlToImage }}
                    style={styles.footer}>
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={{ fontSize: 15, color: '#fff' }}> '{item?.content?.slice(0, 45)}...' </Text>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#fff' }}>Read More...</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingHorizontal: 10
    },
    content: {
        fontSize: 18,
        paddingBottom: 10,
        paddingHorizontal: 10
    },
    footer: {
        height: 80,
        width: width,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: '#d7be69',
    },
    description: {
        padding: 15,
        flex: 1
    }
})

export default SingleNews