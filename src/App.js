import PantryItem from '@components/pantry-item'
import { pantryItems } from '@constants/pantry-list'


function App() {
  return (
    <div>
      <h1>Pantry List</h1>
      {pantryItems.map((item) => (
        <PantryItem key={item.name} {...item} />
      ))}
    </div>
  );
}

export default App;