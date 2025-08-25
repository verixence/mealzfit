import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Mealzfit - Good Food = Good Mood';
    const description = searchParams.get('description') || 'Healthy, homely, and fitness-focused meals made fresh';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fafaf9',
            backgroundImage: 'linear-gradient(45deg, #00a884 0%, #ffb020 100%)',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fafaf9',
              borderRadius: '20px',
              padding: '60px',
              margin: '40px',
              maxWidth: '1000px',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#00a884',
                marginBottom: '20px',
              }}
            >
              Mealzfit
            </div>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#121417',
                marginBottom: '30px',
                lineHeight: 1.2,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '28px',
                color: '#64748b',
                lineHeight: 1.4,
                maxWidth: '800px',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}