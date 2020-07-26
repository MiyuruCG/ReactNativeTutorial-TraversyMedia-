import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from './components/ListItem'
import Header from "./components/Header";


const App = () => {

  const [items, setItems] = useState([
    { id: Math.random(), text: 'Milk' },
    { id: Math.random(), text: 'Eggs' },
    { id: Math.random(), text: 'Juice' },
    { id: Math.random(), text: 'Bread' }
  ]);

  const deleteItem = (id) => {
    setItems(previousItem => {
      return previousItem.filter(item => item.id != id);
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item}
          deleteItem={deleteItem}
        />}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }

});

export default App;