import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquareText, X, SendHorizontal, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { greeting, quickReplies, getReply } from '../../data/chatbot';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { LogoMark } from '../brand/Logo';

const STORAGE_KEY = 'mfa-chat-v1';
const initialMessages = [{ from: 'bot', ...greeting }];

const actionIcon = { whatsapp: WhatsAppIcon, tel: Phone, map: MapPin };

function BotMessage({ msg, onNavigate }) {
  return (
    <div className="max-w-[85%] space-y-2">
      <p className="whitespace-pre-line rounded-lg rounded-tl-sm bg-paper px-4 py-3 text-[15px] text-text">{msg.text}</p>
      {(msg.links?.length || msg.actions?.length) && (
        <div className="flex flex-wrap gap-2">
          {msg.links?.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onNavigate}
              className="inline-flex items-center gap-1 rounded-md border border-brand-dark px-3 py-1.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-soft"
            >
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          ))}
          {msg.actions?.map((a) => {
            const Icon = actionIcon[a.kind] ?? ArrowUpRight;
            const external = a.kind !== 'tel';
            return (
              <a
                key={a.href}
                href={a.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold transition-colors duration-300 ${
                  a.kind === 'whatsapp'
                    ? 'bg-whatsapp text-ink'
                    : 'bg-brand text-ink hover:shadow-glow'
                }`}
              >
                <Icon className="h-4 w-4" />
                {a.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const timer = useRef();

  // Restore this tab's conversation (optional convenience; works without storage too)
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
      if (Array.isArray(saved) && saved.length) setMessages(saved);
    } catch { /* storage unavailable */ }
    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch { /* storage unavailable */ }
  }, [messages]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const send = (raw) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    setTyping(true);
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', ...getReply(text) }]);
      setTyping(false);
    }, 450 + Math.min(text.length * 12, 600));
  };

  const reset = () => {
    clearTimeout(timer.current);
    setTyping(false);
    setMessages(initialMessages);
  };

  // On phones the panel covers the page, so close it when a link is followed
  const onNavigate = () => window.innerWidth < 640 && setOpen(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-label="Garage assistant chat"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-2 z-[60] flex flex-col overflow-hidden rounded border border-line-light bg-white shadow-card sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(720px,calc(100dvh-3rem))] sm:w-[420px]"
          >
            <div className="flex items-center gap-3 border-b border-line bg-ink px-4 py-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-graphite"><LogoMark className="h-5 w-auto" /></span>
              <div className="flex-1 leading-tight">
                <p className="font-display text-lg font-bold uppercase tracking-wide">Garage assistant</p>
                <p className="text-xs text-mute">Instant answers, any time</p>
              </div>
              <button type="button" onClick={reset} className="rounded-md px-2 py-1 text-xs text-mute transition-colors hover:bg-steel hover:text-white">
                Restart
              </button>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-sm p-1.5 transition-colors hover:bg-steel">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div ref={listRef} role="log" aria-live="polite" className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5">
              {messages.map((m, i) =>
                m.from === 'bot' ? (
                  <BotMessage key={i} msg={m} onNavigate={onNavigate} />
                ) : (
                  <p key={i} className="ml-auto max-w-[85%] whitespace-pre-line rounded-lg rounded-tr-sm bg-ink px-4 py-3 text-[15px] text-white">
                    {m.text}
                  </p>
                )
              )}
              {typing && (
                <div className="flex w-16 items-center justify-center gap-1 rounded-lg rounded-tl-sm bg-paper py-4" aria-label="Assistant is typing">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-text-mute"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-line-light px-4 py-3">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  disabled={typing}
                  className="rounded-full border border-line-light px-3 py-1 text-[13px] text-text transition-colors hover:border-brand-dark hover:text-brand-ink disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-line-light px-3 py-3"
            >
              <label htmlFor="chat-input" className="sr-only">Type your question</label>
              <input
                id="chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={300}
                autoComplete="off"
                placeholder="Ask about hours, MOTs, booking..."
                className="input flex-1 py-2.5 text-[15px]"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand text-ink transition hover:shadow-glow disabled:opacity-40"
              >
                <SendHorizontal className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
            <p className="bg-paper px-4 py-2 text-center text-xs text-text-mute">Automated replies. If anyone is in danger on the road, call 999.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? 'Close garage assistant' : 'Open garage assistant'}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-[5.25rem] right-4 z-50 md:bottom-7 md:right-7"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink min-[360px]:h-14 min-[360px]:w-14 text-brand shadow-card transition hover:-translate-y-1 hover:shadow-glow">
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageSquareText className="h-6 w-6" aria-hidden="true" />}
        </span>
      </motion.button>
    </>
  );
}
