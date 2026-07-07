(function () {
  const galleryGrid = document.getElementById('galleryGrid');

  if (!galleryGrid) {
    return;
  }

  const items = window.galeriaItens || [];
  galleryGrid.innerHTML = '';

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}">
      <div class="card-content">
        <span class="card-category">${item.categoria}</span>
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
        <div class="card-meta">
          <strong>Local</strong>
          <span>${item.local}</span>
        </div>
      </div>
    `;

    galleryGrid.appendChild(card);
  });
})();
