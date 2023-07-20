

// Funkce pro filtrování položek
function filterItems(tag) {
  const itemList = document.getElementById('item-list');
  const items = itemList.getElementsByClassName('links__item');
  
  // Skryje všechny položky
  Array.from(items).forEach(function(item) {
    item.style.display = 'none';
  });
  
  // Zobrazí položky s odpovídajícím datovým značkou
  Array.from(items).forEach(function(item) {
    const tags = item.getAttribute('data-tags').split(' ');
    if (tags.includes(tag)) {
      item.style.display = 'block';
    }
  });
  
  // Odscrollování na místo s vyfiltrovaným seznamem
  const section = document.getElementById('item-list').parentElement;
  section.scrollIntoView({ behavior: 'smooth' });
}

// Přidání posluchačů událostí na tlačítka filtrů
const filterButtons = document.getElementsByClassName('filter-toggle');
Array.from(filterButtons).forEach(function(button) {
  button.addEventListener('click', function() {
    const tag = this.getAttribute('data-tag');
    filterItems(tag);
  });
});




const navigationItems = document.querySelectorAll('.navigation__item');

const whenClicked = (event) => {
  const activeItem = document.querySelector('.navigation__item.active');
  if (activeItem) {
    activeItem.classList.remove('active');
  }

  event.currentTarget.classList.add('active');
};

navigationItems.forEach(item => {
  item.addEventListener('click', whenClicked);
});

