import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowUp, BookOpen, Check, ChevronRight, CircleCheck,
  ExternalLink, Flame, Gauge, Globe2, Heart, Link2, Plus, Server, Settings2,
  Sparkles, Target, Trash2, Trophy, Wifi, X, Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Quote { content: string; author: string }
interface Service { name: string; url: string; state: 'online' | 'offline'; icon: LucideIcon }
interface QuickLink { id: string; label: string; url: string; icon: LucideIcon }
interface DashboardConfig { theme: 'soft'; mode: 'light'; quote: 'default' | 'random' | 'fav'; orderServices: string[]; raspberryPiStatsShowcase: 'graph' | 'pbar' }

const dashboardConfig: DashboardConfig = {
  theme: 'soft', mode: 'light', quote: 'random', orderServices: ['Hipoglifo.es', 'El Negredo', 'Portfolio'], raspberryPiStatsShowcase: 'pbar',
}
const fallbackQuote: Quote = { content: 'La sencillez es la máxima sofisticación.', author: 'Leonardo da Vinci' }
const services: Service[] = [
  { name: 'Hipoglifo.es', url: 'https://hipoglifo.es', state: 'online', icon: Globe2 },
  { name: 'El Negredo', url: 'https://elnegredo.vercel.app', state: 'online', icon: Sparkles },
  { name: 'Portfolio', url: 'https://alxns.github.io', state: 'online', icon: Link2 },
]
const defaultLinks: QuickLink[] = [
  { id: 'cubari', label: 'One Piece Cubari', url: 'https://cubari.moe', icon: BookOpen },
  { id: 'merinero', label: 'Autoescuela Merinero', url: 'https://autoescuelamerinero.com', icon: Globe2 },
  { id: 'manhwas', label: 'Manhwas', url: 'https://example.com', icon: Heart },
]

function App() {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => { const timer = window.setTimeout(() => setIsReady(true), 700); return () => window.clearTimeout(timer) }, [])
  return isReady ? <Dashboard /> : <SplashScreen />
}

function SplashScreen() {
  return <main className="splash-screen" aria-label="Cargando alXns Central Hub"><div className="splash-content"><div className="brand-mark brand-mark-large">AX</div><h1>alXns</h1><div className="loading-track"><div className="loading-fill" /></div></div></main>
}

function Dashboard() {
  const [activeView, setActiveView] = useState<'home' | 'goals' | 'links'>('home')
  const [quote, setQuote] = useState<Quote>(fallbackQuote)
  const [links, setLinks] = useState(defaultLinks)
  const [isAddLinkOpen, setIsAddLinkOpen] = useState(false)
  const [newLink, setNewLink] = useState({ label: '', url: '' })

  useEffect(() => {
    if (dashboardConfig.quote === 'default') return
    const controller = new AbortController()
    fetch('https://api.quotable.io/random?tags=wisdom|inspirational', { signal: controller.signal })
      .then((response) => response.ok ? response.json() as Promise<{ content: string; author: string }> : Promise.reject())
      .then((result) => setQuote({ content: result.content, author: result.author }))
      .catch(() => setQuote(fallbackQuote))
    return () => controller.abort()
  }, [])

  const addLink = () => {
    if (!newLink.label.trim() || !newLink.url.trim()) return
    const url = newLink.url.startsWith('http') ? newLink.url : `https://${newLink.url}`
    setLinks((current) => [...current, { id: crypto.randomUUID(), label: newLink.label.trim(), url, icon: Link2 }])
    setNewLink({ label: '', url: '' }); setIsAddLinkOpen(false)
  }
  const moveLink = (index: number, direction: -1 | 1) => setLinks((current) => { const next = [...current]; const target = index + direction; if (target < 0 || target >= next.length) return current; [next[index], next[target]] = [next[target], next[index]]; return next })

  return <main className="app-shell">
    <header className="site-header"><button className="brand-lockup" type="button" onClick={() => setActiveView('home')}><div className="brand-mark">AX</div><span>alXns</span></button><nav className="main-nav" aria-label="Navegación principal"><button className={activeView === 'home' ? 'active' : ''} type="button" onClick={() => setActiveView('home')}>Inicio</button><button className={activeView === 'goals' ? 'active' : ''} type="button" onClick={() => setActiveView('goals')}>Retos</button><button className={activeView === 'links' ? 'active' : ''} type="button" onClick={() => setActiveView('links')}>Enlaces</button></nav></header>
    {activeView === 'home' && <HomeView quote={quote} links={links} onOpenGoals={() => setActiveView('goals')} onOpenLinks={() => setActiveView('links')} />}
    {activeView === 'goals' && <GoalsView onBack={() => setActiveView('home')} />}
    {activeView === 'links' && <LinksView links={links} isAddLinkOpen={isAddLinkOpen} newLink={newLink} onBack={() => setActiveView('home')} onAdd={() => setIsAddLinkOpen(true)} onDelete={(id) => setLinks((current) => current.filter((link) => link.id !== id))} onMove={moveLink} onCloseAdd={() => setIsAddLinkOpen(false)} onNewLinkChange={setNewLink} onConfirmAdd={addLink} />}
    <footer className="site-footer"><span>alXns · tu espacio personal</span><span>hecho para ir a tu ritmo</span></footer>
  </main>
}

