import React from 'react'
import LineGraph from './LineGraph'
import FormatNumber from '../../FastConverter/FormatNumber'

function HomeFinance({ homeData }) {

    let data = [
        {
            harga: 12000,
            Jam: 15,
        },
        {
            harga: 18000,
            Jam: 12,
        },
        {
            harga: 5000,
            Jam: 10,
        },
        {
            harga: 82000,
            Jam: 1,
        },
        {
            harga: 62200,
            Jam: 3,
        },
        {
            harga: 92000,
            Jam: 18,
        },
        {
            harga: 69000,
            Jam: 9,
        },
        {
            harga: 41000,
            Jam: 5,
        },
        {
            harga: 35000,
            Jam: 11,
        },
        {
            harga: 25000,
            Jam: 21,
        },
    ]
    let sorted = data.sort((a, b) => a.Jam - b.Jam)
    let dataHarga = []
    data.forEach(ell => dataHarga.push(ell.harga))
    let totalLoss = dataHarga.reduce((a, b) => { return a + b }, 0)
    console.log(totalLoss)

    return (
        <div className='pt-4'>
            <span className='capitalize text-text-color-900 text-sm'>my balance</span>
            <h1 className='drop-shadow-lg text-text-color-900 text-4xl font-bold'>Rp {FormatNumber(homeData.balance)}</h1>
            <LineGraph data={sorted} />
            <div className="loss bg-semi-transparent mt-4 rounded-lg p-2 capitalize text-xs tracking-wider text-text-color-900 font-thin">
                <span className='block'>total loss</span>
                <h1 className='text-xl font-bold'>Rp {FormatNumber(totalLoss)}</h1>
            </div>
        </div>
    )
}

export default HomeFinance
