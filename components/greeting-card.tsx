'use client';

import { useState } from 'react';
import { Heart, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export function GreetingCard() {
  const [step, setStep] = useState<'closed' | 'form' | 'preview'>('closed');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');
  const whatsappNumber = '6282327686909'; 

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error('Silakan isi semua field');
      return;
    }
    setRecipientName(name);
    setSubmittedMessage(message);
    setStep('preview');
    toast.success('Kartu dibuat!');
  };

  const handleSendMessage = () => {
    // Format pesan dengan nama dan isi dari input
    const fullMessage = `Halo ${recipientName}!\n\nIni pesan dari orang tersayang\n\n${submittedMessage}\n\nDengan cinta ❤️`;
    const encodedMessage = encodeURIComponent(fullMessage);

    // Buka WhatsApp ke nomor yang sudah ditentukan
    const whatsappUrl = `https://wa.me/${whatsappNumber}/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    toast.success(`Membuka WhatsApp!`);
    setStep('closed');
    setName('');
    setMessage('');
    setRecipientName('');
    setSubmittedMessage('');
  };

  const handleCreateNew = () => {
    setStep('form');
    setName('');
    setMessage('');
  };

  return (
    <div className="w-full">
      {/* Step 1: Closed Card */}
      {step === 'closed' && (
        <div
          onClick={() => setStep('form')}
          className="w-full h-80 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all group"
        >
          <Heart className="w-16 h-16 text-primary-foreground mb-4 heartbeat" />
          <h3 className="text-3xl font-bold text-primary-foreground text-center mb-2">
            Happy Valentine's Day
          </h3>
          <p className="text-primary-foreground/80 text-center text-sm">
            Klik untuk membuat pesan
          </p>
          <div className="mt-6 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-foreground/50 sparkle"></div>
            <div className="w-2 h-2 rounded-full bg-primary-foreground/50 sparkle" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 rounded-full bg-primary-foreground/50 sparkle" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      )}

      {/* Step 2: Form */}
      {step === 'form' && (
        <div className="w-full bg-card rounded-2xl shadow-xl p-8 border border-border space-y-6">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Buat Kartu Cinta
            </h3>
            <p className="text-sm text-muted-foreground">Tulis pesan Valentine mu untuk orang terkasih</p>
          </div>

          <form onSubmit={handleSubmitForm} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Nama Penerima
              </label>
              <Input
                type="text"
                placeholder="Siapa nama mereka?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-border focus:border-primary h-10"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Pesanmu
              </label>
              <Textarea
                placeholder="Tulis pesan terpenting untuknya..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="border-border focus:border-primary resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep('closed')}
                className="flex-1"
              >
                Batal
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold"
              >
                Lihat Preview
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Step 3: Preview Card */}
      {step === 'preview' && (
        <div className="space-y-4">
          <div className="w-full bg-gradient-to-br from-pink-50 to-red-50 dark:from-primary/10 dark:to-secondary/10 rounded-2xl shadow-xl p-10 border border-primary/20 min-h-80 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                Untuk {recipientName}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <p className="text-sm text-muted-foreground mt-3 italic">Ini pesan dari orang tersayang</p>
            </div>

            <p className="text-lg leading-relaxed text-foreground whitespace-pre-wrap my-6">
              {submittedMessage}
            </p>

            <div className="flex justify-between items-end pt-6 border-t border-primary/10">
              <div className="flex gap-2">
                <Heart className="w-6 h-6 text-primary" />
                <Heart className="w-6 h-6 text-secondary" />
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground italic">Dengan cinta</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => setStep('form')}
              variant="outline"
              className="flex-1"
            >
              Edit
            </Button>
            <Button
              onClick={handleCreateNew}
              variant="outline"
              className="flex-1"
            >
              Buat Baru
            </Button>
            <Button
              onClick={handleSendMessage}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold"
            >
              <Send className="w-4 h-4 mr-2" />
              Kirim
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
