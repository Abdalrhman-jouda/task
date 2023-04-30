import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

const ShopPage = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleAddItem = () => {
    if (text.trim() === '') {
      Alert.alert('Error', 'Please enter an item');
      return;
    }
    setItems([...items, { key: Math.random().toString(), name: text }]);
    setText('');
  };

  const handleDeleteItem = (key) => {
    const filteredItems = items.filter((item) => item.key !== key);
    setItems(filteredItems);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <TextInput
          style={{ flex: 1, marginRight: 10 }}
          placeholder="Enter item name"
          onChangeText={(value) => setText(value)}
          value={text}
        />
        <Button title="Add" onPress={handleAddItem} />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <Text style={{ flex: 1 }}>{item.name}</Text>
            <Button title="Delete" onPress={() => handleDeleteItem(item.key)} />
          </View>
        )}
      />
    </View>
  );
};

export default ShopPage;
