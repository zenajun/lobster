import { useState } from 'react';
import { Box, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';

const categories = ['Grains', 'Condiments', 'Produce', 'Dairy'];

function AddItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('Grains');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({ name, quantity, category, expiryDate });

    // reset for the next entry
    setName('');
    setQuantity('');
    setExpiryDate('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 1.5, mb: 3, flexWrap: 'wrap', alignItems: 'flex-start' }}
    >
      <TextField
        label="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        size="small"
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        size="small"
      />
      <FormControl size="small" sx={{ minWidth: 140 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <MenuItem key={c} value={c}>{c}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Expiry date"
        type="date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        size="small"
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <Button type="submit" variant="contained">
        Add item
      </Button>
    </Box>
  );
}

export default AddItemForm;