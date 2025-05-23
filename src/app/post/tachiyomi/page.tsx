import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, PuzzlePieceIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function TachiyomiPost() {
  return (
    <Layout>
      <Header isPost={true} title="Tachiyomi" />
      
      <main>
        <section id="post-content" className="py-2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video w-full max-w-md float-right mb-6 mr-6 rounded-lg overflow-hidden">
              <Image 
                src="/images/tachiyomi-screens.png" 
                alt="Tachiyomi Screenshots" 
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="post-content">
              <p className="text-gray-400 leading-relaxed mb-4 text-right">
                تطبيق Tachiyomi هو تطبيق مفتوح المصدر لقراءة المانجا على أجهزة Android. يتميز بواجهة سهلة الاستخدام وخيارات تخصيص متعددة، بالإضافة إلى دعم العديد من مصادر المانجا من خلال الإضافات.
              </p>
              
              <div className="flex flex-wrap gap-4 my-8">
                <a 
                  href="https://github.com/ZhanZiyuan/tachiyomi/releases/download/v0.15.3/tachiyomi-v0.15.3.apk" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-amber-400 text-base font-semibold rounded-lg border border-amber-400 shadow-md transition-all hover:translate-y-[-3px] hover:shadow-lg hover:bg-gray-700 hover:text-amber-300 hover:border-amber-300"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  تحميل التطبيق
                </a>
                <a 
                  href="tachiyomi://add-repo?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkeiyoushi%2Fextensions%2Frepo%2Findex.min.json" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-cyan-400 text-base font-semibold rounded-lg border border-cyan-400 shadow-md transition-all hover:translate-y-[-3px] hover:shadow-lg hover:bg-gray-700 hover:text-cyan-300 hover:border-cyan-300"
                >
                  <PuzzlePieceIcon className="h-5 w-5 mr-2" />
                  إضافة الإضافات
                </a>
              </div>
              
              <Link 
                href="/blog" 
                className="inline-flex items-center text-gray-400 mt-8 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-1.5" />
                العودة إلى المدونة
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
