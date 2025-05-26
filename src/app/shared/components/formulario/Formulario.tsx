import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Formulario() {
  return (
    <Box>
      <Card
      sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}
      
      >
        <Box>
        <TextField id="outlined-password-input" label="Senha" type="password" />
        </Box>
        <Box><TextField id="outlined-email-input" label="email" type="email" /></Box>
      </Card>
        
        
      
    </Box>
  );
}
