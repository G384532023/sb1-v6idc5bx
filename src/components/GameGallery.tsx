import React from 'react';
import GameCard from './GameCard';

const games = [
  {
    id: 1,
    title: "ファンタジーRPG",
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80",
    description: "壮大な冒険が待っている伝統的なRPG",
    link: "/fantasy-rpg"
  },
  {
    id: 2,
    title: "アクションアドベンチャー",
    image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=80",
    description: "スリル満点のアクションゲーム",
    link: "/action-adventure"
  },
  {
    id: 3,
    title: "パズルワールド",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80",
    description: "頭脳を刺激する魅力的なパズルゲーム",
    link: "/puzzle-world"
  }
];

export default function GameGallery() {
  return (
    <section id="gallery" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">ゲームシリーズ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}