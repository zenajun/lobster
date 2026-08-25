import PantryItem from '@components/pantry-item'
import { pantryItems } from '@constants/pantry-list'
import AppShell from '@components/app-shell'


function App() {
  return (
    <AppShell>
      <h1>Pantry List</h1>
      {pantryItems.map((item) => (
        <PantryItem key={item.name} {...item} />
      ))}
    </AppShell>
  );
}

export default App;