const filterToggles = document.querySelectorAll('.filter-toggle');
const itemList = document.getElementById('item-list');

filterToggles.forEach((toggle) => {
  toggle.addEventListener('click', toggleFilter);
});

function toggleFilter() {
  this.classList.toggle('active');
  filterItems();
}

function filterItems() {
  const selectedTags = [];

  filterToggles.forEach((toggle) => {
    if (toggle.classList.contains('active')) {
      selectedTags.push(toggle.getAttribute('data-tag'));
    }
  });

  const items = itemList.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const tags = items[i].getAttribute('data-tags');
    const itemTags = tags.split(' ');

    if (selectedTags.length === 0 || selectedTags.some(tag => itemTags.includes(tag))) {
      items[i].classList.remove('hide');
    } else {
      items[i].classList.add('hide');
    }
  }
}

filterItems();
