import { Play } from "lucide-react"
function GuiaLayout() {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-4">
            <h2 className="text-[18px] text-[#999999] font-semibold mb-4">Guia de Preenchimento</h2>

            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-[#373F45] mb-3">
                        Preencha os campos do formulário para gerar o contrato
                    </h3>
                    <p className="text-[#999999] font-semibold text-[16px]">
                        Você pode editar as informações e gerar um novo contrato sempre que necessário. Caso precise de suporte
                        adicional durante o processo, assista ao nosso vídeo de orientação.
                    </p>
                </div>

                <div className="w-full md:w-96 h-52 relative rounded-lg overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <button
                        className="relative z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                        aria-label="Assistir vídeo de orientação"
                    >
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default GuiaLayout