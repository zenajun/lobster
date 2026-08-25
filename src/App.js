import { useState } from 'react'
import AppShell from '@components/app-shell'
import PantryItem from '@components/pantry-item'
import AddItemForm from '@components/add-item-form'
import { pantryItems } from '@constants/pantry-list'


function App() {
  const [items, setItems] = useState(pantryItems)
  
  const handleAdd = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };
  return (
    <AppShell>
      <AddItemForm onAdd={handleAdd} />
      {items.map((item) => (
        <PantryItem key={item.name} {...item} />
      ))}
    </AppShell>
  );
}

export default App;