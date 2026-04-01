"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Download } from "lucide-react";

export function PwaInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            
            // Only show prompt if they haven't dismissed it recently
            if (!localStorage.getItem('pwa_prompt_dismissed')) {
                setIsVisible(true);
            }
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            setIsVisible(false);
        }
        setDeferredPrompt(null);
    };

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('pwa_prompt_dismissed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] z-50 glass shadow-2xl rounded-2xl p-4 border-indigo-500/20 animate-in slide-in-from-bottom-5 fade-in">
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shrink-0">
                    <Download className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-sm">Install InstaSaver</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Get native Share menu integration to download Reels instantly from the app.</p>
                    <div className="flex gap-2 mt-3">
                        <Button 
                            size="sm" 
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-8 px-4 rounded-lg"
                            onClick={handleInstall}
                        >
                            Install Now
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-zinc-500 h-8 px-3"
                            onClick={handleDismiss}
                        >
                            Maybe Later
                        </Button>
                    </div>
                </div>
                <button onClick={handleDismiss} className="text-zinc-400 hover:text-white absolute top-4 right-4">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
