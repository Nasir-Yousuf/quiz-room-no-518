import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { Modal } from './Modal.js';
import { Copy, Check, QrCode, Share2, ExternalLink } from 'lucide-react';
import { useNotification } from '../context/NotificationContext.js';

interface ShareQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  quizTitle: string;
  shareCode: string;
}

export const ShareQuizModal: React.FC<ShareQuizModalProps> = ({
  isOpen,
  onClose,
  quizTitle,
  shareCode,
}) => {
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const { showToast } = useNotification();

  const shareUrl = `${window.location.origin}/quiz/${shareCode}`;

  useEffect(() => {
    if (isOpen && shareCode) {
      QRCode.toDataURL(shareUrl, {
        width: 200,
        margin: 1.5,
        color: {
          dark: '#1e1b4b',
          light: '#ffffff',
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('QR code generation error:', err));
    }
  }, [isOpen, shareCode, shareUrl]);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    showToast('Copied to Clipboard!', 'Quiz link copied successfully.', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: quizTitle,
          text: `Take this quiz on QuizRoom: ${quizTitle}`,
          url: shareUrl,
        });
      } catch (err) {
        // user dismissed
      }
    } else {
      handleCopy();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Quiz" maxWidth="md">
      <div className="space-y-5 text-center">
        <div>
          <h4 className="font-semibold text-slate-800 text-base">{quizTitle}</h4>
          <p className="text-xs text-slate-500 mt-1">
            Share this link or QR code with your students to take the quiz directly.
          </p>
        </div>

        {/* QR Code */}
        {qrDataUrl && (
          <div className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl w-fit mx-auto shadow-inner">
            <img src={qrDataUrl} alt="Quiz QR Code" className="w-44 h-44 rounded-lg" />
            <span className="text-[11px] font-mono font-medium text-slate-500 mt-2 flex items-center gap-1">
              <QrCode className="w-3.5 h-3.5" /> Scan to open quiz
            </span>
          </div>
        )}

        {/* Link input with copy button */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={shareUrl}
            className="flex-1 text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-700 select-all focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition shadow-sm shrink-0"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 justify-center pt-2">
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium transition"
            >
              <Share2 className="w-3.5 h-3.5" /> Share via App
            </button>
          )}
          <a
            href={shareUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium transition"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Preview Link
          </a>
        </div>
      </div>
    </Modal>
  );
};
