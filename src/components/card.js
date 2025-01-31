import {motion} from "framer-motion"

export default function Card({name, description, keywords}) {
    return (
    <motion.div 
    whileInView={{ x: [-20, 10, -5, 0] }}
    transition={{duration: 0.5, ease: "easeInOut"}}
    className="bg-zinc-500 opacity-100 text-white mx-auto mb-8 min-w-[200px] max-w-[800px] rounded-xl font-sans shadow-xl"
    >
        <div className="py-2 px-4 flex flex-col">
            <section className="min-h-[40px] flex items-center justify-center text-cyan-300 lg:text-xl text-base border-b-[0.5px] border-gray-400">{name}</section>
            <section className="text-left flex items-center justify-start min-h-[60px] lg:text-lg text-sm border-b-[0.5px] border-gray-400 py-2">{description}</section>
            <section className="min-h-[40px] flex flex-wrap items-center justify-center text-amber-300 lg:text-xl text-base">
                {keywords.map(keyword => (<p className="mx-2">{keyword}</p>))}
            </section>
        </div>
    </motion.div>
    )
}