document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const loveMessage = document.getElementById('loveMessage');
  
    loveButton.addEventListener('click', () => {
      loveMessage.classList.toggle('hidden');
    });
  });
  