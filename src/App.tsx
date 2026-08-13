import { useState } from 'react'

type Page = 'home' | 'about' | 'contact' | 'register' | 'register2' | 'login' | 'cart'

/* ─────────────────────────────── LOGO ─────────────────────────────── */
function FDLogo({ size = 'md', white = false }: { size?: 'sm' | 'md' | 'lg'; white?: boolean }) {
  const dim = size === 'lg' ? 64 : size === 'sm' ? 36 : 48
  const textSize = size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl'
  const subSize = size === 'lg' ? 'text-xs' : 'text-[9px]'
  const color = white ? 'text-white' : 'text-white'
  const stroke = white ? 'white' : 'white'
  return (
    <div className="flex items-center gap-2">
      <svg width={dim} height={dim} viewBox="0 0 64 64" fill="none">
        <polygon points="32,2 62,32 32,62 2,32" stroke={stroke} strokeWidth="3" fill="none" />
        <text x="32" y="38" textAnchor="middle" fill={stroke} fontSize="20" fontWeight="bold" fontFamily="Nunito, sans-serif">FD</text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-cursive ${textSize} ${color}`}>food dash</span>
        <span className={`${subSize} tracking-widest uppercase ${color} opacity-80 font-semibold`}>Rápido e Saboroso!</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────── NAVBAR ─────────────────────────────── */
function Navbar({ onNav, current }: { onNav: (p: Page) => void; current: Page }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 w-full" style={{ backgroundColor: 'var(--purple-dark)' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-1 hover:opacity-80 transition-opacity"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Logo */}
        <button onClick={() => onNav('home')} className="hover:opacity-90 transition-opacity">
          <FDLogo />
        </button>

        {/* Center nav - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 text-white text-sm font-semibold">
          {current === 'cart' && (
            <span className="opacity-90">Carrinho</span>
          )}
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNav('login')}
            className="hidden sm:block text-white text-sm font-semibold hover:opacity-80 transition-opacity"
          >
            Cadastre-se
          </button>
          <button
            onClick={() => onNav('login')}
            className="text-white border-2 border-white rounded-full px-5 py-1.5 text-sm font-bold hover:bg-white hover:text-purple-900 transition-all"
          >
            Entrar
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/20 px-4 py-3 flex flex-col gap-3" style={{ backgroundColor: 'var(--purple-dark)' }}>
          <button onClick={() => { onNav('home'); setMobileOpen(false) }} className="text-white text-left font-semibold hover:opacity-80">Início</button>
          <button onClick={() => { onNav('about'); setMobileOpen(false) }} className="text-white text-left font-semibold hover:opacity-80">Sobre nós</button>
          <button onClick={() => { onNav('contact'); setMobileOpen(false) }} className="text-white text-left font-semibold hover:opacity-80">Contate-nos</button>
          <button onClick={() => { onNav('cart'); setMobileOpen(false) }} className="text-white text-left font-semibold hover:opacity-80">Carrinho</button>
        </div>
      )}
    </nav>
  )
}

/* ─────────────────────────────── FOOTER ─────────────────────────────── */
function Footer({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <footer style={{ backgroundColor: 'var(--purple-dark)' }} className="mt-0">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <div className="border-t border-white/20 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Food Dash</h4>
            <ul className="space-y-2">
              {['Sobre nós', 'Contate-nos', 'Torne-se um Entregador'].map(link => (
                <li key={link}>
                  <button
                    onClick={() => link === 'Sobre nós' ? onNav('about') : link === 'Contate-nos' ? onNav('contact') : undefined}
                    className="text-white/75 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Descubra</h4>
            <ul className="space-y-2">
              {['Cadastre seu Restaurante', 'Food Dash Shop', 'Food Dash Card'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/75 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3 - Social */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Social</h4>
            <div className="flex gap-4 items-center">
              {/* YouTube */}
              <a href="#" className="text-white hover:opacity-75 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                </svg>
              </a>
              {/* X/Twitter */}
              <a href="#" className="text-white hover:opacity-75 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-white hover:opacity-75 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-white hover:opacity-75 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button onClick={() => onNav('home')} className="hover:opacity-90 transition-opacity flex-shrink-0">
            <FDLogo size="sm" white />
          </button>
          <p className="text-white/60 text-xs leading-relaxed">
            © Copyright 2024 - Food Dash - Todos os direitos reservados Food Dash com Agência de Restaurantes Online S.A.<br />
            CPF/CNPJ 022894296-94 / Rua José Nicodemos Santa Cruz/Palmares MG N°210 CEP: 31155-270 / Telefone: +55(31)995342398
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────── HOME PAGE ─────────────────────────────── */
const CATEGORIES = [
  { name: 'Lanches', img: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=300&q=80' },
  { name: 'Japonesa', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&q=80' },
  { name: 'Doces', img: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=300&q=80' },
  { name: 'Brasileira', img: 'https://images.unsplash.com/photo-1709114107937-6dec855d9ab5?w=300&q=80' },
  { name: 'Italiana', img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&q=80' },
  { name: 'Salada', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80' },
  { name: 'Padaria', img: 'https://images.unsplash.com/photo-1566698629409-787a68fc5724?w=300&q=80' },
  { name: 'Bebidas', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&q=80' },
  { name: 'Sorvetes', img: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=300&q=80' },
]

function HomePage({ onNav }: { onNav: (p: Page) => void }) {
  const [search, setSearch] = useState('')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: 500 }}>
        {/* Background column grid */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
          <div style={{ backgroundColor: '#C4A8DF' }} />
          <div style={{ backgroundColor: '#9B6CC8' }} />
          <div style={{ backgroundColor: '#C4A8DF' }} />
          <div style={{ backgroundColor: '#C4A8DF' }} />
          <div style={{ backgroundColor: '#9B6CC8' }} />
          <div style={{ backgroundColor: '#C4A8DF' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid grid-cols-3 items-center gap-6">
          {/* Left food images */}
          <div className="flex flex-col gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80"
              alt="Shrimp pasta"
              className="w-52 h-52 object-cover rounded-full shadow-2xl border-4 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=400&q=80"
              alt="Burger and fries"
              className="w-52 h-52 object-cover rounded-full shadow-2xl border-4 border-white"
            />
          </div>

          {/* Center */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Peça agora no{' '}
              <span className="font-bold" style={{ color: 'var(--purple-accent)' }}>Food Dash!</span>
            </h1>
            <div className="relative w-full max-w-sm">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2"
                width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="#6B21A8" strokeWidth="2.5" strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="O que vai ser hoje?"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg border-2 text-gray-700 text-sm font-medium placeholder-gray-400 outline-none focus:border-purple-500 transition-colors"
                style={{ borderColor: 'var(--purple-medium)', backgroundColor: 'white' }}
              />
            </div>
          </div>

          {/* Right food images */}
          <div className="flex flex-col gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80"
              alt="Colorful salad"
              className="w-52 h-52 object-cover rounded-full shadow-2xl border-4 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80"
              alt="Sushi platter"
              className="w-52 h-52 object-cover rounded-full shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {CATEGORIES.filter(c =>
            search === '' || c.name.toLowerCase().includes(search.toLowerCase())
          ).map(cat => (
            <button
              key={cat.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:border-purple-300 hover:shadow-lg transition-all group bg-white"
              style={{ boxShadow: '0 2px 8px rgba(107,33,168,0.08)' }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-purple-100 group-hover:border-purple-300 transition-colors">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-700 transition-colors">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ─────────────────────────────── ABOUT PAGE ─────────────────────────────── */
function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column */}
        <div>
          <p className="text-sm text-gray-500 font-semibold mb-2">Sobre Food Dash</p>
          <h1 className="text-3xl font-extrabold mb-8 leading-tight" style={{ color: 'var(--purple-accent)' }}>
            Conheça a História do Sabor:<br />Food Dash - Entrega Rápida,<br />Sabor Inigualável!
          </h1>

          {/* Card 1 */}
          <div className="rounded-2xl p-6 mb-5" style={{ backgroundColor: 'var(--purple-pale)' }}>
            <h3 className="font-bold text-base mb-3" style={{ color: 'var(--purple-accent)' }}>Nosso Compromisso</h3>
            <p className="text-gray-700 text-sm leading-relaxed text-justify">
              No Food Dash, entendemos que você tem uma vida agitada, e é por isso que nos esforçamos para oferecer um serviço de entrega que se adapte ao seu ritmo acelerado. Com uma ampla seleção de restaurantes e pratos deliciosos disponíveis para entrega rápida, estamos aqui para satisfazer seus desejos gastronômicos sempre que a fome bater à sua porta.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--purple-pale)' }}>
            <h3 className="font-bold text-base mb-3" style={{ color: 'var(--purple-accent)' }}>Rápido e Saboroso!</h3>
            <p className="text-gray-700 text-sm leading-relaxed text-justify">
              Nosso lema é simples: rápido e saboroso! Quer você esteja com pressa durante o horário do almoço, procurando uma refeição rápida antes de uma reunião importante ou simplesmente desejando desfrutar de uma deliciosa refeição no conforto da sua casa, o Food Dash está aqui para tornar isso possível. Com um processo de pedido simples e eficiente e entregas pontuais, estamos prontos para satisfazer suas necessidades de alimentação sempre que você precisar.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {/* Card 3 */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--purple-pale)' }}>
            <h3 className="font-bold text-base mb-3" style={{ color: 'var(--purple-accent)' }}>Sobre o Food Dash</h3>
            <p className="text-gray-700 text-sm leading-relaxed text-justify">
              Bem-vindo ao Food Dash, sua plataforma de entrega de comida rápida e saborosa! Aqui no Food Dash, estamos empenhados em trazer para você uma experiência de entrega de alimentos que é rápida, conveniente e satisfatória.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--purple-pale)' }}>
            <h3 className="font-bold text-base mb-3" style={{ color: 'var(--purple-accent)' }}>Variedade e Qualidade</h3>
            <p className="text-gray-700 text-sm leading-relaxed text-justify">
              Trabalhamos em estreita colaboração com uma rede de restaurantes locais e chefs talentosos para garantir que você tenha acesso a uma variedade diversificada de opções culinárias, desde clássicos reconfortantes até pratos exclusivos e inovadores. Priorizamos a qualidade em tudo o que fazemos, desde a escolha dos ingredientes frescos até a embalagem cuidadosa dos alimentos para garantir que cada refeição chegue até você com o mesmo sabor e frescor que teria se fosse servida diretamente no restaurante.
            </p>
          </div>

          {/* CTA banner */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--purple-pale)' }}>
            <p className="font-extrabold text-lg leading-snug text-justify" style={{ color: 'var(--purple-accent)' }}>
              Junte-se a nós no Food Dash e descubra uma nova maneira de desfrutar comida de qualidade, onde quer você esteja e sempre que a fome bater!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── CONTACT PAGE ─────────────────────────────── */
function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  return (
    <div className="min-h-[70vh] px-4 py-12" style={{ backgroundColor: 'var(--purple-pale)' }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="pt-4">
          <h1 className="text-3xl font-extrabold mb-6 leading-snug" style={{ color: 'var(--purple-dark)' }}>
            Estamos Aqui Para Ouvir Você: Sabor e Suporte ao Alcance de um Clique!
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Nosso Email: FoodDash@gmail.com</span>
          </div>
        </div>

        {/* Right - form card */}
        <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--purple-medium)' }}>
          <h2 className="text-white text-xl font-semibold mb-6">Mande-nos uma mensagem.</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome completo"
              value={form.name}
              onChange={set('name')}
              className="w-full px-4 py-3 rounded-lg text-sm text-gray-700 bg-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="email"
              placeholder="Endereço de email"
              value={form.email}
              onChange={set('email')}
              className="w-full px-4 py-3 rounded-lg text-sm text-gray-700 bg-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="text"
              placeholder="Assunto"
              value={form.subject}
              onChange={set('subject')}
              className="w-full px-4 py-3 rounded-lg text-sm text-gray-700 bg-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
            />
            <div>
              <label className="text-white text-sm mb-1 block">Conte-nos mais detalhes</label>
              <textarea
                placeholder=""
                value={form.message}
                onChange={set('message')}
                rows={5}
                className="w-full px-4 py-3 rounded-lg text-sm text-gray-700 bg-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 resize-none"
              />
            </div>
            <button
              className="w-40 py-3 rounded-full text-white font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--purple-dark)' }}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── REGISTER PAGE (step 1) ─────────────────────────────── */
function RegisterPage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <div className="min-h-[80vh] relative overflow-hidden flex flex-col items-center justify-center py-12">
      {/* Background columns */}
      <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
        <div style={{ backgroundColor: '#C4A8DF' }} />
        <div style={{ backgroundColor: '#9B6CC8' }} />
        <div style={{ backgroundColor: '#C4A8DF' }} />
        <div style={{ backgroundColor: '#9B6CC8' }} />
        <div style={{ backgroundColor: '#C4A8DF' }} />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4 rounded-2xl p-10 flex flex-col items-center gap-5"
        style={{ backgroundColor: 'var(--purple-accent)' }}>
        <h2 className="text-white text-2xl font-bold text-center">Crie uma Conta no Food Dash!</h2>

        <button className="w-full flex items-center gap-4 bg-white rounded-full px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Fazer Login com Google
        </button>

        <button className="w-full flex items-center gap-4 bg-white rounded-full px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Continuar com Facebook
        </button>

        <div className="w-full border-t border-white/40" />

        <button
          onClick={() => onNav('register2')}
          className="w-full text-center py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-900 transition-all"
        >
          Crie sua Conta
        </button>
      </div>
    </div>
  )
}

/* ─────────────────────────────── REGISTER PAGE (step 2) ─────────────────────────────── */
function RegisterPage2() {
  const [form, setForm] = useState({ email: '', phone: '', name: '', password: '' })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  return (
    <div className="min-h-[80vh] relative overflow-hidden flex flex-col items-center justify-center py-12">
      {/* Background columns */}
      <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
        <div style={{ backgroundColor: '#C4A8DF' }} />
        <div style={{ backgroundColor: '#9B6CC8' }} />
        <div style={{ backgroundColor: '#C4A8DF' }} />
        <div style={{ backgroundColor: '#9B6CC8' }} />
        <div style={{ backgroundColor: '#C4A8DF' }} />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg mx-4 rounded-2xl p-10 flex flex-col gap-5"
        style={{ backgroundColor: 'var(--purple-accent)' }}>
        <h2 className="text-white text-3xl font-extrabold text-center leading-tight">
          Falta Pouco para<br />Matar sua Fome!
        </h2>

        <input
          type="email"
          placeholder="Endereço de Email"
          value={form.email}
          onChange={set('email')}
          className="w-full px-5 py-3.5 rounded-lg text-sm text-gray-700 bg-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
        />
        <input
          type="tel"
          placeholder="Número de Telefone com DDD"
          value={form.phone}
          onChange={set('phone')}
          className="w-full px-5 py-3.5 rounded-lg text-sm text-gray-700 bg-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
        />
        <input
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={set('name')}
          className="w-full px-5 py-3.5 rounded-lg text-sm text-gray-700 bg-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
        />
        <input
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={set('password')}
          className="w-full px-5 py-3.5 rounded-lg text-sm text-gray-700 bg-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300"
        />

        <button className="w-full py-3.5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-900 transition-all text-base">
          Crie sua Conta
        </button>
      </div>
    </div>
  )
}

/* ─────────────────────────────── CART PAGE ─────────────────────────────── */
function CartPage() {
  const [payment, setPayment] = useState<'pix' | 'card'>('pix')

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left - delivery & payment */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-5">Entrega</h2>

          <div className="flex items-start gap-3 mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm">R.Itajubá, 233, Floresta</p>
              <p className="text-sm text-gray-500">Belo Horizonte/MG</p>
            </div>
            <button className="text-blue-500 text-sm font-semibold hover:underline">Trocar</button>
          </div>

          <p className="text-sm font-bold text-gray-700 mb-6">Hoje Entre 30 a 40 Minutos</p>

          {/* Payment options */}
          <button
            onClick={() => setPayment('pix')}
            className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 mb-3 transition-all ${
              payment === 'pix' ? 'border-purple-500' : 'border-gray-200'
            }`}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#32BCAD" />
              <path d="M7 12l2.5-2.5 2.5 2.5-2.5 2.5L7 12zm3.5-3.5L13 6l2.5 2.5L13 11l-2.5-2.5zm3.5 3.5l2.5-2.5 2.5 2.5-2.5 2.5-2.5-2.5zm-3.5 3.5L13 18l2.5-2.5L13 13l-2.5 2.5z" fill="white" />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-gray-800 text-sm">Pague com Pix</p>
              <p className="text-xs text-gray-400">Use o QR Code ou copie e cole o código</p>
            </div>
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-xs text-gray-400 font-medium">Ou</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          <button
            onClick={() => setPayment('card')}
            className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
              payment === 'card' ? 'border-purple-500' : 'border-gray-200'
            }`}
          >
            <svg width="36" height="28" viewBox="0 0 48 36" fill="none">
              <circle cx="18" cy="18" r="14" fill="#EB001B" fillOpacity="0.9" />
              <circle cx="30" cy="18" r="14" fill="#F79E1B" fillOpacity="0.9" />
            </svg>
            <p className="font-semibold text-gray-800 text-sm">Débito ou Crédito</p>
          </button>

          <button
            className="mt-8 w-full py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--purple-dark)' }}
          >
            Finalizar Pedido
          </button>
        </div>

        {/* Right - order summary */}
        <div>
          <div className="rounded-xl p-6" style={{ backgroundColor: '#F5F5F5' }}>
            <h2 className="text-xl font-bold text-gray-800 mb-5">Seu Pedido</h2>

            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold text-gray-800 text-sm">Combo Big King</p>
                <p className="text-xs text-gray-500 mt-0.5">1 Big King com Batata e Refri a sua Escolha</p>
                <div className="flex gap-3 mt-2">
                  <button className="text-blue-500 text-xs font-semibold hover:underline">Editar</button>
                  <button className="text-gray-500 text-xs font-semibold hover:underline">Remover</button>
                </div>
              </div>
              <span className="font-bold text-gray-800 text-sm whitespace-nowrap ml-4">Total $35,99</span>
            </div>

            <div className="border-t border-gray-300 my-4" />

            <div className="flex items-center gap-3 mb-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <path d="M9 14l6-6m-3.5-1.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-3 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-700 text-sm">Cupons</p>
                <p className="text-xs text-gray-400">0 Cupons Disponíveis</p>
              </div>
            </div>

            <div className="border-t border-gray-300 my-4" />

            <div className="flex justify-between">
              <span className="text-sm font-semibold text-gray-700">Total Com Taxa de Entrega</span>
              <span className="font-bold text-gray-800 text-sm">Total $40,99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── APP ─────────────────────────────── */
export default function App() {
  const [page, setPage] = useState<Page>('home')

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage onNav={setPage} />
      case 'about': return <AboutPage />
      case 'contact': return <ContactPage />
      case 'register': return <RegisterPage onNav={setPage} />
      case 'register2': return <RegisterPage2 />
      case 'login': return <RegisterPage onNav={setPage} />
      case 'cart': return <CartPage />
      default: return <HomePage onNav={setPage} />
    }
  }

  const showFooter = !['register', 'register2', 'login'].includes(page)

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
      <Navbar onNav={setPage} current={page} />
      <main>
        {renderPage()}
      </main>
      {showFooter && <Footer onNav={setPage} />}
      {['register', 'register2', 'login'].includes(page) && (
        <div style={{ backgroundColor: 'var(--purple-dark)' }} className="py-6 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start gap-4">
            <button onClick={() => setPage('home')} className="hover:opacity-90">
              <FDLogo size="sm" white />
            </button>
            <p className="text-white/60 text-xs leading-relaxed">
              © Copyright 2024 - Food Dash - Todos os direitos reservados Food Dash com Agência de Restaurantes Online S.A.<br />
              CPF/CNPJ 022894296-94 / Rua José Nicodemos Santa Cruz/Palmares MG N°210 CEP: 31155-270 / Telefone: +55(31)995342398
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
