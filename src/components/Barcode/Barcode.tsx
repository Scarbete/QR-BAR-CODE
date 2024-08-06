'use client'

import { useEffect, useRef, FC } from 'react'
import JsBarcode from 'jsbarcode'


type Props = {
    value: string
}


const BarcodeComponent: FC<Props> = ({ value }) => {
    const barcodeRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        if (barcodeRef.current) {
            JsBarcode(barcodeRef.current, value, {
                format: 'CODE128',
                displayValue: true,
            })
        }
    }, [value])

    return <svg ref={barcodeRef} />
}


export default BarcodeComponent