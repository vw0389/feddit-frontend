import { useState } from 'react';

import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

export const Header = ({ currentUser }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {
    console.log(username);
  };

  const signUp = () => {
    console.log(username);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box />
          <TextField placeholder="Search" size="small" />

          <Button onClick={() => setOpenLogin(true)} sx={{ color: 'white' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={openLogin} onClose={() => setOpenLogin(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>Log in or Sign up with your Feddit account</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={logIn}>
            Login
          </Button>
          <Button onClick={signUp}>Sign Up</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
