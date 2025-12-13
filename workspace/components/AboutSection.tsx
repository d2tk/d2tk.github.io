import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-sm border-l-4 border-primary shadow-tactical dark:shadow-tactical-dark">
                <h2 className="font-mono font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="material-icons-outlined text-primary text-sm">warning_amber</span>
                    NOTICE
                </h2>
                <p className="text-sm font-mono text-stone-600 dark:text-zinc-400 mb-4">
                    SYSTEM STATUS: OPERATIONAL<br/>
                    MODE: EXPERIMENTAL<br/>
                    LAST UPDATE: 2025-12-13
                </p>
                <p className="leading-relaxed">
                    D2TK Lab is a digital experimentation facility. We build systems, fragment code, and document the chaos of development. 
                </p>
            </div>

            <div className="font-mono text-sm space-y-4">
                <div className="flex items-start gap-4 p-4 border border-stone-300 dark:border-zinc-700 rounded-sm border-dashed">
                    <span className="text-stone-400 dark:text-zinc-500 select-none">01</span>
                    <div>
                        <span className="text-accent-blue font-bold">def</span> <span className="text-primary">mission</span>():<br/>
                        &nbsp;&nbsp;return <span className="text-accent-green">"Build rugged tools."</span>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-stone-300 dark:border-zinc-700 rounded-sm border-dashed">
                    <span className="text-stone-400 dark:text-zinc-500 select-none">02</span>
                    <div>
                        <span className="text-accent-blue font-bold">const</span> stack = [<br/>
                        &nbsp;&nbsp;<span className="text-accent-green">"Obsidian",</span><br/>
                        &nbsp;&nbsp;<span className="text-accent-green">"Python",</span><br/>
                        &nbsp;&nbsp;<span className="text-accent-green">"Arch Linux",</span><br/>
                        &nbsp;&nbsp;<span className="text-accent-green">"TypeScript"</span>,<br/>
                       
                        ];
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                    <button className="w-full h-full flex items-center justify-center gap-2 p-3 border border-stone-300 dark:border-zinc-700 hover:bg-primary hover:text-black hover:border-primary transition-all rounded-sm font-mono text-sm uppercase bg-transparent text-text-light dark:text-text-dark">
                        <span className="material-icons-outlined text-base">face</span> About TK
                    </button>
                    <div className="absolute bottom-full left-0 mb-3 w-48 sm:w-56 p-3 bg-stone-900 dark:bg-zinc-100 text-stone-100 dark:text-zinc-900 text-xs font-mono rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 border border-stone-700 dark:border-zinc-300">
                        Endless learning journey: learning codes and exploring investments.
                    </div>
                </div>

                <a href="https://www.threads.com/@tk_dominance" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 border border-stone-300 dark:border-zinc-700 hover:bg-primary hover:text-black hover:border-primary transition-all rounded-sm font-mono text-sm uppercase">
                    <span className="material-icons-outlined text-base">alternate_email</span> Contact
                </a>
            </div>
        </section>
    );
};

export default AboutSection;
