import React from 'react';
import { FlatList, View, StyleSheet, Text, Image, Button, Pressable } from 'react-native';

const styles = StyleSheet.create({
 separator: {
    height: 10,
 },
 item: {
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
 },
 top: {
    display: 'flex',
    flexDirection: 'row'
 },


 itemText: {
    fontSize: 16,
 },
 avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
 },

 name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
 },
 content: {
    marginBottom: 9,
    fontSize: 15,
    maxWidth: '90%',
 },
 btn: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'blue',
    maxWidth: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
 },
 btnText: {
    color: 'white',
    fontWeight: 'bold'
 },
 flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
 }
});

const repositories = [
 {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
 },
 {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
 },
 {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
 },
 {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
 },
];

const ItemSeparator = () => <View style={styles.separator} />;

// const renderItem = ({ item }) => (
//  <View style={styles.item}>
//     <Text style={styles.itemText}>{item.fullName}</Text>
//     <Text style={styles.itemText}>{item.description}</Text>
//     <Image source={{uri: item.ownerAvatarUrl}} style={styles.avatar} />
//  </View>
// );

const renderItem = ({ item }) => (
    <View style={styles.item}>
        <View style={styles.top}>
            <Image source={{uri: item.ownerAvatarUrl}} style={styles.avatar} />
            <View>
                 <Text style={styles.name}>{item.fullName}</Text>
                 <Text style={styles.content}>{item.description}</Text>
                 <Pressable style={styles.btn}>
                     <Text style={styles.btnText}>{item.language}</Text>
                 </Pressable>
            </View>
        </View>
        <View style={styles.flex}>
             <Text>{item.stargazersCount}</Text>
             <Text>{item.forksCount}</Text>
             <Text>{item.ratingAverage}</Text>
        </View>
    </View>
)

const RepositoryList = () => {
 return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListEmptyComponent={<Text>Aucun dépôt trouvé.</Text>}
    />
 );
};

export default RepositoryList;
