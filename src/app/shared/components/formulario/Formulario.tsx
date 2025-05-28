import { useState } from 'react';
import { Box, Card, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Formulario() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({ email: '', senha: '' });
  const navigate = useNavigate();

  const validar =() => {
    const novosErros ={email:'', senha:''};
    let isValid = true;

    //valida e-mail
    if(!email){
      novosErros.email = ' O email é obrigatório'
      isValid = false;
    }else if (!/\S+@\S+\.\S+/.test(email)){
      novosErros.email = 'email inválido';
      isValid = false;
    }

    //valida senha
    if(!senha){
      novosErros.senha = 'Asenha é obrigatório';
      isValid = false;
    }
    setErrors(novosErros)
    return isValid;
  };

  const handleEntrar = () => {
    if (validar()){
      navigate('/Dashboard')
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: 300,
        }}
      >
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />
        <TextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          error={!!errors.senha}
          helperText={errors.senha}
          fullWidth
        />
        <Button variant="outlined" onClick={handleEntrar} fullWidth>
          Login
        </Button>
      </Card>
    </Box>
  );
}
