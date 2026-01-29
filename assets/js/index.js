document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');

  if (!modal || !closeBtn) return;

  const PAGE_VIEW_KEY = 'pageViewCount';
  const LAST_SHOWN_KEY = 'modalLastShownAt';

  const VIEWS_REQUIRED = 2;
  const MEANINGFUL_VIEW_DELAY = 5 * 1000;
  const COOLDOWN = 24 * 60 * 60 * 1000;

  let twintLoaded = false;

  async function loadAndRenderTwintButton() {
    if (twintLoaded) return;

    const container = document.getElementById('rnw-paylink-button');
    if (!container) return;

    try {
      const { TwintButton } = await import(
        'https://unpkg.com/@raisenow/paylink-button@2/dist/TwintButton.js'
      );

      TwintButton.render('#rnw-paylink-button', {
        'solution-id': 'dwfyc',
        'solution-type': 'donate',
        language: 'de',
        size: 'large',
        width: 'full',
        'color-scheme': 'dark'
      });

      twintLoaded = true;
    } catch (err) {
      console.error('Failed to load TwintButton', err);
    }
  }
  function incrementPageViews() {
    const views = Number(localStorage.getItem(PAGE_VIEW_KEY)) || 0;
    localStorage.setItem(PAGE_VIEW_KEY, views + 1);
  }

  function shouldShowModal() {
    const views = Number(localStorage.getItem(PAGE_VIEW_KEY)) || 0;
    const lastShown = Number(localStorage.getItem(LAST_SHOWN_KEY)) || 0;
    return (
      views >= VIEWS_REQUIRED &&
      Date.now() - lastShown > COOLDOWN
    );
  }

  function showModal() {
    modal.style.display = 'flex';
    localStorage.setItem(LAST_SHOWN_KEY, Date.now());
    localStorage.setItem(PAGE_VIEW_KEY, 0);

    loadAndRenderTwintButton();
  }

  setTimeout(() => {
    incrementPageViews();
    if (shouldShowModal()) {
      showModal();
    }
  }, MEANINGFUL_VIEW_DELAY);

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});