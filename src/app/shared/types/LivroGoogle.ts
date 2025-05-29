/*
     A ideia é organização e reuso. Criar uma pasta types (ou interfaces) é uma boa prática em projetos TypeScript por estes motivos:

    Evita duplicação
    Em vez de definir o mesmo tipo em vários arquivos (como LivroGoogle), você define uma vez só e importa onde precisar.
 */

export type LivroGoogle = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
      extraLarge?: string;
      large?: string;
      medium?: string;
      small?: string;
      smallThumbnail?: string;
    };
  };
};