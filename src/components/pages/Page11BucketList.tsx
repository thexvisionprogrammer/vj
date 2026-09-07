import React, { useState } from 'react';
import { Compass, CheckCircle2, Circle, Plus, MapPin } from 'lucide-react';
import type { BucketItem } from '../../data/birthdayData';

interface Page11BucketListProps {
  initialBucketList: BucketItem[];
}

export const Page11BucketList: React.FC<Page11BucketListProps> = ({ initialBucketList }) => {
  const [items, setItems] = useState<BucketItem[]>(initialBucketList);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<BucketItem['category']>('Travel');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const toggleComplete = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newItem: BucketItem = {
      id: Date.now(),
      title: newTitle.trim(),
      category: newCategory,
      completed: false,
    };
    setItems([...items, newItem]);
    setNewTitle('');
  };

  const categories = ['All', 'Travel', 'Experience', 'Food', 'Crazy Dream'];

  const filteredItems = activeFilter === 'All'
    ? items
    : items.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Chapter 11: Dream Adventures
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-teal-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent mb-3">
            Our Future Bucket List
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            All the crazy adventures, cozy destinations, and dream goals we are going to conquer together!
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-lg shadow-teal-500/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Add Item Form */}
        <form onSubmit={handleAddItem} className="glass-card p-4 border border-teal-500/30 rounded-2xl mb-8 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Add a new dream to our bucket list..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value as BucketItem['category'])}
            className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-teal-500"
          >
            <option value="Travel">Travel</option>
            <option value="Experience">Experience</option>
            <option value="Food">Food</option>
            <option value="Crazy Dream">Crazy Dream</option>
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" /> Add Dream
          </button>
        </form>

        {/* Bucket List Items */}
        <div className="space-y-3 mb-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleComplete(item.id)}
              className={`glass-card p-4 border rounded-2xl flex items-center justify-between cursor-pointer transition-all ${
                item.completed
                  ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'
                  : 'border-white/10 hover:border-teal-500/40 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3.5">
                {item.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 fill-emerald-400/20 flex-shrink-0" />
                ) : (
                  <Circle className="w-6 h-6 text-slate-500 flex-shrink-0" />
                )}
                <div>
                  <span className={`text-base font-medium ${item.completed ? 'line-through opacity-75' : ''}`}>
                    {item.title}
                  </span>
                  {item.location && (
                    <div className="flex items-center gap-1 text-xs text-teal-400 mt-0.5">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </div>
                  )}
                </div>
              </div>

              <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${
                item.completed
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}>
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
