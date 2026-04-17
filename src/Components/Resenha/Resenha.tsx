import { Link } from "react-router-dom";

const Resenha = () => {
    return (
        <section className="flex justify-center items-center py-12 px-4 md:py-20 md:px-10 ">
            <div className="w-full max-w-7xl">
                
                <div className="flex justify-between items-center w-full mb-10 px-5">
                    <h1 className="font-spartan font-bold text-header text-3xl md:text-4xl">
                        Resenhas
                    </h1>
                    <Link 
                        to="/resenha" 
                        className="font-spartan text-sm md:text-base bg-header text-sand px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Ver mais
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
                    
                    <article className="flex flex-col justify-between gap-6 p-6 md:p-10 bg-sand rounded-2xl shadow-lg shadow-black/10">
                        <p className="text-justify text-header leading-relaxed">
                            Um filme super divertido, muito engraçado e reflexivo acerca da vida e da nossa sociedade. Em sua grande maioria, apresenta críticas pontuais, bem escritas e muito inteligentes, porém, há momentos em que essas críticas se tornam repetitivas, o que foi um pequeno e praticamente único problema para mim. De resto, é tudo perfeito, as atuações estão impecáveis, Ryan Gosling e Margot Robbie estão incríveis, a direção de Greta Gerwig também é ótima...
                        </p>
                        
                        <div className="space-y-4">
                            <p className="text-sm md:text-base">
                                Por: <span className="font-bold text-header ml-1">Hementon Renner</span>
                            </p>
                            
                            <div className="flex justify-between items-center border-t border-header/10 pt-4">
                                <time className="text-header text-xs md:text-sm uppercase tracking-wider" dateTime="2023-07-21">
                                    21 de julho de 2023
                                </time>
                                <p className="font-normal text-header text-sm md:text-base">Nota: 
                                    <span className="font-bold text-lg md:text-xl ml-1">9/
                                        <span className="font-normal text-lg md:text-xl">10</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </article>

                    
                    <article className="flex flex-col justify-between gap-6 p-6 md:p-10 bg-sand rounded-2xl shadow-lg shadow-black/10">
                        <div className="space-y-4">
                            <h2 className="font-normal text-header text-lg md:text-xl leading-snug">
                                Título: Uma Celebração Encantadora e Empoderadora - "Barbie" (2023)
                            </h2>
                            <p className="text-header text-justify leading-relaxed">
                                "Barbie" é uma adorável surpresa cinematográfica que honra o icônico ícone cultural que é a boneca Barbie. Sob a brilhante interpretação de Margot Robbie, o filme é um verdadeiro deleite, repleto de charme, humor e vulnerabilidade...
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm md:text-base">
                                Por: <span className="font-bold text-header ml-1">Achilles</span>
                            </p>
                            
                            <div className="flex justify-between items-center border-t border-header/10 pt-4">
                                <time className="text-header text-xs md:text-sm uppercase tracking-wider" dateTime="2023-07-26">
                                    26 de julho de 2023
                                </time>
                                <p className="font-normal text-header text-sm md:text-base">Nota: 
                                    <span className="font-bold text-lg md:text-xl ml-1">10/
                                        <span className="font-normal text-lg md:text-xl">10</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Resenha;