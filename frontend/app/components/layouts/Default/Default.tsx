import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Process Improvement eXplorer - PIX',
  description: 'Generated by create next app',
}
export default function RootLayout({
      children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
          <div className={inter.className}>{children}</div>
      </div>
  );
}
