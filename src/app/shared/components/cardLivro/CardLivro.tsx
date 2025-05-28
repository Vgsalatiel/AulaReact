import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
  } from '@mui/material';
  
  type LivroGoogle = {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
        small?: string;
        medium?: string;
        large?: string;
        extraLarge?: string;
      };
    };
  };
  
  interface Props {
    livro: LivroGoogle;
  }
  
  export default function LivroCard({ livro }: Props) {
    const volume = livro.volumeInfo;
  
    // Seleciona a melhor imagem disponível ou uma imagem genérica
    const imagem =
      volume.imageLinks?.extraLarge ||
      volume.imageLinks?.large ||
      volume.imageLinks?.medium ||
      volume.imageLinks?.small ||
      volume.imageLinks?.thumbnail ||
      volume.imageLinks?.smallThumbnail ||
      'https://via.placeholder.com/250x350?text=Sem+Imagem';
  
    return (
      <Card
        key={livro.id}
        sx={{
          maxWidth: 250,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          boxShadow: 3,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={imagem}
          alt={volume.title}
          sx={{ objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />
  
        <CardContent
          sx={{
            flexGrow: 1,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" fontWeight="bold" noWrap>
            {volume.title}
          </Typography>
  
          <Typography variant="body2" color="text.secondary" mb={2}>
            {volume.authors?.join(', ') || 'Autor desconhecido'}
          </Typography>
  
          <Box sx={{ flexGrow: 1 }} />
  
          <Button
            size="small"
            variant="contained"
            color="primary"
            href={`https://books.google.com.br/books?id=${livro.id}`}
            target="_blank"
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              mt: 1,
            }}
          >
            Ver mais
          </Button>
        </CardContent>
      </Card>
    );
  }