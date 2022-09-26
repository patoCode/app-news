
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NewsContext } from '../api/context'


const TopNavigation = ({ index, setIndex }) => {

    const { getDataApi } = useContext(NewsContext)

    return (
        <View style={{ ...styles.container, backgroundColor: '#282c35' }}>
            {index === 0 ?
                (<TouchableOpacity style={styles.left}>
                    <Text>
                        <MaterialCommunityIcons
                            name='theme-light-dark'
                            size={24}
                            color='#007fff'
                        />
                    </Text>
                </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.left}
                        onPress={() => setIndex(index === 0 ? 1 : 0)}
                    >
                        <MaterialCommunityIcons
                            name='arrow-left'
                            size={24}
                            color='#007fff'
                        />
                        <Text style={{ ...styles.text, color: 'lightgrey' }}>Discover</Text>
                    </TouchableOpacity>

                )}
            <Text style={{ ...styles.center, color: 'white' }}>
                {index ? 'ALL NEWS' : 'DISCOVER'}
            </Text>
            {index ? (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => getDataApi('general')}
                >
                    <Text style={styles.text}>
                        <MaterialCommunityIcons
                            name='reload'
                            size={24}
                            color='#007fff'
                        />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <Text style={{ ...styles.text, color: 'white' }}> ALL NEWS</Text>
                    <MaterialCommunityIcons
                        name='arrow-right'
                        size={24}
                        color='#007fff'
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: 'violet',
        borderBottomWidth: 0.5,
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: '#007fff',
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '700'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-between'
    },
    right: {
        width: 80,
        alignItems: 'flex-end'
    },
    text: {
        fontSize: 16,
    }
})

export default TopNavigation