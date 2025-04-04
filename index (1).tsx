
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Elite Image by Lux von Zollern</title>
      </Head>
      <div style={{
        backgroundColor: '#0000CD',
        padding: '60px 30px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
          fontSize: '72px',
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          letterSpacing: '1px',
          margin: 0,
        }}>
          Elite Image
        </h1>
        <h2 className="shimmer-text" style={{
          fontSize: '40px',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          marginTop: '20px'
        }}>
          by Lux von Zollern
        </h2>
      </div>
    </>
  );
}
