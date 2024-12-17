import React from 'react';
import Navigation from './components/Navigation';
import GameSection from './components/GameSection';
import GameGallery from './components/GameGallery';

function App() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section with Background */}
      <div 
        className="relative bg-fixed bg-cover bg-center min-h-screen"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative min-h-screen flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6 text-white">ファンタジーワールド</h1>
            <p className="text-xl mb-8 text-white">新しい冒険の世界へようこそ</p>
            <a
              href="#download"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              今すぐプレイ
            </a>
          </div>
        </div>
      </div>

      {/* White Background Sections */}
      <div className="bg-white relative z-10">
        <GameSection
          id="about"
          title="ゲームの世界"
          description="広大なオープンワールドで、自分だけの冒険を見つけましょう。魔法や剣術を駆使して、強大な敵に立ち向かい、仲間たちと共に世界を救う壮大な物語が始まります。"
          imageUrl="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
        />

        <GameSection
          id="characters"
          title="個性豊かなキャラクター"
          description="様々な特徴を持つキャラクターたちがあなたの冒険をサポート。それぞれのキャラクターが持つ独自のストーリーと能力で、プレイヤーの選択肢が広がります。"
          imageUrl="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
          reverse
        />

        <GameGallery />

        <section id="download" className="min-h-screen flex items-center justify-center text-center py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">ダウンロード</h2>
            <p className="text-xl mb-8 text-gray-600">無料でプレイを開始しよう</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                PC版をダウンロード
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                モバイル版をダウンロード
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;