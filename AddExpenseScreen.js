import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddExpenseScreen = ({addExpense}) => {
    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
  
    const handleAddExpense = () => {
      const newExpense = {
        id: Date.now(),
        title: expenseTitle,
        amount: parseFloat(expenseAmount),
      };
      addExpense(newExpense);
      setExpenseTitle('');
      setExpenseAmount('');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Expense Title"
        value={expenseTitle}
        onChangeText={setExpenseTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Expense Amount"
        value={expenseAmount}
        onChangeText={setExpenseAmount}
        keyboardType="numeric"
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default AddExpenseScreen;