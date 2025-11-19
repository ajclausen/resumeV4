import React, { useState, useRef, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { TECH_CATEGORIES } from '../data';

interface TechStackProps {
    className?: string;
}

export const TechStack: React.FC<TechStackProps> = ({ className = "" }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative p-1 rounded-2xl bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-2xl overflow-hidden group ${className}`}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent 40%)`
                }}
            />

            <div className="relative z-20 bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Shield className="w-4 h-4 text-accent-500" />
                        Core Tech Stack
                    </h3>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75" />
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150" />
                    </div>
                </div>

                <div className="grid gap-4">
                    {TECH_CATEGORIES.map((category) => (
                        <div
                            key={category.title}
                            className="group/item relative overflow-hidden rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 transition-all hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-accent-500/10 hover:border-accent-500/30"
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover/item:opacity-5 bg-gradient-to-r ${category.gradient} transition-opacity`} />

                            <div className="relative z-10">
                                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                                    {category.title}
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                                        >
                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            </div>
        </div>
    );
};
