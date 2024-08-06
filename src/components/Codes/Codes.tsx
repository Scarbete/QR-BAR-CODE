'use client'

import { FC } from 'react'
import BarcodeComponent from '../Barcode/Barcode'
import QRCodeComponent from '../QRCode/QRCode'

const MyPage: FC = () => {
    const barcodeValue = '123456789012'
    const qrCodeValue = 'https://youtu.be/K8GZ8SoNfmE?si=67FqploAs2rXAinf'

    return (
        <div>
            <h1>Barcode</h1>
            <BarcodeComponent value={barcodeValue} />

            <h1>QR Code</h1>
            <QRCodeComponent value={qrCodeValue} />
        </div>
    )
}


export default MyPage