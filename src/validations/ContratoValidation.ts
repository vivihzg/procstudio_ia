import { RegisterOptions } from "react-hook-form"

export const pessoaFisicaValidations = {
    cpf: {
        requerid: "CPF é obrigatório",
        pattern: {
            value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            message: "CPF deve estar no formato 000.000.000-00"
        }
    } as RegisterOptions,
    nacimento: {
        requerid: "Data de nascimento é obrigatório",
        pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: "Data deve estar no formato dd/mm/aaaa"
        }
    } as RegisterOptions,
    nome: {
        requerid: "Nome é obrigatório",
        minLength: {
            value: 3,
            message: "Nome deve ter pelo menos 3 caracteres"
        }
    } as RegisterOptions,
    estadoCivil: {
        required: "Estado civil é obrigatório"
    } as RegisterOptions,
    profissao: {
        required: "Profissão é obrigatório",
        minLength: {
            value: 2, 
            message: "Profissão deve ter pelo menos 2 caracteres"
        }
    } as RegisterOptions,
    cep: {
        requerid: "CEP é obrigatório",
        pattern: {
            value: /^\d{5}-\d{3}$/,
            message: "CEP deve estar no formato 00000-000"
        }
    } as RegisterOptions,
    numero: {
        requerid: "Número é obrigatório"
    } as RegisterOptions,
    endereco: {
        required: "Endereço é obrigatório",
        minLength: {
            value: 5, 
            message: "Endereço deve ter pelo menos 5 caracteres"
        }
    } as RegisterOptions
}

export const pessoaJuridicaValidation = {
    empresa: {
        required: "Nome da empresa é Obrigatório",
        minLength: {
            value: 3,
            message: "Nome da empresa deve ter pelo menos 3 caracteres"
        }
    } as RegisterOptions,
    cnpj: {
        required: "CNPJ é Obrigatório",
        pattern: {
            value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
            message: "CNPJ deve estar no formato 00.000.000/0000-00"
        }
    } as RegisterOptions,
    representante: {
        required: "Representante é Obrigatório",
        minLength: {
            value: 3,
            message: "Nome do representante deve ter pelo menos 3 caracteres"
        }
    } as RegisterOptions,
    cep: {
        required: "CEP é Obrigatório",
        pattern: {
            value: /^\d{5}-\d{3}$/,
            message: "CEP deve estar no formato 00000-000"
        }
    } as RegisterOptions,
    numero: {
        required: "Número é obrigatório"
    } as RegisterOptions,
    endereco: {
        required: "Endereço é obrigatório",
        minLength: {
            value: 5,
            message: "Endereço deve ter pelo menos 5 caracteres"
        }
    } as RegisterOptions
}

export const advogadoValidations = {
    oab: {
        required: "Número OAB é Obrigatório",
        pattern: {
            value: /^[A-Z]{2}\d{6}$/,
            message: "OAB deve estar no formato AA000000"
        }
    } as RegisterOptions,
    nome: {
        required: "Nome do advogado é obrigatório",
        minLength: {
            value: 3,
            message: "Nome deve ter pelo menos 3 caracteres"
        }
    } as RegisterOptions
}