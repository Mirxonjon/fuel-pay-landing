import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';

export const ConnectStationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+998'
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!value.startsWith('+998')) {
      value = '+998';
    }
    // Only allow numbers after +998
    const numbersOnly = value.slice(4).replace(/\D/g, '');
    if (numbersOnly.length <= 9) {
      setFormData({ ...formData, phone: '+998' + numbersOnly });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatIds = import.meta.env.VITE_TELEGRAM_CHAT_ID.split(',').map(id => id.trim());

    const message = `
🚀 *Yangi AZS so'rovi!*
👤 *Ism:* ${formData.firstName}
👥 *Familiya:* ${formData.lastName}
📞 *Tel:* ${formData.phone}
    `;

    try {
      const requests = chatIds.map(chatId => 
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        })
      );

      const responses = await Promise.all(requests);
      
      // Log responses for debugging
      for (const res of responses) {
        if (!res.ok) {
          const errorData = await res.json();
          console.error('Telegram API Error:', errorData);
        }
      }

      const allOk = responses.every(r => r.ok);

      if (allOk) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ firstName: '', lastName: '', phone: '+998' });
        }, 3000);
      } else {
        setStatus('error');
        console.error('One or more Telegram messages failed to send.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Подключить АЗС</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              {status === 'success' ? (
                <div className="py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">So'rov yuborildi!</h4>
                  <p className="text-slate-600">Tez orada siz bilan bog'lanamiz.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Имя</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        required
                        type="text"
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Введите имя"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Фамилия</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        required
                        type="text"
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Введите фамилию"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Номер телефона</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        required
                        type="tel"
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+998 90 123 45 67"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-500 text-center">Xatolik yuz berdi. Qayta urinib ko'ring.</p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-3 mt-4"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      'Отправить запрос'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
