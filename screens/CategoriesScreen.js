import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id
          })
        }}
      />
    )
  }

  return (
    <FlatList 
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2}
      keyExtractor={(item, index) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});

export default CategoriesScreen;