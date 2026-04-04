export default function Marquee() {
    const text = "24/7 DISPATCH • FLATBED TOWING • ACCIDENT RECOVERY • RAPID ETA • ROADSIDE ASSISTANCE • ";
    const repeatedText = Array(15).fill(text).join("");

    return (
        <div className="bg-brand-orange text-brand-dark py-3 md:py-4 overflow-hidden border-b-8 border-brand-dark flex whitespace-nowrap select-none">
            <div className="animate-marquee inline-block font-black text-2xl md:text-3xl uppercase tracking-tighter shrink-0">
                {repeatedText}
            </div>
            <div className="animate-marquee inline-block font-black text-2xl md:text-3xl uppercase tracking-tighter shrink-0" aria-hidden="true">
                {repeatedText}
            </div>
        </div>
    );
}
