'use client';

import { Adsense } from '@ctrl/react-adsense';

export default function ShowAd() {
    return (
        <Adsense
            //   client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
            client='ca-pub-1245796678858418'
            slot="9839242241"
            style={{ display: 'block', marginTop: '20px', marginBottom: '20px' }}
            layout="in-article"
            format="fluid"
        />
    );
} 