// Loading functionality
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  const progressBar = document.querySelector('.loading-progress-bar');
  const loadingText = document.querySelector('.loading-text');
  
  // Simulate loading progress
  let progress = 0;
  const totalSteps = 5;
  const messages = [
    'ゲームデータを読み込んでいます...',
    'キャラクターを準備しています...',
    'マップを生成しています...',
    'サウンドを読み込んでいます...',
    '最終調整をしています...'
  ];

  function updateProgress() {
    progress++;
    const percentage = (progress / totalSteps) * 100;
    
    progressBar.style.width = `${percentage}%`;
    loadingText.textContent = messages[progress - 1];

    if (progress < totalSteps) {
      setTimeout(updateProgress, 800);
    } else {
      setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        document.body.style.overflow = 'auto';
      }, 500);
    }
  }

  // Prevent scrolling during loading
  document.body.style.overflow = 'hidden';
  
  // Start loading simulation
  setTimeout(updateProgress, 500);
});