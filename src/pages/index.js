import Link from "next/link";
export default function Home() {

  return (
    <>
      <main className="main-image-section">
        <div className="image-overlay"></div>

        <div className="content-container">
          {/* メインタイトル */}
          <div className="main-title-container">
            <h2 className="main-title">
              IMIZU CITY CHARM<br />
              DISCOVERY WALK
            </h2>
            <p className="event-date">2024 10.26 SAT</p>
          </div>

          {/* キャッチフレーズ */}
          <div className="catchphrase-container">
            <p className="catchphrase-text">!!歩いて射水市の魅力を発見しよう!!</p>
            <p className="catchphrase-text">写真を撮影してオリジナルマップを作成</p>
          </div>
          <a href="/syoukai" className="apply-button-container2">完成したマップはこちらから</a>
          {/* 応募ボタン */}
          <div className="apply-button-container">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScTL-7NyyqRfdmbbBuk6dMWRR4SPJN7zhaN4DMB_tHqUHHX6A/viewform?usp=sf_link">
              <button className="apply-button">終了しました</button>
            </a>
          </div>
        </div>
      </main>

      <div className="event-page">
        {/* イベント詳細セクション */}
        <div className="section">
          {/* 日時行 */}
          <div className="row">
            <div className="left-panel">日時</div>
            <div className="right-panel">
              2024年10月26日 (土) 9:30～13:00<br />
              <div className="section-content">
                <p>受付開始: 9:30~9:45</p>
                <p>企画説明: 随時説明</p>
                <p>散策開始: 10:00~</p>
                <p>公式ラインへの写真アップロード: 10:00~13:00</p>
                <p>自由解散</p>
                <p>※小雨決行　雨天中止の場合は、イベント公式LINEでお知らせします。</p>
              </div>
            </div>
          </div>

          {/* 会場行です */}
          <div className="row">
            <div className="left-panel">会場</div>
            <div className="right-panel">
              射水市 観光交流センター クロスベイ新湊（東側入り口付近）<br />
              (〒934-0011 富山県射水市本町２丁目１０−３０)<br />
              <a href="#access-info" className="section-content1">アクセスはこちら</a>
            </div>
          </div>
          <div className="row">
            <div className="left-panel">特典</div>
            <div className="right-panel">
              <div className="section-content">
                <p>当日の歩数が8,000歩を達成した参加者で「楽天ポイント」5,000を山分け！</p>
                <p>素敵な魅力スポットを発見した参加者にはギフトカードも当たる！</p>
                <p>スポットの探索や写真投稿でさらにギフトカードが得られます。</p>
                <a href="/PosterPage" target="_blank" className="section-content1">
                  射水市魅力発見walkのポスターはこちらから
                </a>
                <p>　　　</p>
                <p>楽天×射水市共同イベントを開催します</p>
                <p>ミッション達成で「楽天ポイント」10万山分けキャンペーン!!</p>
                <p>詳しくは下のポスターをご覧ください。</p>
                <a href="/PosterPage2" target="_blank" className="section-content1">
                  楽天×射水市共同のイベントポスターはこちらから
                </a>
              </div>
            </div>
          </div>

          {/* 参加方法行 */}
          <div className="row">
            <div className="left-panel">参加方法</div>
            <div className="right-panel">
              無料 (事前登録制／当日も可)<br />
              <p>フォームズで応募をお願いします。</p>
              <p>持ち物: スマートフォン</p>
              <p>参加希望の場合は下記の公式ラインと「楽天ヘルスケア」アプリを使用しますので、ご登録ください。</p>
              <p>また、「楽天ヘルスケア」アプリ内で射水市×楽天ヘルスケア連携企画へのエントリーをお願いいたします。</p>
              <div className="image-container">
                <a href="https://lin.ee/Ih3njBt">
                  <img className="custom-image" src="img/19576053-bb41-4d85-852d-f7f7895fa795.jpg" alt="Image 1" />
                </a>
                <a href="https://healthcare.rakuten.co.jp/">
                  <img className="custom-image" src="img/app-dl-qr.png" alt="QR Code" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* アクセス情報セクション */}
      <div id="access-info" className="access-info">
        <h2>アクセス情報</h2>
        <p>住所: 射水市 観光交流センター クロスベイ新湊<br />
          〒934-0011 富山県射水市本町２丁目１０−３０<br />
          駐車場: 無料駐車場あり（4時間無料）</p>

        {/* Googleマップ表示 */}
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.5047422139965!2d137.07695837473554!3d36.78244687225209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff79d2b9d61f89f%3A0x2c7084ca7148989!2z5bCE5rC05biCIOims-WFieS6pOa1geOCu-ODs-OCv-ODvCDjgq_jg63jgrnjg5njgqTmlrDmuYo!5e0!3m2!1sja!2sjp!4v1727781640603!5m2!1sja!2sjp"
            width="800"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}
