import { Box, Card } from "@mui/material";
import Formulario from "../../shared/components/formulario/Formulario";
export const Home = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh" // altura total da tela
    >
      <Card>
      <Formulario />
      </Card>
     
    </Box>
  );
};
