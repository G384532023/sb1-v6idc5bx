import React from 'react';

interface GameSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function GameSection({ id, title, description, imageUrl, reverse = false }: GameSectionProps) {
  return (
    <section id={id} className="min-h-screen flex items-center py-20">
      <div className={`container mx-auto px-4 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="flex-1">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg shadow-2xl w-full object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>
    </section>
  );
}