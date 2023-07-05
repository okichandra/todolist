import React, { useLayoutEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';

const LineGraph = ({ data, weekly }) => {

    let [isDay, SetDay] = useState(true)
    let Harga = []
    let weeklyEx = []
    let weeklyDays = []
    let Jam = []
    let PembagianHarga = []
    let PembagianJam = []
    data.forEach(element => {
        Harga.push(element.harga)
        Jam.push(element.Jam)
    });
    weekly.forEach(el => {
        weeklyEx.push(el.expense)
        weeklyDays.push(el.day)
    })

    let pembagian = 4
    let maxHarga = isDay ? Math.max(...Harga) : Math.max(...weeklyEx)
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
    let getPixels = []
    let percen = []
    let pixels = []
    const makeGraph = () => {
        data.forEach(element => {
            let getHargaPersentase = element.harga * 100 / Math.max(...Harga)
            let getJamPersentase = element.Jam * 100 / Math.max(...Jam)
            percentage.push({
                persentaseHarga: getHargaPersentase,
                persentaseJam: getJamPersentase
            })
        })
        let bagian = width / 7
        weekly.forEach((ell, i) => {
            let getHargaPersentase = ell.expense * 100 / Math.max(...weeklyEx)
            let getDayPersentase = (bagian * (i + 1 / 2) * 100 / width)
            percen.push({
                percenHarga: getHargaPersentase,
                percentageDay: getDayPersentase,
            })
        })

        percen.forEach(ell => {
            pixels.push({
                pixelHarga: height - (height * ell.percenHarga / 100),
                pixelDay: width * ell.percentageDay / 100,
            })
        })

        percentage.forEach(element => {
            getPixels.push({
                pixelHarga: height - (height * element.persentaseHarga / 100),
                pixelJam: width * element.persentaseJam / 100,
            })
        })

        let findM = `M ${isDay ? getPixels[0].pixelJam : pixels[0].pixelDay} ${isDay ? getPixels[0].pixelHarga : pixels[0].pixelHarga}`
        let makeL = () => {
            let LineData = isDay ? [...getPixels] : [...pixels]

            LineData.shift()
            let l = []
            LineData.forEach(element => {
                l.push(`L ${isDay ? element.pixelJam : element.pixelDay} ${element.pixelHarga}`)
            })
            return l
        }
        return `${findM} ${makeL()}`
    }
    const vertical = (ell) => {
        let makeM = `M ${isDay ? ell.pixelJam : ell.pixelDay} ${height}`
        let makeL = `L ${isDay ? ell.pixelJam : ell.pixelDay} ${ell.pixelHarga}`
        return `${makeM} ${makeL}`
    }

    return (
        <div className='pl-2 pt-1 pb-11 pr-8 rounded-lg bg-gradient-to-r from-green-500 from-1% to-emerald-700 mt-4'>
            <Dropdown tipe={isDay} setDay={SetDay} />
            <div className="top-path justify-between flex">
                <div className='flex flex-col justify-between'>
                    {
                        PembagianHarga.map(harga => (<span key={harga} className='block text-xs text-right text-text-color-900'>{Math.floor(harga)}</span>))
                    }
                </div>
                <div ref={ref} id='graphPoint' className="svg-container ml-1 relative w-full">
                    <div className="control absolute left-0 z-0 top-0 bottom-0 right-0 flex flex-col justify-between">
                        {
                            PembagianHarga.map(garis => (<hr key={garis} className='w-full border-slate-400 relative z-0'></hr>))
                        }
                    </div>
                    <svg id='mySvg' className='z-10' width='100%'>
                        <path className='drop-shadow-2xl z-10' fill="url(#chardBackground)" stroke='rgb(219, 212, 0)'
                            d={makeGraph()} strokeWidth='2' />
                        {
                            isDay ? getPixels.map((ell, i) => (<path key={i} d={vertical(ell)} className='relative z-10' strokeWidth='2' stroke='rgba(129,201,149,0.81)' />)) : pixels.map((ell, i) => (<path key={i} d={vertical(ell)} className='relative z-10' strokeWidth='2' stroke='rgba(129,201,149,0.81)' />))
                        }
                        {
                            isDay ? getPixels.map((ell, i) => (
                                    <circle r='3' key={i} fill='rgb(219, 212, 0)' className='relative drop-shadow z-50' strokeWidth='0' stroke='rgba(129,201,149,0.81)' cx={ell.pixelJam} cy={ell.pixelHarga} />
                            ))
                                :
                                pixels.map((ell, i) => (<circle r='3' key={i} fill='rgb(219, 212, 0)' className='relative drop-shadow z-50' strokeWidth='0' stroke='rgba(129,201,149,0.81)' cx={ell.pixelDay} cy={ell.pixelHarga} />))
                        }
                    </svg>
                </div>
            </div>
            <div className="jam flex pl-10 justify-between pt-1">
                {
                    isDay ? PembagianJam.reverse().map((ell, i) => (<span key={`${i}`} className='block text-center text-xs text-text-color-900'>{ell.jam}.{ell.menit}</span>)) : weeklyDays.map((ell, i) => (<span key={`${i}`} className='block text-center text-xs text-text-color-900 w-full text-center'>{ell}</span>))
                }
            </div>
        </div>
    );
};

export default LineGraph;
