document.addEventListener('keydown', (event) => {
    const cat = document.getElementById('box');
    const step = 100;
    let left = parseInt(window.getComputedStyle(cat).left);
    
    if (event.key === 'ArrowLeft') {
      cat.style.left = `${left - step}px`;
    } else if (event.key === 'ArrowRight') {
      cat.style.left = `${left + step}px`;
    }
  });