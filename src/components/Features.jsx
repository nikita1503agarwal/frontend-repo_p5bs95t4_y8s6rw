import { Shield, Camera, BellRing, Cpu, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Pază și protecție',
    desc: 'Servicii complete de pază umană, control acces și patrulare pentru spații comerciale și industriale.'
  },
  {
    icon: Camera,
    title: 'Supraveghere video',
    desc: 'Proiectare și instalare sisteme CCTV, analiză video inteligentă și monitorizare centralizată.'
  },
  {
    icon: BellRing,
    title: 'Alarmă și monitorizare',
    desc: 'Sisteme anti-efracție, detectare incendiu și dispecerat 24/7 cu intervenție rapidă.'
  },
  {
    icon: Cpu,
    title: 'Soluții tehnice',
    desc: 'Integrare tehnologii IoT, control perimetral, automatizări și securitate cibernetică de bază.'
  },
  {
    icon: Clock,
    title: 'Disponibilitate 24/7',
    desc: 'Echipă de intervenție și suport non-stop, SLA și rapoarte periodice de performanță.'
  },
  {
    icon: Users,
    title: 'Echipă certificată',
    desc: 'Profesioniști acreditați, training continuu și conformitate cu reglementările în vigoare.'
  },
]

export default function Features() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.06),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">De ce Focus Security</h2>
          <p className="mt-3 text-blue-100/90">Combinația ideală între expertiză umană și tehnologie de vârf.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
