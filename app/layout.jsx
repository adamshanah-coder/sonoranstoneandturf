import './globals.css';

export const metadata = {
  title: 'Sonoran Turf & Gravel | Premium Landscape Transformations',
  description: 'Premium turf, decorative gravel, pavers, putting greens, and complete landscape transformations across the Greater Phoenix area.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
