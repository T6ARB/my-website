import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tachiyomi - مدونة Isaac',
  description: 'تطبيق Tachiyomi هو تطبيق مفتوح المصدر لقراءة المانجا على أجهزة Android',
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
