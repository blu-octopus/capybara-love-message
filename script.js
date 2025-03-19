document.addEventListener('DOMContentLoaded', () => {
  // Toggle love message on button click
  const loveButton = document.getElementById('loveButton');
  const loveMessage = document.getElementById('loveMessage');
  loveButton.addEventListener('click', () => {
    loveMessage.classList.toggle('hidden');
  });

  // Modal elements
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');

  // Close modal when close button is clicked
  closeModal.addEventListener('click', () => {
    modal.classList.toggle('hidden');
  });

  // Select the capybara image element
  const capy = document.querySelector('.capybara');
  capy.addEventListener('click', () => {
    // Create falling emoji element (poop emoji)
    const textElem = document.createElement('div');
    textElem.textContent = "\u{1F4A9}";
    textElem.classList.add('falling-text');

    // Get capybara position to start the falling emoji
    const capyRect = capy.getBoundingClientRect();
    // Adjust starting position: 30px left offset and 20px lower than capybara's top
    const textLeft = capyRect.left + capyRect.width / 2 - 30;
    const textTop = capyRect.top + 20;
    textElem.style.left = `${textLeft}px`;
    textElem.style.top = `${textTop}px`;

    // Append emoji to document
    document.body.appendChild(textElem);

    // Force reflow
    void textElem.offsetWidth;

    // Generate a random horizontal offset (for variety) and move down 200px
    const randomX = (Math.random() * 200) - 100;
    textElem.style.transform = `translate(${randomX}px, 200px)`;
    textElem.style.opacity = "1";

    // // When animation ends, make emoji clickable to open modal
    // textElem.addEventListener('transitionend', () => {
    //   textElem.style.cursor = 'pointer';
    //   textElem.addEventListener('click', () => {
    //     modal.classList.toggle('hidden');
    //   });
    // }, { once: true });
  });
});
