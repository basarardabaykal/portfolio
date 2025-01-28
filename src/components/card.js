export default function Card({name, description, keywords}) {
    return (
    <div className="bg-zinc-500 opacity-100 text-white mx-auto mb-8 min-w-[300px] max-w-[800px] rounded-xl font-sans shadow-xl">
        <div className="py-2 px-4 flex flex-col">
            <section className="min-h-[40px] flex items-center justify-center text-cyan-300 text-xl border-b-[0.5px] border-gray-400">{name}</section>
            <section className="text-left flex items-center justify-start min-h-[60px] text-lg border-b-[0.5px] border-gray-400">{description}</section>
            <section className="min-h-[40px] flex items-center justify-center text-amber-300 text-xl">
                {keywords.map(keyword => (<p className="mx-2">{keyword}</p>))}
            </section>
        </div>
    </div>
    )
}