
import { StackNavigator } from "react-navigation";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Login from "./screens/Login"
import * as firebase from 'firebase';
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUFhegkQA06EZgGBYk_PRKifSS3350cVw",
    authDomain: "mychecklist-8c32e.firebaseapp.com",
    databaseURL: "https://mychecklist-8c32e.firebaseio.com",
    projectId: "mychecklist-8c32e",
    storageBucket: "mychecklist-8c32e.appspot.com",
    messagingSenderId: "661518954739"
  };

!firebase.apps.length ? firebase.initializeApp(config) : null;
const App = StackNavigator(
  {
    TodoList: {
      screen: TodoList
    },
   AddTodo: {
      screen: AddTodo
   },
   
   Login:{
     screen:Login
   }
  },
  {
    initialRouteName: "Login",
    mode: "modal"
  }
);
export default App;
