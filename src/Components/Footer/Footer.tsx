import logo from '../../assets/materiais/logo.png';
const Footer = () => {
    return (
        <footer className="bg-header flex px-5 py-10  md:justify-center md:items-center">
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-20 ">
                
                <div className="flex xl:items-start md:items-center ">
                    <img src={logo} alt="Logo do OPOVO" />
                </div>

                <div className="flex flex-col gap-4 text-xl md:text-md text-main-bg font-spartan font-light">
                    <a href="#" className="hover:text-white transition-colors">Sobre</a>
                    <a href="#" className="hover:text-white transition-colors">Contato</a>
                    <a href="#" className="hover:text-white transition-colors">Suporte</a>
                </div>

                <div className="flex flex-col gap-4 text-xl md:text-md text-main-bg font-spartan font-light">
                    <a href="#" className="hover:text-white transition-colors">Adicione um Filme</a>
                    <a href="#" className="hover:text-white transition-colors">Adicione uma Série</a>
                    <a href="#" className="hover:text-white transition-colors">Discussões</a>
                </div>

                <div className="flex flex-col gap-4 text-xl md:text-md text-main-bg font-spartan font-light">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                    <a href="#" className="hover:text-white transition-colors">Diretrizes</a>
                </div>

            </div>
        </footer>
    );
}
 
export default Footer;