
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
  }  

  const buyButton = document.querySelector('.cta-button');
  buyButton.addEventListener('click', () => {
    alert('Thanks for visiting. We appreciate you being here!');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      alert('Thanks for visiting. We appreciate you being here!');
    });
  });