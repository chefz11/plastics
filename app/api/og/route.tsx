import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Plastics';
  const description = searchParams.get('description') || 'Personal catalogue of building and learning with AI';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: '24px',
              color: '#888',
              fontFamily: 'system-ui',
            }}
          >
            plastics.zalbright.com
          </span>
        </div>

        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#ffffff',
            fontFamily: 'system-ui',
            marginBottom: '24px',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: '32px',
            color: '#999',
            fontFamily: 'system-ui',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              color: '#666',
              fontFamily: 'system-ui',
            }}
          >
            by Zach Albright
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
