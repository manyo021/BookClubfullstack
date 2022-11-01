import React from 'react'
import { Card, CardContent, TextField, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from './Hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'

const getFreshModel = () => ({
    username: '',
    package: ''
})

export default function Login() {

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const login = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.auth)
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
                        <form noValidate onSubmit={login}>
                            <TextField label="Username" name='username' value={values.username} onChange={handleInputChange} variant='outlined'{...(errors.Username && { error: true, helperText: errors.username })} />
                            <TextField label="Password" name='password' value={values.password} onChange={handleInputChange} variant='outlined' />
                            <Button type='submit' variant="contained" size='large' sx={{ width: '90%' }}>Submit</Button>
                        </form>

                    </Box>
                </CardContent>
            </Card>
        </Center>



    )
}
