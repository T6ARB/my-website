import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import BlogPost from '@/components/ui/BlogPost';

export default function Blog() {
  const posts = [
    {
      title: 'Tachiyomi',
      date: 'May 21, 2025',
      excerpt: 'تطبيق Tachiyomi هو تطبيق مفتوح المصدر لقراءة المانجا على أجهزة Android. يتميز بواجهة سهلة الاستخدام وخيارات تخصيص متعددة، بالإضافة إلى دعم العديد من مصادر المانجا من خلال الإضافات...',
      link: '/post/tachiyomi',
      isRtl: true
    },
    {
      title: 'Getting Started with TypeScript',
      date: 'May 15, 2025',
      excerpt: 'TypeScript offers powerful type safety and tooling that makes development smoother and more reliable. In this guide, I\'ll walk you through setting up your first TypeScript project and explain the key benefits over plain JavaScript...',
      link: '#',
      isRtl: false
    },
    {
      title: 'My Arch Linux Setup for Developers',
      date: 'May 2, 2025',
      excerpt: 'Arch Linux provides a minimal base system that you can build upon according to your needs. In this post, I share my complete development environment setup, including window manager, terminal, editor, and productivity tools...',
      link: '#',
      isRtl: false
    }
  ];
  
  return (
    <Layout>
      <Header isBlog={true} />
      
      <main>
        <section id="blog-content" className="py-2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-6">
              {posts.map((post, index) => (
                <BlogPost 
                  key={index}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  link={post.link}
                  isRtl={post.isRtl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
