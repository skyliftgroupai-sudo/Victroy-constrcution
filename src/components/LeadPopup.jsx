import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const FORM_ID = 'pC9SMY3Ska2BmSV6Zgao'
const FORM_URL = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`
const EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js'
const REOPEN_DELAY = 30_000

const STORAGE_KEY = 'vcs-lead-popup'

function readStage() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeStage(stage) {
  try {
    localStorage.setItem(STORAGE_KEY, stage)
  } catch {
  }
}

export default function LeadPopup() {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const stage = readStage()
    if (!stage) setOpen(true)
    else if (stage === 'closed-once') timer.current = setTimeout(() => setOpen(true), REOPEN_DELAY)
    return () => clearTimeout(timer.current)
  }, [])

  useEffect(() => {
    if (!open || document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return
    const script = document.createElement('script')
    script.src = EMBED_SCRIPT
    script.async = true
    document.body.appendChild(script)
  }, [open])

  useEffect(() => {
    function onMessage(event) {
      if (!/leadconnectorhq\.com|msgsndr\.com/.test(event.origin)) return
      if (JSON.stringify(event.data ?? '').toLowerCase().includes('submit')) writeStage('done')
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  function close() {
    setOpen(false)
    const stage = readStage()
    if (stage === 'done') return
    if (!stage) {
      writeStage('closed-once')
      timer.current = setTimeout(() => setOpen(true), REOPEN_DELAY)
    } else {
      writeStage('done')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Victory Construction LLC"
            className="relative h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-soft"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-brand-700 text-cream shadow-card transition hover:bg-brand-800"
            >
              <FiX className="h-5 w-5" />
            </button>
            <div className="h-full overflow-y-auto overflow-x-hidden">
              <iframe
                src={FORM_URL}
                id={`inline-${FORM_ID}`}
                title="Victory Construction LLC"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Victory Construction LLC"
                data-height="1829"
                data-layout-iframe-id={`inline-${FORM_ID}`}
                data-form-id={FORM_ID}
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                style={{ border: 'none', borderRadius: '4px' }}
                className="-mt-5 block h-[1829px] w-[calc(100%+20px)] max-w-none"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
