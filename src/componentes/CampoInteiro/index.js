import React from 'react'
import { TextInput } from 'react-native'
import estilosPadrao from './estilos'

export default function CampoInteiro({valor,acao, estilos}) {

    const atualiza = (novoValor, acaoRetorno) => { //verifica se existe letras e depois retorna o número sem 0 a esquerda a partir do 2 numero 

        const verificaInteiro = novoValor.match(/^[0-9]*$/)
        if(!verificaInteiro) {
            return //se for uma letra, retorna
        }

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/,'$2')

        acaoRetorno(removeZeroEsquerda)
    }

    const numeroEmTexto = String(valor)
    return (
        <>
            <TextInput 
            style={[estilosPadrao.campo, estilos]}
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(novoValor) => {
                atualiza(novoValor,acao)
            }}
            value={numeroEmTexto}
            />
        </>
    )
}