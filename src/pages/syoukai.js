import React from 'react';

export default function PosterPage() {
  const handleGoBack = () => {
    window.history.back(); // ブラウザの履歴を戻る
  };

  return (
    <div className="container1">
      <h1>改装中</h1>
      <button onClick={handleGoBack} className="back-button">
        戻る
      </button>
    </div>
  );
}
