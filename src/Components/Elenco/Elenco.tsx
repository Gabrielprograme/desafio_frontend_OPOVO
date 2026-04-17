import { Link } from "react-router-dom";
import {Carrossel} from "./Carrossel";
const Elenco = () => {
    return (
        <>
           <section className="bg-sand py-12 px-4 md:py-20 md:px-10 ">
            <div className="max-w-5xl mx-auto mb-8 flex justify-between items-center w-full">
                <h2 className="font-spartan font-bold text-header text-3xl md:text-4xl">
                    Elenco
                </h2>
                <Link to="/elenco" className="font-spartan text-sm md:text-base bg-header text-sand px-6 py-2 rounded-lg hover:opacity-90 transition-opacity ">
                    Ver mais
                </Link>
            </div>

            <div className="max-w-6xl mx-auto">
                <Carrossel />
            </div>
        </section>
        </>
    );
}
 
export default Elenco;