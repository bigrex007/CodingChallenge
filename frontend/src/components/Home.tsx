import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { AuthContext } from '../AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box 
      sx={{
        height: '90vh',
        overflowY: 'auto',
        p: 3,
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.username}!
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" gutterBottom>
          Documentation
        </Typography>

        <Typography paragraph>
          This is a documentation section where you can provide information about the application, its features, and other relevant details.
        </Typography>

        <Typography paragraph>
          You can divide your content into multiple sections, each with headers and text. Use this space to inform users about the purpose of the app, its functionality, and any important notes they need to know.
        </Typography>

        <Typography paragraph>
          Example of what to include in the documentation:
        </Typography>

        <ul>
          <li>How to navigate the application</li>
          <li>Security practices and how to manage account settings</li>
          <li>Steps for troubleshooting common issues</li>
          <li>Key features and their usage</li>
        </ul>

        <Typography paragraph>
          Add as much information as you need, and ensure that everything is clear and easy to follow. You can also style this section differently depending on the type of content you want to present.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
