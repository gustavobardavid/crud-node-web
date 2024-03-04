import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignIn() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const userData = {
            name: name,
            email: email,
        };
    
        try {
            const response = await axios.get(`http://localhost:3000/user-find/${email}`, {
                params: {
                    email: email
                }
        });
    
          if (response) {
            console.log('Usuário encontrado!');
          } else {
            console.error('Erro ao criar usuário:', response);
          }
        } catch (error) {
          console.error('Erro ao enviar solicitação:', error);
        }
      };

  return (
      <Container component="main" maxWidth="xs"
      sx={{

      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Name"
                type="text"
                id="name"
                autoComplete="current-password"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>

              <Grid item>
                <Link to={'/signup'}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}