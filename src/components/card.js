export default function Card({name, description, technologies}) {
    return (
    <div className="bg-gray-400 mx-auto mb-8 min-w-[300px] max-w-[800px] rounded-xl">
        <div className="py-2 px-4 flex flex-col">
            <section className="min-h-[40px] flex items-center justify-center">{name}</section>
            <section className="text-left flex items-center justify-start min-h-[80px]">{description}</section>
            <section className="min-h-[40px] flex items-center justify-center">{technologies}</section>
        </div>
    </div>
    )
}