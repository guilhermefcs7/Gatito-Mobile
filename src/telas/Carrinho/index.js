import React from 'react'

import { FlatList } from 'react-native'
import Item from './item'
import StatusCarrinho from '../../componentes/StatusCarrinho'

const servicos = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.9,
        descricao: 'NÃO DE BANHO NO SEU GATO! MAS se precisar nos damos',
        quantidade: 1,
    },
    {
        id:2,
        nome:'Vacina V4',
        preco: 89.9,
        descricao: 'Uma dose da vacina v4. Seu gato precisa de 2',
        quantidade: 2,
    },
    {
        id:3,
        nome: 'Vacina antirrábica',
        preco: 99.9,
        descricao: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano',
        quantidade: 1,
    }
]

export default function Carrinho() {

    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0) //acrescentar na soma, o preco * quantidade | valor inicial 0 | desconstroi direto na função
    return(
        <>
            <StatusCarrinho total = {total}/>
            <FlatList data={servicos} renderItem={({item}) => <Item {...item}/>} keyExtractor={({id}) => String(id)} removeClippedSubviews={false} />
        </>
    ) 
}