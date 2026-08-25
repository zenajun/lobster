import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

const categories = ['All items', 'Grains', 'Condiments', 'Produce', 'Dairy'];

function AppShell({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            PantryPal
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar + main content */}
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 220,
            borderRight: '1px solid #e0e0e0',
            p: 2,
          }}
        >
          <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
            Categories
          </Typography>
          {categories.map((category) => (
            <Typography key={category} sx={{ py: 0.5, cursor: 'pointer' }}>
              {category}
            </Typography>
          ))}
        </Box>

        {/* Main content */}
        <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
          <Container maxWidth={false}>
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default AppShell;