Galeria — gerar imagens rasterizadas

Este projecto inclui SVGs de exemplo em `images/`. Para criar versões JPEG/PNG otimizadas e miniaturas, use o script Node que utiliza `sharp`.

Passos:

1. Instalar dependências (Node.js 16+ requerido):

```bash
npm install
```

2. Gerar imagens e miniaturas:

```bash
npm run generate-thumbs
```

Saída:

- As imagens geradas serão colocadas em `images/converted/` como `photoX.jpg` e `thumb_photoX.jpg`.

3. Processar as tuas fotos JPG/PNG diretamente

Se tens fotos em JPG/PNG, podes gerar versões otimizadas e miniaturas automaticamente:

```bash
npm install
npm run process-images
```

Isto processa todos os ficheiros `.jpg`, `.jpeg` e `.png` encontrados em `images/` (exceto a pasta `converted/`) e grava as versões em `images/converted/` preservando o nome base (ex.: `minha-foto.jpg` → `images/converted/minha-foto.jpg` e `images/converted/thumb_minha-foto.jpg`).

Notas:

- `sharp` precisa de bibliotecas nativas; se tiver problemas na instalação, veja https://sharp.pixelplumbing.com/install
- Posso atualizar `galeria.html` automaticamente para apontar para `images/converted/` após gerar as imagens, se desejar.
