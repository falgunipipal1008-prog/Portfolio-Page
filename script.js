const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Change active button
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.textContent;

    cards.forEach(card => {
      const category = card.querySelector('.project-id').textContent;
      if (filter === 'All' || category.includes(filter.toUpperCase())) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
