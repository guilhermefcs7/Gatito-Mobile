import React, { useState } from 'react'

import {View,Text} from 'react-native'

import CampoInteiro from '../../../componentes/CampoInteiro'
import Botao from '../../../componentes/Botao'

import estilos from './estilos'

export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}) {

    const [quantidade, setQuantidade] = useState(quantidadeInicial)
    const [total, setTotal] = useState(preco * quantidadeInicial)

    const atualizaQuantidadeTotal = (novaQuantidade) => {

        setQuantidade(novaQuantidade)
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    return (
        <>
        <View style={estilos.informacao} >
             <Text style={estilos.nome}>{nome}</Text>
             <Text style={estilos.descricao}>{descricao}</Text>
             <Text style={estilos.preco}>{
                Intl.NumberFormat('pt-br', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
             }</Text>
        </View>
       
        <View style={estilos.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <CampoInteiro valor={quantidade} acao={atualizaQuantidadeTotal} estilos={estilos.quantidade}/>
                </View>

                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Total:</Text>
                    <Text style={estilos.preco}>{ Intl.NumberFormat('pt-br', {
                    style: 'currency', currency: 'BRL'
                }).format(total)}</Text>
                </View>
            </View>

            <Botao valor='Remover do Carrinho' acao={() => alert('test')}/>
        </View>

        <View style={estilos.divisor}/>

    </>
    )
}