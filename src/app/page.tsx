import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import SkillItem from '@/components/ui/SkillItem';

export default function Home() {
  const skills = [
    'JavaScript', 'TypeScript', 'Python', 'CSS', 'WebAssembly', 
    'Vite', 'React', 'Next.js', 'Tailwind', 'SQLite', 
    'PostgreSQL', 'Linux', 'Git'
  ];
  
  return (
    <Layout>
      <Header isHome={true} />
      
      <main>
        <section id="about" className="py-2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-blue-100 mb-3">نبذة عني</h2>
            <p className="text-gray-400 leading-relaxed mb-3">
              أنا مطور ويب وتطبيقات. أنا شغوف بأنظمة GNU/Linux وأستخدم Arch Linux كنظام تشغيل يومي.
            </p>
          </div>
        </section>

        <section id="languages" className="py-2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-blue-100 mb-3">اللغات</h2>
            <p className="text-gray-400 leading-relaxed mb-3">
              أعمل بشكل أساسي مع TypeScript بسبب أمان الأنواع القوي والأدوات المتقدمة، مما يساهم في عملية تطوير أكثر سلاسة وموثوقية. كما أستفيد من JavaScript لمرونتها، وPython للبرمجة النصية والأدوات والنماذج الأولية السريعة. بالإضافة إلى ذلك، أمتلك مهارات قوية في CSS لإنشاء تصميمات وتخطيطات متجاوبة.
            </p>
          </div>
        </section>

        <section id="skills" className="py-2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-blue-100 mb-3">المهارات</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <SkillItem key={index} name={skill} />
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="py-2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-blue-100 mb-3">المدونة</h2>
            <p className="text-gray-400 leading-relaxed mb-3">
              قريباً! تحقق لاحقاً للحصول على المقالات.
            </p>
          </div>
        </section>

        <section id="get-in-touch" className="py-2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-blue-100 mb-3 text-center">تواصل معي</h2>
            <p className="text-gray-400 leading-relaxed mb-3 text-center">
              تريد الدردشة؟ فقط أرسل لي رسالة مباشرة مع سؤال مباشر على{' '}
              <a 
                href="https://t.me/Aldehri" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:underline"
              >
                Telegram
              </a>{' '}
              وسأرد عندما أستطيع.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
