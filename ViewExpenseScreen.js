// screens/ViewExpensesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ExpenseItem from '../ExpenseItem';

const ViewExpenseScreen = ({ expenses }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>View Expenses</Text>
        <FlatList
          data={expenses}
          renderItem={({ item }) => <ExpenseItem title={item.title} amount={item.amount} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ViewExpenseScreen;