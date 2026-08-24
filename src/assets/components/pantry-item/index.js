function PantryItem({ name, quantity, category, expiryDate }) {
  // Reason: decide if this item is close to expiring
  const isExpiringSoon = () => {
    const daysLeft = Math.ceil(
      (new Date(expiryDate) - new Date()) / (1000 * 60 * 60 * 24)
    );
    return daysLeft <= 3;
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '8px',
    backgroundColor: isExpiringSoon() ? '#fff3f0' : '#fff',
  };

  // Act: return the JSX that represents this decision
  return (
    <div style={cardStyle}>
      <strong>{name}</strong>
      <p style={{ margin: '4px 0', color: '#666' }}>
        {quantity} · {category}
      </p>
      {isExpiringSoon() && (
        <span style={{ color: '#d32f2f', fontSize: '13px' }}>
          Expiring soon
        </span>
      )}
    </div>
  );
}

export default PantryItem;