import React, { useContext, useState } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { NewsContext } from '../api/context'
import SingleNews from './SingleNews'

const NewScreen = () => {

    const { news: { articles } } = useContext(NewsContext)
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    const [activeIndex, setActiveIndex] = useState()

    return (
        <View style={styles.carousel}>
            {articles && (
                <Carousel
                    loop
                    width={windowWidth}
                    height={windowHeight}
                    autoPlay={false}
                    data={articles}
                    vertical={true}
                    renderItem={({ item, index }) => (
                        <SingleNews index={index} item={item} />
                    )}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: '#007fff',
    },
})

export default NewScreen