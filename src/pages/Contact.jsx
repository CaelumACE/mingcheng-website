import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* ───── Hero ───── */}
      <section className="bg-hero pt-32 pb-16 md:pt-44 md:pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb w-[400px] h-[400px] top-[-10%] right-[-5%] bg-blue-400" style={{ opacity: 0.20 }} />
          <div className="glow-orb w-[280px] h-[280px] bottom-[-5%] left-[8%] bg-cyan-300" style={{ opacity: 0.10 }} />
        </div>
        <div className="absolute inset-0 hex-grid opacity-25" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="reveal">
            <span className="section-tag">联系我们</span>
          </div>
          <h1 className="reveal text-4xl md:text-5xl font-extrabold text-ink mb-6 mt-6 tracking-tight">
            期待与您交流
          </h1>
          <p className="reveal text-lg text-ink-secondary max-w-xl mx-auto">
            无论业务咨询还是合作洽谈，欢迎随时联系。
          </p>
        </div>
        <div className="bottom-fade" />
      </section>

      {/* ───── Main Content ───── */}
      <section className="py-24 md:py-32 bg-section relative">
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 reveal space-y-6">
              <h2 className="text-2xl font-bold text-ink mb-8">联系方式</h2>

              <InfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                label="电话"
                value="18610142706"
                href="tel:18610142706"
              />

              <InfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                label="邮箱"
                value="18610142706@163.com"
                href="mailto:18610142706@163.com"
              />

              <InfoItem
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }
                label="联系人"
                value="王泽浩"
              />

              {/* WeChat QR */}
              <div className="mt-10 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-ink mb-4">微信联系</h3>
                <div className="inline-block p-4 rounded-2xl glass">
                  <img
                    src="/assets/wechat-qr.png"
                    alt="微信二维码"
                    className="w-36 h-36 object-cover rounded-xl"
                  />
                  <p className="text-xs text-ink-muted mt-2 text-center">扫描二维码添加微信</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 reveal">
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-2xl font-bold text-ink mb-2">在线留言</h2>
                <p className="text-sm text-ink-muted mb-8">有什么想对我们说的？请填写以下表单。</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="姓名" placeholder="您的姓名" />
                    <InputField label="电话" placeholder="您的电话" type="tel" />
                  </div>

                  <InputField label="邮箱" placeholder="您的邮箱" type="email" />

                  <div>
                    <label className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wider">咨询类型</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-ink text-sm
                      focus:border-brand-400 focus:ring-2 focus:ring-brand-200 outline-none transition-all appearance-none
                      bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10">
                      <option value="">请选择</option>
                      <option value="ai">AI 数字员工</option>
                      <option value="xr">VR/AR 虚实融合</option>
                      <option value="drone">无人机训练软件</option>
                      <option value="traffic">智慧交通</option>
                      <option value="other">其他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wider">留言内容</label>
                    <textarea
                      rows="4"
                      placeholder="请描述您的需求..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-ink text-sm
                        focus:border-brand-400 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none
                        placeholder:text-ink-muted"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto text-base">
                    <span className="relative z-10">提交留言</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ─── Local Components ─── */
function InfoItem({ icon, label, value, href }) {
  const ValueTag = href ? 'a' : 'div'
  const extraProps = href ? { href, className: 'text-base font-medium text-ink hover:text-brand-600 transition-colors' } : { className: 'text-base font-medium text-ink' }

  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 border border-brand-200">
        {icon}
      </div>
      <div>
        <div className="text-xs text-ink-muted mb-1 uppercase tracking-wider">{label}</div>
        <ValueTag {...extraProps}>{value}</ValueTag>
      </div>
    </div>
  )
}

function InputField({ label, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-ink-secondary mb-2 uppercase tracking-wider">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-ink text-sm
          focus:border-brand-400 focus:ring-2 focus:ring-brand-200 outline-none transition-all
          placeholder:text-ink-muted"
      />
    </div>
  )
}
