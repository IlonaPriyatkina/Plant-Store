import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime } from '@mui/material/colors';
import signUpStyles from "./signUp_style.module.scss";
import { useForm } from 'react-hook-form';


const defaultTheme = createTheme({
  palette: {
    primary: {
      main: lime[900],
    },
    secondary: {
      main: lime[200],
    }
  }
}

);




const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const saveFormDataToLocalStorage = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
  };


  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };


  const onSubmit = (data) => {
    setFormData(data);
    saveFormDataToLocalStorage();
    console.log(data);
  };

  const checkLocalStorage = () => {
    const formData = localStorage.getItem('formData');

    if (formData) {
      const parsedData = JSON.parse(formData);
      console.log(parsedData);
    } else {
      console.log('Data not found in local storage.');
    }
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

  const handleLogin = () => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);
      const { firstName, lastName, email, password } = parsedData;
      if (firstName || lastName || email || password) {
        alert('You are welcome!');
      } else {
        alert('No contact details');
      }
    } else {
      alert('No contact details');
    }
  };

  return (
    <div className={signUpStyles.signUp_container}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className={signUpStyles.signUp} sx={{ bgcolor: defaultTheme.palette.secondary.main }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: defaultTheme.palette.primary.main }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    // value={formData.firstName}
                    // onChange={handleChange}

                    {...register('firstName', { required: true })} // Регистрация поля формы с правилом валидации
                    value={formData.firstName}
                    onChange={(e) => {
                      handleChange(e);
                      setValue('firstName', e.target.value); // Обновление значения поля формы
                    }}
                    error={errors.firstName} // Отображение ошибки валидации
                    helperText={errors.firstName && 'First name is required'}


                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    // value={formData.lastName}
                    // onChange={handleChange}

                    {...register('lastName', { required: true })} // Регистрация поля формы с правилом валидации
                    value={formData.lastName}
                    onChange={(e) => {
                      handleChange(e);
                      setValue('lastName', e.target.value); // Обновление значения поля формы
                    }}
                    error={errors.lastName} // Отображение ошибки валидации
                    helperText={errors.lastName && 'Last name is required'}

                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    // value={formData.email}
                    // onChange={handleChange}

                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })} // Регистрация поля формы с правилами валидации
                    value={formData.email}
                    onChange={(e) => {
                      handleChange(e);
                      setValue('email', e.target.value); // Обновление значения поля формы
                    }}
                    error={errors.email} // Отображение ошибки валидации
                    helperText={errors.email && 'Please enter a valid email address'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    // value={formData.password}
                    // onChange={handleChange}

                    {...register('password', { required: true, minLength: 6 })} // Регистрация поля формы с правилами валидации
                    value={formData.password}
                    onChange={(e) => {
                      handleChange(e);
                      setValue('password', e.target.value); // Обновление значения поля формы
                    }}
                    error={errors.password} // Отображение ошибки валидации
                    helperText={errors.password && 'Password must be at least 6 characters long'} // Текст ошибки валидации

                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <div className={signUpStyles.signUp_btn_container}>
                <button type="submit" className={signUpStyles.signUp_btn}>
                  Sign Up
                </button>
                <button type="button" className={signUpStyles.signUp_btn} onClick={handleLogin}>
              Log In
            </button>
                </div>

            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
  );
}




export default SignUp

