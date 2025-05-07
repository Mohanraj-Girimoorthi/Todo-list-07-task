import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Logging in:', values);
      navigate('/home');
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <Box
          component="img"
          src="https://i.pinimg.com/736x/c6/91/ad/c691ad5a68080a04f82eb41e00723a23.jpg"
          alt="Login Illustration"
          sx={{
            width: '100%',
            maxHeight: 200,
            objectFit: 'cover',
            borderRadius: 2,
            mb: 2,
          }}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Todo-App
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit} noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: 'black',
              '&:hover': { bgcolor: '#c33c30' },
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Log In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
