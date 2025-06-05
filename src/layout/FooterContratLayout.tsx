import { Button } from "@/components/ui/button"
function FooterContratLayout(){
    return(
        <div className="bg-[#FEFEFA] border rounded-[8px] border-[#EDEDED] h-[80px]">
            <div className="flex flex-row-reverse p-5">
                <Button className="text-[16px] font-semibold bg-[#0277EE]">Gerar meu contrato</Button>
            </div>
        </div>
    )
}
export default FooterContratLayout