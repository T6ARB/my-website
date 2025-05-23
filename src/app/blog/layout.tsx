import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مدونة Isaac',
  description: 'أفكار، دروس، ورؤى حول تطوير الويب، لينكس، والبرمجة',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
