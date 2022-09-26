import React, { useState, useContext } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { NewsContext } from '../api/context'
import SingleNews from '../screens/SingleNews'

const Search = () => {

    const { news: { articles }, } = useContext(NewsContext)

    const [searchResults, setSearchResults] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [currentNews, setCurrentNews] = useState()

    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([])
            return
        }
        setSearchResults(articles.filter((query) => query.title.includes(text)))
    }

    const handleModal = (n) => {
        setModalVisible(true)
        setCurrentNews(n)
    }

    return (
        <View style={{ width: '100%', position: 'relative' }}>
            <TextInput
                style={{
                    ...styles.search,
                    color: '#fff',
                }}
                onChangeText={(text) => handleSearch(text)}
                placeholder='Search for news'
                placeholderTextColor={'white'}
            />
            <View style={styles.searchResult}>
                {searchResults.slice(0, 10).map((n) => (
                    <TouchableOpacity
                        key={n.title}
                        activeOpacity={0.5}
                        onPress={() => handleModal(n)}
                        style={{
                            borderBottomColor: '#3b0044',
                            borderBottomWidth: 2,
                            paddingHorizontal: 2,
                            paddingVertical: 2,

                        }}
                    >
                        <Text
                            style={{
                                ...styles.singleResult,
                                backgroundColor: '#3a3042',
                                color: 'white',
                            }}
                        >
                            {n.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        right: 0,
                        margin: 20,
                    }}
                >
                    <MaterialCommunityIcons
                        name='close-circle'
                        size={24}
                        style={{ color: '#fff' }}
                    />
                </TouchableOpacity>
                <View style={{ height: '80%', }}>
                    <SingleNews item={currentNews} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15,
        backgroundColor: "#3a3042"
    },
    searchResult: {
        backgroundColor: "#3a3042",
        position: 'absolute',
        zIndex: 1,
        top: 50,
    },
})

export default Search