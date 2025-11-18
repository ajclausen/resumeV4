import React, { useState, useEffect, useCallback } from 'react';
import { Search, Sun, Moon, Folder, User, Briefcase, GraduationCap, Mail, Activity, ChevronRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface Action {
  id: string;
  title: string;
  icon: React.ReactNode;
  perform: () => void;
  section?: string;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const actions: Action[] = [
    {
      id: 'about',
      title: 'Go to About',
      icon: <User className="w-4 h-4" />,
      perform: () => window.location.href = '#about',
      section: 'Navigation'
    },
    {
      id: 'experience',
      title: 'Go to Experience',
      icon: <Briefcase className="w-4 h-4" />,
      perform: () => window.location.href = '#experience',
      section: 'Navigation'
    },
    {
      id: 'projects',
      title: 'Go to Projects',
      icon: <Folder className="w-4 h-4" />,
      perform: () => window.location.href = '#projects',
      section: 'Navigation'
    },
    {
      id: 'education',
      title: 'Go to Education',
      icon: <GraduationCap className="w-4 h-4" />,
      perform: () => window.location.href = '#education',
      section: 'Navigation'
    },
    {
      id: 'contact',
      title: 'Go to Contact',
      icon: <Mail className="w-4 h-4" />,
      perform: () => window.location.href = '#contact',
      section: 'Navigation'
    },
    {
      id: 'theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      icon: theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />,
      perform: toggleTheme,
      section: 'Preferences'
    },
    {
      id: 'diagnostics',
      title: 'Run System Diagnostics',
      icon: <Activity className="w-4 h-4" />,
      perform: () => {
        alert('System Diagnostics: All Systems Operational. \nNetwork latency: 12ms. \nUptime: 99.99% \nRendered with React.');
      },
      section: 'System'
    }
  ];

  const filteredActions = actions.filter(action => 
    action.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }

    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredActions.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredActions.length) % filteredActions.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  }, [isOpen, filteredActions, selectedIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            className="flex-1 h-14 px-3 bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <div className="flex items-center gap-1 text-xs text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            <span>ESC</span>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredActions.length === 0 ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">
              No results found.
            </div>
          ) : (
            filteredActions.map((action, index) => (
              <button
                key={action.id}
                onClick={() => {
                  action.perform();
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  index === selectedIndex 
                    ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className={`${index === selectedIndex ? 'text-accent-500 dark:text-accent-400' : 'text-slate-400'}`}>
                  {action.icon}
                </div>
                <span className="flex-1 font-medium">{action.title}</span>
                {index === selectedIndex && <ChevronRight className="w-4 h-4" />}
              </button>
            ))
          )}
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-950/50 px-4 py-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500">
           <div className="flex items-center gap-1">
             <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
             <span>System Operational</span>
           </div>
           <div className="flex gap-3 font-mono opacity-70">
             <span><strong className="font-bold">↑↓</strong> to navigate</span>
             <span><strong className="font-bold">↵</strong> to select</span>
           </div>
        </div>
      </div>
    </div>
  );
};