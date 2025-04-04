
export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0000CD',
      padding: '50px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -500px 0; }
          100% { background-position: 500px 0; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #FFD700 0%, #fffacd 50%, #FFD700 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite linear;
          text-shadow: 0 0 2px #000, 1px 1px 2px #000;
        }
      `}</style>
      <h1 className="shimmer-text" style={{
        fontSize: '70px',
        fontFamily: 'Georgia, serif',
        letterSpacing: '1px'
      }}>
        Elite Image
      </h1>
      <h2 className="shimmer-text" style={{
        fontSize: '40px',
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic'
      }}>
        by Lux von Zollern
      </h2>
    </div>
  );
}
