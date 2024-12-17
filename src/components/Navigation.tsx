import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'ホーム', href: '#home' },
    { title: 'ゲーム紹介', href: '#about' },
    { title: 'キャラクター', href: '#characters' },
    { title: 'ゲームシリーズ', href: '#gallery' },
    { title: 'ダウンロード', href: '#download' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className={`text-xl font-bold ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            ファンタジーワールド
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-gray-900 text-lg py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}