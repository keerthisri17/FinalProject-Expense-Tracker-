# FinalProject-Expense-Tracker-
Expense Tracker App
Expense tracking made easy with this React Native application. In addition to seeing an expenditure list, it enables users to enter additional costs.

Features
Include a new expense with a name and a sum.
See a complete list of each expense.

Installation
1. Create a Repository
2. Navigate the project directory
3. Install the dependencies

Running the App
1. npx react-native start
2. npx react-native run-ios

Components
App.js
This is the main part that configures the navigation and controls the status of the expenses.
screens/HomeScreen.js
This app's home screen has buttons to access the "Add Expense" and "View Expenses" panels.
screens/AddExpenseScreen.js
Users can add new costs to the list of expenses by entering the expense's title and amount on this screen.
screens/ViewExpenseScreen.js
This screen uses the FlatList component from React Native to provide a list of all the costs that the user has entered.
components/ExpenseItem.js
A reusable part that generates a unique expenditure item together with its amount and title.

Dependencies:
	
•	@react-navigation/native
•	@react-navigation/stack
•	react-native-gesture-handler
•	react-native-reanimated
•	react-native-screens
•	react-native-safe-area-context

Future Improvements:
Provide an option to amend and remove expenditures.
Enhance the UI and style; 
Add date and category filters for spending; 
Establish data persistence (e.g., using AsyncStorage or a database);
