"use client"

import ContratoLayout from "@/layout/ContratoLayout"
import ConfigModelLayout from "@/layout/ConfigModelLayout"
import InstrucaoLayout from "@/layout/InstrucaoLayout"
import GuiaLayout from "@/layout/GuiaLayout"
export default function Page() {
  return (
    <>
      <main className="p-24">
        <div className="max-w-3xl mx-auto space-y-4">
          <GuiaLayout />
          <ContratoLayout />
          <ConfigModelLayout />
          <InstrucaoLayout />
        </div>
      </main>
    </>
  )
}
