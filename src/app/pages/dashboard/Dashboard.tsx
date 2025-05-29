import {
  Box,
  Card,
  TextField,
  Button,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import React, { useState } from "react"; //serve pra guardar dados que mudam (tipo o que você digitou e os livros achados).
import ModalLivros from "../../shared/components/modalLivros/ModalLivros";
import { LivroGoogle } from "../../shared/types/LivroGoogle";

//aqui é a tipagem (só por causa do TypeScript):
//Tá dizendo: “Um livro do Google vai ter um id, e dentro do volumeInfo vai ter um title, authors, imageLinks, etc.” Ajuda o TypeScript a entender como os dados são organizados.

export default function BuscarLivros() {
  const [query, setQuery] = useState(""); //query: o que o usuário digitou no campo de busca.
  const [livros, setLivros] = useState<LivroGoogle[]>([]); //livros: os resultados que vieram da API (vão ser vários livros).

  const buscarLivros = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=pt`
    ); //fetch(...): chama a API com o que o usuário digitou (query).
    const data = await res.json(); //res.json(): pega a resposta e transforma em JSON.
    setLivros(data.items || []); //setLivros(...): guarda os livros que vieram pra gente mostrar depois.
  };

  return (
    <Box p={4}>
      <Box display="flex" gap={2} mb={4}>
        <TextField //campo onde o usuário digita o nome do livro.O que ele digita vai para o query.
          label="Busque seus Livros"
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button //chama a função buscarLivros pra fazer a busca na API.
          variant="contained"
          onClick={buscarLivros}
        >
          Buscar
        </Button>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={4}
      >
        {livros.map((livro) => {
          const volume = livro.volumeInfo;
          const imagem =
            volume.imageLinks?.extraLarge ||
            volume.imageLinks?.large ||
            volume.imageLinks?.medium ||
            volume.imageLinks?.small ||
            volume.imageLinks?.thumbnail ||
            volume.imageLinks?.smallThumbnail ||
            "https://via.placeholder.com/250x350?text=Sem+Imagem";

          return (
            <Card
              key={String(livro.id)}
              sx={{
                maxWidth: 550,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="350"
                image={imagem}
                alt={volume.title}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                  backgroundColor: "#f5f5f5",
                  display:"flex",
                  gap:"2",
                  mb:"4",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6">{volume.title}</Typography>

                {volume.authors && (
                  <Typography variant="body2" color="text.secondary">
                    {volume.authors.join(", ")}
                  </Typography>
                )}
              </CardContent>
              <ModalLivros livro={livro} />
            </Card>
            
          );
        })}
      </Box>
    </Box>
  );
}
