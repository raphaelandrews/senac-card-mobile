import React from 'react';
import { View, ScrollView } from 'react-native';
import CardItem from './components/card-item';

const cardItems = [
  {
    title: 'Stewed cabbage with sauce',
    image: require('./assets/cabbage.jpg'),
    price: 5.90,
  },
  {
    title: 'Puree soup wih turkey pieces',
    image: require('./assets/puree.jpg'),
    price: 7.55,
  },
  {
    title: 'Chicken with vegetables',
    image: require('./assets/chicken.jpg'),
    price: 3.39,
  },
];

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {cardItems.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
