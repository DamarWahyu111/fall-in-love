'use client';

import { useState } from 'react';
import { FloatingHearts } from '@/components/floating-hearts';
import { GreetingCard } from '@/components/greeting-card';
import { PhotoGallery3D } from '@/components/photo-gallery-3d';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart } from 'lucide-react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('greeting');

  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-pink-50/50 to-background dark:via-primary/10 -z-10" />

      {/* Love Text Pattern Background - Entire Page */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="lovePattern" x="80" y="80" width="160" height="160" patternUnits="userSpaceOnUse">
              <text x="0" y="20" fontSize="12" fill="url(#gradientText)" opacity="0.08" fontFamily="Arial">love</text>
            </pattern>
            <linearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(255, 20, 147)" />
              <stop offset="100%" stopColor="rgb(220, 20, 60)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#lovePattern)" />
        </svg>
      </div>

      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-10 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-4 slide-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary heartbeat" />
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Valentine's
            </h1>
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-secondary heartbeat" style={{ animationDelay: '0.3s' }} />
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Kartu cinta & momen spesial
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-12 sm:mb-16 slide-up" style={{ animationDelay: '0.1s' }}>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 gap-0 p-1 bg-muted rounded-lg h-auto">
              <TabsTrigger 
                value="greeting" 
                className="flex gap-2 items-center justify-center py-3 px-4 sm:px-6 text-base sm:text-lg rounded-md"
              >
                <Heart className="w-5 h-5" />
                <span>Buat Kartu</span>
              </TabsTrigger>
              <TabsTrigger 
                value="gallery" 
                className="flex gap-2 items-center justify-center py-3 px-4 sm:px-6 text-base sm:text-lg rounded-md"
              >
                <span className="text-xl">📸</span>
                <span>Galeri Foto</span>
              </TabsTrigger>
            </TabsList>

            {/* Greeting Card Tab */}
            <TabsContent
              value="greeting"
              className="space-y-6 animate-in fade-in-50 duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Card Display */}
                <div className="order-2 lg:order-1">
                  <GreetingCard />
                </div>

                {/* Instructions */}
                <div className="order-1 lg:order-2 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Buat & Kirim
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold">1</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Klik Kartu</h3>
                        <p className="text-sm text-muted-foreground">Buka form untuk membuat kartu baru</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <span className="text-secondary font-bold">2</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Isi Nama & Pesan</h3>
                        <p className="text-sm text-muted-foreground">Masukkan nama penerima dan pesan Valentine</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold">3</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Kirim</h3>
                        <p className="text-sm text-muted-foreground">Tekan tombol Kirim untuk mengirim pesan</p>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </TabsContent>

            {/* Photo Gallery Tab */}
            <TabsContent
              value="gallery"
              className="space-y-6 animate-in fade-in-50 duration-300"
            >
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Galeri Momen Spesial
                </h2>
                <PhotoGallery3D />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2 py-8 slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-muted-foreground">
            Created with <span className="text-primary font-bold">love</span> for Valentine's Day
          </p>
        </div>
      </div>
    </main>
  );
}
