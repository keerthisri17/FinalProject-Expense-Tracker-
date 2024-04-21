import React from "react";
import { View, Text } from "react-native";
export default function ExpenseItem({title, amount}){
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between', width:'95%', marginHorizontal:'auto'}}>
            <Text>{title}</Text>
            <Text>{amount}</Text>
        </View>
    )
}