export default function CyberpunkAIPortfolio() {
  const projects = [
    {
      title: "AI漫剧实验室",
      tag: "AI Creator",
      desc: "用 AI 制作科技漫剧，把复杂概念变成可视化叙事。",
    },
    {
      title: "AI Agent 研究",
      tag: "Research",
      desc: "持续探索 Agent 工作流、自动化系统与 Vibe Coding。",
    },
    {
      title: "Web3 × ZK",
      tag: "Web3",
      desc: "研究零知识证明、链上身份与未来互联网。",
    },
  ];

  const blogs = [
    "AI Agent 是什么",
    "Vibe Coding 工作流",
    "零知识证明入门",
    "AI安防未来趋势",
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-300 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#00ffff,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <section className="min-h-screen flex flex-col justify-center">
          <div className="mb-6 text-pink-400 tracking-[8px] text-sm">
            AI × WEB3 × CYBER FUTURE
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-none mb-6">
            jiayuan
          </h1>

          <div className="text-2xl text-cyan-100 mb-8">
            测试工程师 / AI创作者 / 科技博主 / Web3探索者
          </div>

          <p className="max-w-2xl text-zinc-400 leading-8 text-lg">
            我正在构建未来：AI Agent、AI安防、Vibe Coding、Web3与科技内容创作。
            用技术、叙事和想象力，把未来提前带到今天。
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="rounded-2xl px-8 py-4 bg-cyan-400 text-black font-bold shadow-2xl hover:scale-105 transition">
              进入作品宇宙
            </button>

            <button className="rounded-2xl px-8 py-4 border border-cyan-500 hover:bg-cyan-500/20">
              探索博客
            </button>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-pink-400">
            PROJECTS.exe
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((item) => (
              <div className="rounded-[30px] p-6 backdrop-blur bg-white/5 border border-cyan-900 hover:-translate-y-2 transition shadow-2xl">
                <div className="text-sm text-pink-500 mb-3">{item.tag}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-cyan-300">BLOG_FEED</h2>

          <div className="space-y-5">
            {blogs.map((blog) => (
              <div className="border-l-4 border-pink-500 pl-5 py-4 bg-white/5 rounded-r-2xl hover:translate-x-2 transition">
                {blog}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center border-t border-cyan-900">
          <h2 className="text-4xl font-bold mb-4 text-pink-400">连接未来</h2>

          <div className="text-zinc-400 space-y-3">
            <div>Github</div>
            <div>B站</div>
            <div>小红书</div>
            <div>Email</div>
          </div>

          <p className="mt-10 text-zinc-600 text-sm">
            SYSTEM STATUS : BUILDING THE FUTURE...
          </p>
        </section>
      </div>
    </div>
  );
}
