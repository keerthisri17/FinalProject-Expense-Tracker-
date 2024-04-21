// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import ViewExpenseScreen from './screens/ViewExpenseScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddExpense">
          {(props) => <AddExpenseScreen {...props} addExpense={addExpense} />}
        </Stack.Screen>
        <Stack.Screen name="ViewExpenses">
          {(props) => <ViewExpenseScreen {...props} expenses={expenses} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;