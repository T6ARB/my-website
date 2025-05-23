import Link from 'next/link';
import { HomeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  isHome?: boolean;
  isBlog?: boolean;
  isPost?: boolean;
  title?: string;
}

export default function Header({ isHome = false, isBlog = false, isPost = false, title }: HeaderProps) {
  return (
    <header className="pt-12 pb-2 md:pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-5">
          <div>
            {isPost && (
              <Link 
                href="/blog" 
                className="inline-flex items-center bg-gray-800 text-gray-200 text-sm font-medium py-1.5 px-3 rounded-full transition-all hover:bg-gray-700 hover:text-cyan-400 mr-2"
              >
                <DocumentTextIcon className="h-4 w-4 mr-1.5" />
                المدونة
              </Link>
            )}
            {(isBlog || isPost) && (
              <Link 
                href="/" 
                className="inline-flex items-center bg-gray-800 text-gray-200 text-sm font-medium py-1.5 px-3 rounded-full transition-all hover:bg-gray-700 hover:text-cyan-400"
              >
                <HomeIcon className="h-4 w-4 mr-1.5" />
                الرئيسية
              </Link>
            )}
          </div>
          {isHome && (
            <Link 
              href="/blog" 
              className="inline-flex items-center bg-gray-800 text-gray-200 text-sm font-medium py-1.5 px-3 rounded-full transition-all hover:bg-gray-700 hover:text-cyan-400"
            >
              <DocumentTextIcon className="h-4 w-4 mr-1.5" />
              المدونة
            </Link>
          )}
        </div>
        
        {isHome && (
          <>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-2">
              مرحباً، أنا <span className="text-amber-400">Isaac</span>
              <span className="inline-block text-3xl md:text-4xl ml-2 animate-wave origin-[70%_70%]">👋</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-5">
              مطور ويب وتطبيقات شغوف بأنظمة GNU/Linux والأنظمة البسيطة.
            </p>
          </>
        )}
        
        {isBlog && (
          <>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-2">
              مدونة <span className="text-amber-400">Isaac</span>
              <DocumentTextIcon className="inline-block h-8 w-8 ml-2 text-gray-400" />
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-5">
              أفكار، دروس، ورؤى حول تطوير الويب، لينكس، والبرمجة.
            </p>
          </>
        )}
        
        {isPost && title && (
          <>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-2">
              <span className="text-amber-400">{title}</span>
            </h1>
            <div className="flex items-center text-gray-400 mb-6">
              <div className="mr-4 flex items-center">
                <svg className="h-5 w-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                21 مايو، 2025
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Isaac
              </div>
            </div>
          </>
        )}
        
        {isHome && (
          <div className="flex items-center gap-3 mb-3">
            <a 
              href="https://github.com/T6ARB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="mailto:aldehri@outlook.com" 
              aria-label="Send an Email"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
            <a 
              href="https://t.me/aldehri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Telegram Profile"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
