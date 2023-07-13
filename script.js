console.log('js funguje');


// Získání odkazů na přepínače filtrů a seznam položek
const filterToggles = document.querySelectorAll('.filter-toggle');
const itemList = document.getElementById('item-list');

// Přidání posluchačů událostí pro kliknutí na přepínače
filterToggles.forEach((toggle) => {
  toggle.addEventListener('click', filterItems);
});

// Funkce pro filtrování položek
function filterItems() {
  const selectedTags = [];

  // Zjištění vybraných tagů
  filterToggles.forEach((toggle) => {
    if (toggle.classList.contains('active')) {
      selectedTags.push(toggle.getAttribute('data-tag'));
    }
  });

  // Procházení položek a upravování zobrazení
  const items = itemList.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const tags = items[i].getAttribute('data-tags');

    if (selectedTags.length === 0 || hasAnyTag(tags, selectedTags)) {
      items[i].classList.remove('hide');
    } else {
      items[i].classList.add('hide');
    }
  }
}

// Pomocná funkce pro kontrolu, zda prvek obsahuje alespoň jeden z vybraných tagů
function hasAnyTag(tags, selectedTags) {
  const itemTags = tags.split(' ');

  for (let i = 0; i < selectedTags.length; i++) {
    if (itemTags.includes(selectedTags[i])) {
      return true;
    }
  }

  return false;
}