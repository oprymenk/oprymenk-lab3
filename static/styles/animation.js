function showDescription(index) {
    const descriptions = document.querySelectorAll('.skill-description-box');
    const images = document.querySelectorAll('.skills-images img');

    descriptions.forEach((desc, i) => {
      desc.style.display = i === index ? 'block' : 'none';
    });

    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }
  