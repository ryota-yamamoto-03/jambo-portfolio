// PC専用サイトです
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById('mobile-warning').style.display = 'block';
    document.getElementById('main-content').style.display = 'none';
  }

// 右クリックを無効化
  document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // 通常の右クリックメニューを無効化
  alert("【右クリック厳禁】コード汚いので見ないでください笑");
});

// ツイート機能
// document.addEventListener('mouseup', function () {
//     const selectedText = window.getSelection().toString().trim();

//     if (selectedText.length > 0) {
//       const siteURL = "https://ryota-yamamoto-03.github.io/jambo-portfolio/"; 
//       const tweetText = encodeURIComponent(`${selectedText}\n${siteURL}`);
//       const tweetURL = `https://twitter.com/intent/tweet?text=${tweetText}`;

//       // 新しいタブでツイート画面を開く
//       window.open(tweetURL, '_blank');
//     }
//   });

// id位置に来たらアニメーションを発火
document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('.animated-anchor');
  const zoomIn = document.querySelectorAll('.zoom-in-animate');
  if (!('IntersectionObserver' in window)) {
    // 古いブラウザ用フォールバック
    anchors.forEach(el => el.classList.add('visible'));
    zoomIn.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 1度だけ
      }
    });
  }, { threshold: 0.3 }); // 画面に3割見えたら発動

  anchors.forEach(el => observer.observe(el));
  zoomIn.forEach(el => observer.observe(el));
});

// カーソルの色変更
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