function HomeView({ quote, links, onOpenGoals, onOpenLinks }: { quote: Quote; links: QuickLink[]; onOpenGoals: () => void; onOpenLinks: () => void }) {
  return <><section className="welcome"><p className="date-label">27 de octubre de 2026</p><h1>Hola, Alonso.</h1><blockquote>“{quote.content}”<cite>— {quote.author}</cite></blockquote></section><section className="home-grid">
    <article className="card pi-card"><CardTitle icon={<Server size={18} />} title="Raspberry Pi 5" meta="Tu pequeño nodo" status="online" /><div className="pi-metrics"><Metric label="CPU" value="24" unit="%" progress={24} /><Metric label="Memoria" value="61" unit="%" progress={61} /><Metric label="Temperatura" value="47" unit="°C" progress={47} /></div><div className="card-foot"><span className="soft-status"><CircleCheck size={14} /> Todo bien</span><button type="button">Ver detalle <ChevronRight size={14} /></button></div></article>
    <article className="card goals-card"><CardTitle icon={<Trophy size={18} />} title="Tus retos" meta="Esta semana" /><div className="reward-row"><div className="reward-icon"><Flame size={21} /></div><div><strong>12 días seguidos</strong><span>La constancia suma</span></div><b>68%</b></div><div className="goal-bars"><ProgressBar label="Lectura" progress={60} color="green" /><ProgressBar label="Movimiento" progress={80} color="yellow" /></div><button className="card-action" type="button" onClick={onOpenGoals}>Ver mis retos <ChevronRight size={15} /></button></article>
    <article className="card services-card"><CardTitle icon={<Wifi size={18} />} title="Tus sitios" meta="Ahora mismo" /><div className="service-icons">{services.map((service) => <a className={`service-tile ${service.state}`} href={service.url} target="_blank" rel="noreferrer" key={service.name} aria-label={`${service.name}: ${service.state === 'online' ? 'online' : 'offline'}`}><span className="service-logo"><service.icon size={23} /></span><strong>{service.name}</strong><i /></a>)}</div></article>
    <article className="card links-card"><CardTitle icon={<Zap size={18} />} title="Accesos" meta="Tus enlaces" /><div className="link-buttons">{links.slice(0, 3).map((link) => <a className="link-button" href={link.url} target="_blank" rel="noreferrer" key={link.id}><link.icon size={17} /><span>{link.label}</span><ExternalLink size={13} /></a>)}</div><button className="card-action" type="button" onClick={onOpenLinks}>Editar accesos <ChevronRight size={15} /></button></article>
  </section></>
}

