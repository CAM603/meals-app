import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = (props) => {
  
  return (
    <View style={styles.screen}>
      <Text>HI</Text>
      <Button title="Go To Meal Details" onPress={() => {
        props.navigation.navigate('MealDetail')
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;