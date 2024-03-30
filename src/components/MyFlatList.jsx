import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const data = [
 { id: '1', text: 'Item 1' },
 { id: '2', text: 'Item 2' },
 { id: '3', text: 'Item 3' },
 // Ajoutez autant d'éléments que nécessaire
];

const Item = ({ item }) => (
 <View style={styles.item}>
    <Text style={styles.itemText}>{item.text}</Text>
 </View>
);

const MyFlatList = () => {
 const renderItem = ({ item }) => <Item item={item} />;

 return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
 );
};

const styles = StyleSheet.create({
 item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
 },
 itemText: {
    fontSize: 16,
 },
});

export default MyFlatList;
