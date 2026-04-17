import capa from '../../assets/materiais/capa.png'
const Banner = () => {
    return (
        <>
            <section className="py-10 px-10 max-w-7xl mx-auto">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2   items-center">
                        
                        <div className='flex justify-center items-center xl:justify-end  w-full'>
                            <div className='max-w-md lg:max-w-full'>
                                <img src={capa} alt="" className='w-auto object-cover' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='text-center lg:text-left md:mt-10 lg:mt-0'>
                                <h1 className='font-spartan font-bold text-header text-3xl md:text-5xl lg:text-5xl leading-tight'>Barbie:
                                    <span className='text-pink-500'> O Filme</span>
                                </h1>
                            </div>
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='font-bold text-header text-xl md:text-2xl flex items-center gap-2'>Gênero:</h3>
                                    <p className='text-dark font-normal text-lg'>Ação, Comédia, Fantasia</p>
                                </div>
                                <div>
                                    <h3 className='font-bold text-header text-xl md:text-2xl flex items-center gap-2'>Sinopse:</h3>
                                    <p className='text-dark font-normal text-lg leading-relaxed text-justify md:text-left'>
                                        No mundo mágico das Barbies, "Barbieland", uma das bonecas começa a perceber que não se encaixa como as outras. 
                                        Depois de ser expulsa, ela parte para uma aventura no "mundo real", onde descobre que a beleza está no interior de cada um.
                                    </p>
                                </div>
                                <div className='grid grid-cols-2 gap-x-4 gap-y-6 pt-4 border-t border-gray-200'>
                            <div>
                                <h4 className='font-bold text-header text-xl md:text-2xl flex items-center gap-2'> Direção</h4>
                                <p className='text-dark font-normal text-lg leading-relaxed text-justify md:text-left'>Greta Gerwig</p>
                            </div>
                            <div>
                                <h4 className='font-bold text-header text-xl md:text-2xl flex items-center gap-2'> Roteiro</h4>
                                <p className='text-dark font-normal text-lg leading-relaxed text-justify md:text-left'>Greta Gerwig, Noah Baumbach</p>
                            </div>
                            <div>
                                <h4 className='font-bold text-header text-xl md:text-2xl flex items-center gap-2'>Situação</h4>
                                <p className='text-dark font-normal text-lg leading-relaxed text-justify md:text-left'>Lançado</p>
                            </div>
                            <div>
                                <h4 className='font-bold text-header text-xl md:text-2xl flex items-center gap-2'>Idioma Original</h4>
                                <p className='text-dark font-normal text-lg leading-relaxed text-justify md:text-left'>Inglês</p>
                            </div>
                           
                            <div>
                                <h4 className='font-bold text-header text-xl md:text-2xl flex items-center gap-2'> Orçamento</h4>
                                <p className='text-dark font-normal text-lg leading-relaxed text-justify md:text-left'>$145,000,000.00</p>
                            </div>
                            <div>
                                <h4 className='font-bold text-header text-xl md:text-2xl flex items-center gap-2'> Receita</h4>
                                <p className='text-dark font-normal text-lg leading-relaxed text-justify md:text-left'>$1,280,313,193.00</p>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>               
            </section>
        </>
    );
}
 
export default Banner;