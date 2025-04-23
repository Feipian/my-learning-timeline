import React, { useEffect } from 'react';

interface ScriptProps {
    src: string;
    strategy?: 'afterInteractive' | 'lazyOnload';
    onLoad?: () => void;
}

const Script: React.FC<ScriptProps> = ({ src, strategy = 'afterInteractive', onLoad }) => {
    useEffect(() => {
        if (strategy === 'afterInteractive') {
            loadScript();
        } else if (strategy === 'lazyOnload') {
            window.addEventListener('load', loadScript);
            return () => window.removeEventListener('load', loadScript);
        }
    }, [src, strategy]);

    const loadScript = () => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        if (onLoad) {
            script.onload = onLoad;
        }
        document.head.appendChild(script);
    };

    return null;
};

export default Script; 