import { Card, CardContent, Typography, Chip } from '@mui/material';

function PantryItem({ name, quantity, category, expiryDate }) {
  const isExpiringSoon = () => {
    const daysLeft = Math.ceil(
      (new Date(expiryDate) - new Date()) / (1000 * 60 * 60 * 24)
    );
    return daysLeft <= 3;
  };

  return (
    <Card sx={{ mb: 1.5 }} variant="outlined">
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quantity} · {category}
        </Typography>
        {isExpiringSoon() && (
          <Chip label="Expiring soon" color="error" size="small" sx={{ mt: 1 }} />
        )}
      </CardContent>
    </Card>
  );
}

export default PantryItem;