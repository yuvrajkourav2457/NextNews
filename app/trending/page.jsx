import React from 'react';
import { NewspaperIcon, TrendingUp, Clock, BookOpen, Share2, MessageSquare, Bookmark, ChevronRight } from 'lucide-react';

function App() {
  const trendingNews = [
    {
      id: 1,
      category: "Technology",
      title: "AI Breakthrough: New Model Achieves Human-Level Understanding",
      description: "Revolutionary new AI model demonstrates unprecedented levels of language comprehension and reasoning abilities...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min",
      comments: 128,
      trending: 92,
    },
    {
      id: 2,
      category: "Science",
      title: "Scientists Discover New Earth-Like Planet in Habitable Zone",
      description: "Astronomers have identified a potentially habitable exoplanet that closely resembles Earth in size and composition...",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min",
      comments: 256,
      trending: 88,
    },
    {
      id: 3,
      category: "Business",
      title: "Global Markets React to Revolutionary Green Energy Innovation",
      description: "Stock markets worldwide show significant movement as breakthrough in renewable energy technology promises to reshape...",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min",
      comments: 184,
      trending: 95,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-6 h-6 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Trending Now</h1>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingNews.map((news) => (
            <article key={news.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                  {news.category}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {news.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{news.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>AI Summary</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="text-gray-500 hover:text-purple-600 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-purple-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-purple-600 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">{news.trending}%</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg border border-purple-200 hover:border-purple-600 transition-colors">
            View More Stories
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;