import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import './Blog.css';

const blogPosts = [
  {
    slug: 'building-ai-first-web-apps',
    category: 'Full-Stack + AI',
    title: 'Building AI-First Full-Stack Applications',
    excerpt:
      'How I combine React, Node.js, MongoDB, and AI to build modern, scalable applications.',
    content:
      'My development approach combines full-stack engineering with AI-powered experiences. I build responsive React interfaces, scalable Express and Node.js APIs, well-structured MongoDB databases, and integrate LLMs, automation, and intelligent workflows to create products that solve real problems.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
  },
  {
    slug: 'building-ai-agents',
    category: 'AI & AI Agents',
    title: 'Building AI Agents That Solve Real Problems',
    excerpt:
      'My journey into LLMs, automation, and AI agents that can reason, respond, and take action.',
    content:
      'I am building AI agents that go beyond simple chatbots. By combining LLMs, APIs, workflows, and automation, AI agents can perform tasks, assist users, and improve productivity. My goal is to create intelligent systems that are practical, reliable, and useful for real-world applications.',
    tags: ['LLMs', 'AI Agents', 'Automation', 'APIs'],
  },
  {
    slug: 'deployment-workflow',
    category: 'Deployment',
    title: 'From Local Development to Production',
    excerpt:
      'How I deploy projects using GitHub, Vercel, Render, and modern development workflows.',
    content:
      'A production-ready project is more than writing code. I use GitHub for version control, Vercel and Render for deployment, environment variables for security, and clean workflows that make updates faster and more reliable.',
    tags: ['GitHub', 'Vercel', 'Render', 'CI/CD'],
  },
  {
    slug: 'data-driven-decisions',
    category: 'Data Analytics',
    title: 'Turning Data into Better Decisions',
    excerpt:
      'Using Python, Pandas, visualization, and machine learning to uncover meaningful insights.',
    content:
      'Data tells a story when it is cleaned, analyzed, and visualized correctly. I use Python, Pandas, Matplotlib, and machine learning techniques to explore patterns, improve models, and present insights that are easy to understand.',
    tags: ['Python', 'Pandas', 'ML', 'Visualization'],
  },
  {
    slug: 'building-zenvy-technologies',
    category: 'Founder Journey',
    title: 'Building Zenvy Technologies',
    excerpt:
      'The vision behind creating products like ZenvyLance, SenseAble AI, and future AI-powered solutions.',
    content:
      'Zenvy Technologies is my journey from building client websites to creating AI-powered products. My vision is to develop software, AI agents, and digital solutions that solve meaningful problems. Projects like ZenvyLance and SenseAble AI represent the first steps toward building a long-term technology company.',
    tags: ['Zenvy Technologies', 'Startup', 'AI', 'Innovation'],
  },
];

export default function Blog() {
  const [ref, visible] = useScrollReveal();
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Blog</p>
        <h2 className="section-title">Ideas, Builds & Insights</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          I write about AI & AI Agent Engineering, full-stack development, data
          analytics, deployment workflows, and my journey as the founder of Zenvy
          Technologies.
        </p>
      </div>

      <div ref={ref} className="space-y-4">
        {blogPosts.map((post, i) => (
          <motion.button
            key={post.slug}
            type="button"
            onClick={() => setSelectedPost(post)}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card group flex w-full items-center justify-between gap-6 p-6 text-left"
          >
            <div>
              <p className="font-mono text-xs text-accent-cyan">
                {post.category}
              </p>
              <h3 className="mt-1 font-display font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{post.excerpt}</p>
            </div>

            <FiArrowUpRight className="flex-none text-lg text-slate-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-purple" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="blog-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="blog-modal-card"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="blog-modal-close"
                onClick={() => setSelectedPost(null)}
                aria-label="Close blog popup"
              >
                <FiX />
              </button>

              <p className="font-mono text-xs text-accent-cyan">
                {selectedPost.category}
              </p>

              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {selectedPost.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {selectedPost.content}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
