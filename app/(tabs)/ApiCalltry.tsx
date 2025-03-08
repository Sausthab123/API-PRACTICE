import {View,Text} from 'react-native'
import React, {useEffect} from 'react'
import {MyFetchGetRequest, MyFetchPostRequest} from './MyFetchApiRequests'

const apple = () =>{
    useEffect (() =>{
       getData()
    
    },  
    [])

    const getData = async() =>{
        //const res = await MyFetchGetRequest()
        const data = {
            title: 'samyam',
            body: 'raju',
            userId: 2,
        }
        const res = await MyFetchPostRequest(data)
        console.log('data: ',res);
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold',color:"white" }}>Apple</Text>
        </View>
    )
}
export default apple;