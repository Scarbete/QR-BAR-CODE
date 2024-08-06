'use client';

import React from 'react';
import QRCode from 'qrcode.react'

interface QRCodeComponentProps {
    value: string;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ value }) => {
    return <QRCode value={value} />;
};

export default QRCodeComponent;
