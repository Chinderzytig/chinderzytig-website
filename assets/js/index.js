document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');

  const STORAGE_KEY = 'modalSeenAt';
  const TWELVE_HOURS = 12 * 60 * 60 * 1000;

  function shouldShowModal() {
    const lastSeen = localStorage.getItem(STORAGE_KEY);

    if (!lastSeen) return true;

    return Date.now() - Number(lastSeen) > TWELVE_HOURS;
  }

  // Show modal if needed
  if (shouldShowModal()) {
    modal.style.display = 'flex';
  }

  // Close modal and store timestamp
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    localStorage.setItem(STORAGE_KEY, Date.now());
  });
});