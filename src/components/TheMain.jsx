import style from "../css/modules/SquareMain.module.css";
export default function TheMain () {
    return(
        <main className="bg-gray-200 h-[calc(100vh-160px)] flex items-center justify-center">

            <div className= {`${style.square}`}>

                <div className="h-3/5 bg-gray-400 rounded-t-3xl flex justify-center">
                    <img className="max-w-full max-h-full" src="/mac_entra.png" alt="#" />
                </div>

                <div>
                    <h3 className="p-1 font-semibold">
                        Mac che urla
                    </h3>
                    <p className="p-1">Non può entrare.. 
                        Entra? 
                        Non entra! 
                        Entraaaaaaa? 
                        Non entraa! 
                        Entraaaaaaaa? 
                        Non penso proprio..
                    </p>
                    <button className="p-2 bg-yellow-600 text-white m-1 hover:text-black">
                        Beccati sto Cigno per favore
                    </button>
                </div>

            </div>
            
        </main>
    );
}