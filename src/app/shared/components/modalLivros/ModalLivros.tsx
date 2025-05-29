import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { LivroGoogle } from "../../types/LivroGoogle";
// Tipagem do livro (ajuste se já tiver em outro arquivo)

export default function ModalLivros({ livro }: { livro: LivroGoogle }) {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <>
      <Button
        size="small"
        variant="contained"
        onClick={abrirModal}
        sx={{ mt: "auto" }}
      >
        Ver mais
      </Button>

      <Modal
      
      open={modalAberto} onClose={fecharModal}>
        <Box
          sx={{
            backgroundColor: "white",
            p: 4,
            maxWidth: "80vw",
            mx: "auto",
            mt: "10%",
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "80vh",
            overflowY: "auto", // ATENÇÃO AQUI!

          }}
        >
          <Typography variant="h5">{livro.volumeInfo.title}</Typography>

          {livro.volumeInfo.authors && (
            <Typography variant="subtitle1" color="text.secondary">
              {livro.volumeInfo.authors.join(", ")}
            </Typography>
          )}

          <Typography mt={2}>
            {livro.volumeInfo.description || "Sem descrição disponível"}
          </Typography>

          <Button sx={{ mt: 2 }} onClick={fecharModal}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </>
  );
}
