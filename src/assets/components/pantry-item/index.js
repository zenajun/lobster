const Component = ({message}) => {
  return (
     <div>
      <h2>Pantry Item</h2>
      <p>This is a simple pantry item component.</p>
      <p>{message}</p>
    </div>

);
}

Component.displayName = 'PantryItem';

export default Component;