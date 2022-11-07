import React from 'react'
import { Card, CardContent, TextField, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from './Hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import { Link } from 'react-router-dom'

const getFreshModel = () => ({
    username: '',
    password: '',

})

export default function Login() {

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const Login = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.login)
                .post(values)
                .then(res => console.log(res))
                .catch(err => console.log(err))
    }

    const validate = () => {
        let temp = {}
        temp.username = values.username !== "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x === "")
    }

    return (
        <Center>
            <Card sx={{ width: '400px' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        BookClub App
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root':
                        {
                            m: 1,
                            width: '90%',
                        }
                    }}>
                        <form noValidate onSubmit={Login}>
                            <TextField label="Username" name='username' value={values.username} onChange={handleInputChange} variant='outlined'{...(errors.Username && { error: true, helperText: errors.username })} />
                            <TextField label="Password" name='password' value={values.password} onChange={handleInputChange} variant='outlined' />
                            <Button type='signIn' variant="Text" size='medium' sx={{ width: '40%' }}>Sign In</Button>
                            <Link to="/Register" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button type='signIn' variant="Text" size='medium' sx={{ width: '40%' }}>
                                    Register
                                </Button>
                            </Link>
                        </form>

                    </Box>
                </CardContent>
            </Card>
        </Center>



    )
}
