import React, { useLayoutEffect, useRef, useState } from 'react';

const LineGraph = ({ data }) => {

    let Harga = []
    let Jam = []
    let PembagianHarga = []
    let PembagianJam = []
    data.forEach(element => {
        Harga.push(element.harga)
        Jam.push(element.Jam)
    });

    let pembagian = 4
    let maxHarga = Math.max(...Harga)
    let maxJam = {
        jam: Math.max(...Jam),
        menit: 0
    }

    let menit = maxJam.jam * 60

    let penguranganHarga = maxHarga / pembagian
    let penguranganJam = menit / pembagian

    PembagianHarga.push(maxHarga)
    PembagianJam.push(maxJam)
    for (let i = 0; i < pembagian; i++) {
        PembagianHarga.push(
            maxHarga -= penguranganHarga
        )
        let hasilPengurangan = menit -= penguranganJam
        PembagianJam.push({
            jam: Math.floor(hasilPengurangan / 60),
            menit: hasilPengurangan % 60
        })
    }

    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
    }, []);

    let percentage = []
    let getPixels = [];
    const makeGraph = () => {
        data.forEach(element => {
            let getHargaPersentase = element.harga * 100 / Math.max(...Harga)
            let getJamPersentase = element.Jam * 100 / Math.max(...Jam)
            percentage.push({
                persentaseHarga: getHargaPersentase,
                persentaseJam: getJamPersentase
            })
        })

        percentage.forEach(element => {
            getPixels.push({
                pixelHarga: height - (height * element.persentaseHarga / 100),
                pixelJam: width * element.persentaseJam / 100,
            })
        })

        let findM = `M ${getPixels[0].pixelJam} ${getPixels[0].pixelHarga}`
        let makeL = () => {
            let LineData = [...getPixels]

            LineData.shift()
            let l = []
            LineData.forEach(element => {
                l.push(`L ${element.pixelJam} ${element.pixelHarga}`)
            })
            return l
        }
        return `${findM} ${makeL()}`
    }
    const vertical = (ell) => {
        let makeM = `M ${ell.pixelJam} ${height}`
        let makeL = `L ${ell.pixelJam} ${ell.pixelHarga}`
        return `${makeM} ${makeL}`
    }


    // bg-gradient-to-r from-green-500 from-1% to-emerald-700

    return (
        <div className='pl-2 pt-11 pb-11 pr-8 rounded-lg bg-gradient-to-r from-green-500 from-1% to-emerald-700 mt-4'>
            <div className="top-path justify-between flex">
                <div className='flex flex-col justify-between'>
                    {
                        PembagianHarga.map(ell => (<span className='block text-xs text-right text-text-color-900'>{ell}</span>))
                    }
                </div>
                <div ref={ref} id='graphPoint' className="svg-container ml-1 relative w-full">
                    <div className="control absolute left-0 top-0 bottom-0 right-0 flex flex-col justify-between">
                        {
                            PembagianHarga.map(ell => (<hr className='w-full bg-white'></hr>))
                        }
                    </div>
                    <svg id='mySvg' className='z-10' height='200px' width='100%'>
                        <path className='drop-shadow-2xl' fill="url(#chardBackground)" stroke='rgb(219, 212, 0)'
                            d={makeGraph()} strokeWidth='2' />
                        {
                            getPixels.map(ell => (<path d={vertical(ell)} strokeWidth='2' stroke='rgba(129,201,149,0.81)'/>))
                        }
                    </svg>
                </div>
            </div>
            <div className="jam flex pl-10 justify-between pt-1">
                {
                    PembagianJam.reverse().map(ell => (<span className='block text-center text-xs text-text-color-900'>{ell.jam}.{ell.menit}</span>))
                }
            </div>
        </div>
    );
};

export default LineGraph;
