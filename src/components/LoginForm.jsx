import {Alert, Box, Button, Snackbar, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {login} from "../userService";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(loginData)
            .then(response => response.data)
            .then(jwt => window.localStorage.setItem("jwt", jwt.jwt))
            .then(() => navigate('/posts'))
            .catch(e => setOpen(true));
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Wrong credentials
                </Alert>
            </Snackbar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={(e) => setLoginData((prev) => ({...prev, username: e.target.value}))}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setLoginData((prev) => ({...prev, password: e.target.value}))}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Login
                </Button>
            </Box>
        </Box>
    )
};
