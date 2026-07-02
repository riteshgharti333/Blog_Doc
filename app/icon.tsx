// app/icon.tsx
import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Book */}
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        {/* Heart */}
        <path d="M14 9c1.33-1.33 2.5-2 3.5-2C19 7 20 8 20 9.5c0 1.5-1.17 2.67-2.5 4L14 17l-3.5-3.5C9.17 12.17 8 11 8 9.5 8 8 9 7 10.5 7c1 0 2.17.67 3.5 2Z" />
      </svg>
    ),
    {
      ...size,
    }
  );
}