function GoalsView({ onBack }: { onBack: () => void }) { return <section className="subview"><button className="back-button" type="button" onClick={onBack}><ChevronRight size={16} /> Volver</button><div className="subview-heading"><div><p className="date-label">Tu progreso</p><h1>Retos y hábitos</h1></div><button className="primary-button" type="button"><Plus size={16} /> Nuevo reto</button></div><div className="goals-board"><GoalCard icon={<BookOpen />} title="Leer 30 páginas" detail="18 de 30 páginas" progress={60} color="green" /><GoalCard icon={<Gauge />} title="Mover el cuerpo" detail="4 de 5 sesiones" progress={80} color="yellow" /><GoalCard icon={<Target />} title="Aprender algo nuevo" detail="Aún por empezar" progress={8} color="blue" /></div></section> }
function GoalCard({ icon, title, detail, progress, color }: { icon: React.ReactNode; title: string; detail: string; progress: number; color: string }) { return <article className="goal-card"><div className={`goal-card-icon ${color}`}>{icon}</div><div className="goal-card-info"><h2>{title}</h2><p>{detail}</p><ProgressBar label={`${progress}%`} progress={progress} color={color} /></div><button className="quiet-button" type="button" aria-label={`Editar ${title}`}><Settings2 size={16} /></button></article> }

function LinksView({ links, isAddLinkOpen, newLink, onBack, onAdd, onDelete, onMove, onCloseAdd, onNewLinkChange, onConfirmAdd }: { links: QuickLink[]; isAddLinkOpen: boolean; newLink: { label: string; url: string }; onBack: () => void; onAdd: () => void; onDelete: (id: string) => void; onMove: (index: number, direction: -1 | 1) => void; onCloseAdd: () => void; onNewLinkChange: (value: { label: string; url: string }) => void; onConfirmAdd: () => void }) { return <section className="subview"><button className="back-button" type="button" onClick={onBack}><ChevronRight size={16} /> Volver</button><div className="subview-heading"><div><p className="date-label">Tu colección</p><h1>Enlaces</h1></div><button className="primary-button" type="button" onClick={onAdd}><Plus size={16} /> Añadir enlace</button></div><div className="editable-links">{links.map((link, index) => <div className="editable-link" key={link.id}><span className="drag-handle"><ArrowUp size={13} /><ArrowDown size={13} /></span><span className="editable-link-icon"><link.icon size={18} /></span><span className="editable-link-text"><strong>{link.label}</strong><small>{link.url}</small></span><button className="quiet-button" type="button" onClick={() => onMove(index, -1)} aria-label="Subir enlace"><ArrowUp size={16} /></button><button className="quiet-button" type="button" onClick={() => onMove(index, 1)} aria-label="Bajar enlace"><ArrowDown size={16} /></button><a className="quiet-button" href={link.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${link.label}`}><ExternalLink size={16} /></a><button className="delete-button" type="button" onClick={() => onDelete(link.id)} aria-label={`Borrar ${link.label}`}><Trash2 size={16} /></button></div>)}</div>{isAddLinkOpen && <div className="add-link-form"><div className="form-heading"><strong>Nuevo enlace</strong><button className="quiet-button" type="button" onClick={onCloseAdd} aria-label="Cerrar"><X size={17} /></button></div><label>Nombre<input value={newLink.label} onChange={(event) => onNewLinkChange({ ...newLink, label: event.target.value })} placeholder="Mi sitio" /></label><label>Dirección<input value={newLink.url} onChange={(event) => onNewLinkChange({ ...newLink, url: event.target.value })} placeholder="https://..." /></label><button className="primary-button" type="button" onClick={onConfirmAdd}><Check size={16} /> Guardar enlace</button></div>}</section> }

function CardTitle({ icon, title, meta, status }: { icon: React.ReactNode; title: string; meta: string; status?: 'online' | 'offline' }) { return <div className="card-title"><div className="title-icon">{icon}</div><div><h2>{title}</h2><span>{meta}</span></div>{status && <span className={`tiny-status ${status}`}><i /> {status === 'online' ? 'Activo' : 'No disponible'}</span>}</div> }
function Metric({ label, value, unit, progress }: { label: string; value: string; unit: string; progress: number }) { return <div className="metric"><div><span>{label}</span><strong>{value}<small>{unit}</small></strong></div><div className="metric-bar"><i style={{ width: `${progress}%` }} /></div></div> }
function ProgressBar({ label, progress, color }: { label: string; progress: number; color: string }) { return <div className="progress-item"><div><span>{label}</span><strong>{progress}%</strong></div><div className="progress-track"><i className={color} style={{ width: `${progress}%` }} /></div></div> }

export default App
