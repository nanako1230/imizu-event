import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="container">
        {/* ヘッダー */}
        <header className="header">
          <a href="/" className="none">
            <h1 className="title">| 射水市魅力発掘walk</h1>
          </a>
          <nav className="nav">
            <a href="https://www.city.imizu.toyama.jp/" className="icon-btn" target="_blank">
              <img src="\img\OIP.jpg" alt="Icon 1" />
            </a>
            <a href="https://x.com/discoverywalk24" className="icon-btn" target="_blank">
              <img src="img\logo-black.png" alt="Icon 2" />
            </a>
            <a href="https://www.instagram.com/imizu_walk2024?igsh=ejI3NDZ3Mm94emNh" className="icon-btn" target="_blank" rel="noopener noreferrer">
              <img src="\img\Instagram_Glyph_Gradient.png" alt="Instagram" />
            </a>
            {/* <a href="/syoukai" className="view-btn">場所一覧</a> */}
          </nav>
        </header>

      </div>
    </>
  )
}

/*<h1 class="h1">Special Flea Markets</h1>*/