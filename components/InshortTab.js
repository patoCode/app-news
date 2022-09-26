import React, { useContext, useState } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import { NewsContext } from '../api/context'
import DiscoverScreen from '../screens/DiscoverScreen'
import NewScreen from '../screens/NewScreen'
import TopNavigation from './TopNavigation'




const InshortTab = () => {
    const layout = useWindowDimensions()

    //const [index, setIndex] = useState(1)
    const { index, setIndex } = useContext(NewsContext)

    const [routes] = useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' }
    ])
    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewScreen
    })

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
        />
    )
}

export default InshortTab