import React, { useContext } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NewsContext } from '../api/context'
import { categories, sources } from '../api/api'
import Carousel from 'react-native-reanimated-carousel'
import Search from '../components/Search'

const DiscoverScreen = () => {

    const windowWidth = Dimensions.get('window').width
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5)

    const { setCategory, setSources } = useContext(NewsContext)
    return (
        <View style={styles.discover}>
            {/* search */}
            <Search />
            {/* categories */}
            <Text style={{ ...styles.subtitle, color: 'white' }}>Categories</Text>
            <Carousel
                style={{
                    width: '100%'
                }}
                loop
                width={SLIDE_WIDTH}
                height={90}
                pagingEnabled={true}
                snapEnabled={true}
                scrollAnimationDuration={1000}
                data={categories}
                autoPlay={false}
                autoPlayReverse={true}
                customConfig={() => ({ type: 'positive' })}
                renderItem={
                    ({ item, index }) => (
                        <TouchableOpacity
                            style={{
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                margin: 10,
                                height: 80,
                            }}
                            onPress={() => setCategory(item.name)}
                        >
                            <Image
                                source={{ uri: item.pic }}
                                style={styles.categoryImg}
                            />
                            <Text style={{ ...styles.name, color: '#fff' }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                }
            />
            <Text style={{ ...styles.subtitle, color: '#fff' }} >
                SOURCES
            </Text>
            <View style={styles.sources}>
                {sources.map((s) => (
                    <TouchableOpacity
                        onPress={() => setSources(s.id)}
                        key={s.id}
                        style={styles.sourceContainer}
                    >
                        <Image source={{ uri: s.pic }} style={{ ...styles.sourceImg }} />
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: '#007fff',
        borderBottomWidth: 5,
        alignSelf: 'flex-start',
        borderRadius: 10,
    },
    categoryImg: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    name: {
        fontSize: 14,
        textTransform: 'capitalize'
    },
    sources: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    sourceContainer: {
        height: 150,
        width: '40%',
        borderRadius: 10,
        margin: 15,
        backgroundColor: '#cc313d'
    },
    sourceImg: {
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
    },
})

export default DiscoverScreen