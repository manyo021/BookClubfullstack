import React from 'react'
import { Card, CardContent, TextField, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from './Hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'

const getFreshModel = () => ({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: ''
})

export default function Register() {

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const Register = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.register)
                .post(values)
                .then(res => console.log(res))
                .catch(err => console.log(err))
    }

    const validate = () => {
        let temp = {}
        temp.username = values.username !== "" ? "" : "This field is required."
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        setErrors(temp)
        return Object.values(temp).every(x => x === "")
    }

    return (
        <Center>
            <Card sx={{ width: '400px' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        Create a Profile
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root':
                        {
                            m: 1,
                            width: '90%',
                        }
                    }}>
                        <form noValidate onSubmit={Register}>
                            <TextField label="Username" name='username' value={values.username} onChange={handleInputChange} variant='outlined'{...(errors.Username && { error: true, helperText: errors.username })} />
                            <TextField label="Password" name='password' value={values.password} onChange={handleInputChange} variant='outlined' />
                            <TextField label="Firstname" name='firstname' value={values.firstname} onChange={handleInputChange} variant='outlined' />
                            <TextField label="Lastname" name='lastname' value={values.lastname} onChange={handleInputChange} variant='outlined' />
                            <TextField label="email" name='email' value={values.email} onChange={handleInputChange} variant='outlined'{...(errors.email && { error: true, helperText: errors.email })} />
                            <Button type='signIn' variant="contained" size='large' sx={{ width: '90%' }}>Sign In</Button>
                        </form>

                    </Box>
                </CardContent>
            </Card>
        </Center>



    )
}
