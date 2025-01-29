import React from 'react';

export default function PosterPage() {
  const handleGoBack = () => {
    window.history.back(); // ブラウザの履歴を戻る
  };

  return (
    <div className="container1">
      <h1>完成したオリジナルマップ</h1>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1EFcvCLbwxj_sRakrPbVhSOgCu5sR7t0&z=14"
          style={{
            width: '100vw',
            height: '100vh',
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          loading="lazy"
        ></iframe>
      </div>
      <button onClick={handleGoBack} className="back-button">
        戻る
      </button>
    </div>
  );
}
