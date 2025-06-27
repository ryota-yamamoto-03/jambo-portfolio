// PC専用サイトです
// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   if (isMobile) {
//     document.getElementById('mobile-warning').style.display = 'block';
//     document.getElementById('main-content').style.display = 'none';
//   }

// 右クリックを無効化
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

// ツイート機能
document.addEventListener('mouseup', function () {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
      const siteURL = "https://ryota-yamamoto-03.github.io/jambo-portfolio/"; 
      const tweetText = encodeURIComponent(`${selectedText}\n${siteURL}`);
      const tweetURL = `https://twitter.com/intent/tweet?text=${tweetText}`;

      // 新しいタブでツイート画面を開く
      window.open(tweetURL, '_blank');
    }
  });


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 一度だけアニメ発動
      }
    });
  });

  document.querySelectorAll('.fade-in-zoom').forEach(el => {
    observer.observe(el);
  });