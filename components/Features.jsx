import { Newspaper, Bell, Bookmark, Mic, Filter, Zap } from "lucide-react"

export default function NewsFeatures() {
  const features = [
    {
      title: "AI Summarizer",
      description: "Get concise summaries of lengthy articles in seconds",
      icon: Newspaper,
      color: "bg-fuchsia-600",
      lightColor: "bg-fuchsia-100",
    },
    {
      title: "Breaking Alerts",
      description: "Real-time notifications for stories that matter to you",
      icon: Bell,
      color: "bg-amber-500",
      lightColor: "bg-amber-100",
    },
    {
      title: "Save & Read Later",
      description: "Bookmark articles for offline reading anytime, anywhere",
      icon: Bookmark,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-100",
    },
    {
      title: "Audio News",
      description: "Listen to your favorite articles during your commute",
      icon: Mic,
      color: "bg-sky-500",
      lightColor: "bg-sky-100",
    },
    {
      title: "Topic Filters",
      description: "Customize your feed with the topics you care about most",
      icon: Filter,
      color: "bg-purple-600",
      lightColor: "bg-purple-100",
    },
    {
      title: "Trending Now",
      description: "Discover what's hot and viral across the globe instantly",
      icon: Zap,
      color: "bg-rose-500",
      lightColor: "bg-rose-100",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-slate-800">
        Powerful Features for News Lovers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-400 hover:-translate-y-1`}
          >
            <div
              className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-20 ${feature.lightColor}`}
            ></div>

            <div className="relative p-6 h-full flex flex-col bg-white border border-slate-100">
              <div className={`${feature.color} text-white p-3 rounded-lg w-fit mb-4`}>
                <feature.icon size={24} />
              </div>

              <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-slate-900">{feature.title}</h3>

              <p className="text-slate-600 text-sm flex-grow">{feature.description}</p>

              <div className="mt-4 pt-3 border-t border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                  Learn more →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

