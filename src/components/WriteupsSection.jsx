import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown, ChevronUp, FileText, Star } from 'lucide-react'
import writeups from '../data/writeupsIndex'

// ── Collect unique categories ───────────────────────────────────────────────
const ALL_CATEGORIES = ['All', ...Array.from(new Set(writeups.map((w) => w.category))).sort()]

// ── Single card ─────────────────────────────────────────────────────────────
function WriteupCard({ writeup, index, isExpanded, onToggle }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white dark:bg-dark-900 rounded-2xl overflow-hidden border border-dark-100 dark:border-dark-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Accent top bar */}
      <div
        className="h-1.5 w-full transition-all duration-500 group-hover:h-2"
        style={{ background: writeup.accent }}
      />

      {/* Featured badge */}
      {writeup.isFeatured && (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full z-10">
          <Star size={11} fill="currentColor" />
          Featured
        </div>
      )}

      <div className="p-6 flex flex-col gap-4">

        {/* Top row: category pill + ID */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
            style={{ color: writeup.accent, background: writeup.accentBg }}
          >
            <FileText size={12} />
            {writeup.category}
          </span>
          <span className="font-mono text-[10px] tracking-widest text-dark-300 dark:text-dark-600 uppercase">
            {writeup.id} · {new Date(writeup.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-xl leading-snug text-dark-800 dark:text-white transition-colors duration-300"
          style={{ '--hover-color': writeup.accent }}
        >
          <span className="group-hover:text-[--hover-color] transition-colors duration-300">
            {writeup.title}
          </span>
        </h3>

        {/* Abstract */}
        <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
          {writeup.abstract}
        </p>

        {/* Expandable highlights */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="highlights"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pt-1 pb-2">
                <p className="font-mono text-[10px] uppercase tracking-widest text-dark-400 dark:text-dark-500 mb-3">
                  Key findings
                </p>
                <ul className="space-y-2">
                  {writeup.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-dark-600 dark:text-dark-300">
                      <span
                        className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: writeup.accentBg }}
                      >
                        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" style={{ color: writeup.accent }}>
                          <path
                            d="M2 5l2.5 2.5 3.5-4"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {writeup.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-md bg-dark-50 dark:bg-dark-800 text-dark-500 dark:text-dark-400 border border-dark-100 dark:border-dark-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 border-t border-dark-100 dark:border-dark-800">
          <div className="flex items-center gap-3">
            <span className="text-xs text-dark-400 dark:text-dark-500">{writeup.readTime}</span>
            <button
              onClick={onToggle}
              className="flex items-center gap-1 text-xs text-dark-400 dark:text-dark-500 hover:text-dark-600 dark:hover:text-dark-300 transition-colors"
              aria-label={isExpanded ? 'Collapse highlights' : 'Show highlights'}
            >
              {isExpanded ? (
                <>Hide <ChevronUp size={13} /></>
              ) : (
                <>Preview <ChevronDown size={13} /></>
              )}
            </button>
          </div>

          <a
            href={writeup.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: writeup.accent }}
            onClick={(e) => e.stopPropagation()}
          >
            Read writeup <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function WriteupsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = useMemo(() => {
    return activeCategory === 'All'
      ? writeups
      : writeups.filter((w) => w.category === activeCategory)
  }, [activeCategory])

  const featured = writeups.find((w) => w.isFeatured)
  const featuredInResults = featured && filtered.find((w) => w.id === featured.id)
  const rest = filtered.filter((w) => !w.isFeatured)

  return (
    <section id="writeups" className="section-container">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Lab Writeups</h2>
        <p className="section-subtitle">
          Documented analyses and technical deep-dives from hands-on labs and real-world datasets
        </p>
      </motion.div>

      {/* ── Category filters ── */}
      {ALL_CATEGORIES.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-10 flex flex-wrap gap-2 justify-center"
        >
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-400 border-dark-200 dark:border-dark-700 hover:border-primary-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      )}

      {/* ── Count ── */}
      <div className="max-w-6xl mx-auto mb-6 flex items-center gap-2 text-sm text-dark-400 dark:text-dark-500">
        <FileText size={14} />
        {filtered.length} {filtered.length === 1 ? 'writeup' : 'writeups'} found
      </div>

      {/* ── Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-dark-400 dark:text-dark-500">
              <FileText size={40} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">No writeups in this category yet.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-primary-600 dark:text-primary-400 text-sm underline"
              >
                Show all
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredInResults && (
                <WriteupCard
                  writeup={featuredInResults}
                  index={0}
                  isExpanded={expandedId === featuredInResults.id}
                  onToggle={() =>
                    setExpandedId(expandedId === featuredInResults.id ? null : featuredInResults.id)
                  }
                />
              )}
              {rest.map((w, i) => (
                <WriteupCard
                  key={w.id}
                  writeup={w}
                  index={featuredInResults ? i + 1 : i}
                  isExpanded={expandedId === w.id}
                  onToggle={() => setExpandedId(expandedId === w.id ? null : w.id)}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}