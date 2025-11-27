import React, { useState } from 'react';
import { X, Lock, CreditCard, Check } from 'lucide-react';

interface StripePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onSuccess: () => void;
  playerName: string;
  teamNumber: 1 | 2;
}

export const StripePaymentModal: React.FC<StripePaymentModalProps> = ({
  isOpen,
  onClose,
  amount,
  onSuccess,
  playerName,
  teamNumber,
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + ' / ' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, '').length <= 16) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiry(e.target.value);
    setExpiry(formatted);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/gi, '');
    if (value.length <= 3) {
      setCvc(value);
    }
  };

  const isFormValid = () => {
    return (
      cardNumber.replace(/\s/g, '').length === 16 &&
      expiry.replace(/\s/g, '').length === 5 &&
      cvc.length === 3 &&
      email.includes('@')
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      // Wait a bit then trigger success callback
      setTimeout(() => {
        onSuccess();
        handleClose();
      }, 1500);
    }, 2000);
  };

  const handleClose = () => {
    if (isProcessing) return;
    setCardNumber('');
    setExpiry('');
    setCvc('');
    setEmail('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="relative px-6 py-5 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#635BFF] rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-xs text-gray-500">Powered by Stripe</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              disabled={isProcessing}
              className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Amount Badge */}
          <div className="mt-4 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">£{amount.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">Booking for</p>
              <p className="text-sm font-semibold text-gray-900">{playerName}</p>
              <p className="text-xs text-gray-500">Team {teamNumber}</p>
            </div>
          </div>
        </div>

        {/* Success State */}
        {isSuccess && (
          <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
            <p className="text-gray-600">Booking confirmed for {playerName}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={isProcessing}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#635BFF] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 disabled:bg-gray-50"
              />
            </div>

            {/* Card Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card information
              </label>
              <div className="space-y-0 border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#635BFF] focus-within:border-transparent transition-all">
                {/* Card Number */}
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 1234 1234 1234"
                    disabled={isProcessing}
                    className="w-full px-4 py-3 outline-none text-gray-900 placeholder-gray-400 disabled:bg-gray-50"
                  />
                  <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <div className="grid grid-cols-2">
                  {/* Expiry */}
                  <input
                    type="text"
                    value={expiry}
                    onChange={handleExpiryChange}
                    placeholder="MM / YY"
                    disabled={isProcessing}
                    className="px-4 py-3 border-t border-r border-gray-300 outline-none text-gray-900 placeholder-gray-400 disabled:bg-gray-50"
                  />
                  {/* CVC */}
                  <input
                    type="text"
                    value={cvc}
                    onChange={handleCvcChange}
                    placeholder="CVC"
                    disabled={isProcessing}
                    className="px-4 py-3 border-t border-gray-300 outline-none text-gray-900 placeholder-gray-400 disabled:bg-gray-50"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">Use test card: 4242 4242 4242 4242, any future date, any 3 digits</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid() || isProcessing}
            className={`w-full mt-6 py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
              !isFormValid() || isProcessing
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-[#635BFF] hover:bg-[#5347E8] shadow-lg hover:shadow-xl'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </div>
            ) : (
              `Pay £${amount.toFixed(2)}`
            )}
          </button>

          {/* Security Notice */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <Lock className="w-3 h-3" />
            <span>Payments are secure and encrypted</span>
          </div>
        </form>
      </div>
    </div>
  );
};
