import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const ShoppingPage = () => {
  const [rows, setRows] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddRow = () => {
    if (newItem.trim() === '') {
      Alert.alert('Error', 'Item name cannot be empty!', [{ text: 'OK', style: 'destructive' }]);
      return;
    }

    const newRow = { id: Date.now().toString(), item: newItem };
    setRows([...rows, newRow]);
    setNewItem('');
  };

  const handleDeleteRow = (id) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  };

  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Shopping List</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add item"
            value={newItem}
            onChangeText={setNewItem}
          />
          <Button title="Add" color="#8a2be2" onPress={handleAddRow} />
        </View>

        {rows.length === 0 ? (
          <Text style={styles.emptyText}>No items added yet</Text>
        ) : (
          <View>
            {rows.map((row) => (
              <View key={row.id} style={styles.row}>
                <Text style={styles.item}>{row.item}</Text>
                <Button title="Delete" color="#ff0000" onPress={() => handleDeleteRow(row.id)} />
              </View>
            ))}
          </View>
        )}
      </View>
   
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  emptyText: {
    fontStyle: 'italic',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  item: {
    flex: 1,
    marginRight: 8,
  },
});

export default ShoppingPage;