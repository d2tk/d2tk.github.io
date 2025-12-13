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
                    LAST UPDATE: 2025-12-11                    
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
                        &nbsp;&nbsp;<span className="text-accent-green">"Obsidian"</span><br/>
                        &nbsp;&nbsp;<span className="text-accent-green">"Python"</span><br/>
                        &nbsp;&nbsp;<span className="text-accent-green">"Typescript"</span>,<br/>
                        &nbsp;&nbsp;<span className="text-accent-green">"Rust"</span>,<br/>                        
                        ];
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <a
                    href="#"
                    title="Endless learning journey: Python, TypeScript, PostgreSQL, Vue3, Rust, and exploring stocks & investments."
                    className="relative group flex items-center justify-center gap-2 p-3
                            border border-stone-300 dark:border-zinc-700
                            hover:bg-primary hover:text-black hover:border-primary
                            transition-all rounded-sm font-mono text-sm uppercase"
                >
                    <span className="material-icons-outlined text-base">info</span>
                    About TK

                    <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                px-2 py-1 text-xs text-white bg-gray-800 rounded
                                opacity-0 group-hover:opacity-100 transition-opacity
                                whitespace-nowrap"
                    >
                    Endless learning journey: Python, TypeScript, PostgreSQL, Vue3, Rust,
                    and exploring stocks & investments.
                    </span>
                </a>

                <a href="#" className="flex items-center justify-center gap-2 p-3 border border-stone-300 dark:border-zinc-700 hover:bg-primary hover:text-black hover:border-primary transition-all rounded-sm font-mono text-sm uppercase">
                    <span className="material-icons-outlined text-base">code</span> Github
                </a>
                <a href="#" className="flex items-center justify-center gap-2 p-3 border border-stone-300 dark:border-zinc-700 hover:bg-primary hover:text-black hover:border-primary transition-all rounded-sm font-mono text-sm uppercase">
                    <span className="material-icons-outlined text-base">alternate_email</span> Contact
                </a>
            </div>
        </section>
    );
};

export default AboutSection;