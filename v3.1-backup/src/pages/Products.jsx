import { useEffect } from 'react'
import FloatingShapes from '../components/FloatingShapes'
import { ProductIllustration } from '../components/ProductIllustrations'

const products = [
  {
    id: 'ai',
    title: 'AI 数字员工',
    subtitle: '不只回答问题，更敢进入业务流程',
    accent: 'blue',
    desc: '企业缺的不是另一个聊天框，而是一套可治理的 AI 执行系统。铭澄 AI 数字员工平台让 AI 理解企业知识、遵循审批流程、调用业务系统，安全地完成真实工作。',
    features: [
      { title: '知识底座', desc: '知识库 + 业务认知建模，不只搜文档，更理解客户、产品、流程、制度间的业务关系。' },
      { title: '执行中枢', desc: 'Agent 智能调度 + 多智能体协同，任务拆解、并行执行，关键节点由人确认。' },
      { title: '系统连接', desc: '安全接入 OA/CRM/ERP/核心业务系统，逐 Agent 校验身份与权限，数据不出域。' },
      { title: '安全治理', desc: '身份权限 + 沙箱隔离 + 全链路审计，贯穿全流程，可追溯、可复盘。' },
    ],
    scenarios: [
      { title: '智能办公助手', desc: '制度解读 / 合规校验 / 文稿生成，政策查询从小时级降到分钟级。' },
      { title: '财务流程自动化', desc: '票据识别 / 预算校验 / 报销审批 / 银企支付，减少人工审单。' },
      { title: '客户服务与洞察', desc: '客户画像 / 需求挖掘 / 方案生成，全链路数字化。' },
    ],
    highlight: '私有化部署，数据不出域；关键节点人工审批，AI 不越权；全流程日志留痕，操作可追溯。',
  },
  {
    id: 'xr',
    title: 'VR/AR 虚实融合',
    subtitle: '基于 UE4/Unity 引擎的 XR 全链路解决方案',
    accent: 'cyan',
    desc: '铭澄在 XR 内容研发领域积累深厚，基于 UE4 与 Unity 双引擎，支持 HTC Vive、Oculus、Hololens 等多设备适配，提供从概念设计到内容交付的完整服务。',
    features: [
      { title: '引擎研发', desc: 'UE4 / Unity 双引擎，5 年以上经验，高品质渲染与物理交互。' },
      { title: '多设备适配', desc: 'HTC Vive / Oculus / Hololens / Pico 等多平台无缝适配。' },
      { title: '交互设计', desc: '手势识别、语音交互、空间定位，自然直观的沉浸式体验。' },
      { title: '内容生产', desc: '3D 建模、场景搭建、动画制作，全链路内容交付能力。' },
    ],
    scenarios: [
      { title: '数字展厅', desc: '沉浸式线上展厅，突破时空限制，打造品牌数字化展示空间。' },
      { title: '工业仿真', desc: '高精度工业场景还原，支持设备操作培训与流程演练。' },
      { title: 'AR 虚实结合', desc: '将虚拟信息叠加到物理世界，增强现场作业与展示体验。' },
    ],
    highlight: '双引擎 + 多设备，从概念到交付全链路闭环；XR 基因结合 AI，打造差异化交互体验。',
  },
  {
    id: 'drone',
    title: '无人机训练软件',
    subtitle: '军事级仿真训练平台',
    accent: 'purple',
    desc: '面向军事与专业领域的风洞跳伞训练仿真平台，融合高精度物理引擎与沉浸式交互体验。',
    features: [
      { title: '风洞模拟', desc: '高精度空气动力学模型，真实还原风洞环境下的飞行姿态与受力。' },
      { title: '沉浸训练', desc: 'VR 头显 + 体感反馈，提供接近实战的训练体验。' },
      { title: '数据分析', desc: '训练过程全数据采集，姿态分析、成绩评估、改进建议。' },
      { title: '多人协同', desc: '支持多人在线协同训练，还原真实编队环境。' },
    ],
    scenarios: [
      { title: '军事训练', desc: '跳伞、无人机操控等高风险训练场景的仿真替代。' },
      { title: '民航培训', desc: '飞行员应急程序训练，降低真机训练成本与风险。' },
      { title: '竞技体育', desc: '风洞飞行竞技仿真，辅助运动员技术分析。' },
    ],
    highlight: '即将上线——更多产品细节与功能演示敬请期待。',
    badge: '即将上线',
  },
  {
    id: 'traffic',
    title: '智慧交通',
    subtitle: '时空智能，重塑城市交通大脑',
    accent: 'amber',
    desc: '基于深度学习与图神经网络，自研四大核心模型，为城市交通管理提供从预测到决策的全栈智能能力。',
    features: [
      { title: '时空分层预测模型', desc: '突破传统 GCN 过平滑瓶颈，融合 Transformer 架构捕捉长期时空依赖关系。' },
      { title: '动态图结构学习', desc: '告别固定路网依赖，基于实时交通流序列动态生成路网关联，预测精度较传统方法提升 20%。' },
      { title: 'BiGCN 出行预测', desc: '首创双向图卷积模型，精准捕捉 OD 矩阵双向相关性。' },
      { title: 'T2GAN 态势推演', desc: '融合社交媒体等多源文本数据，实时推演突发事件下的交通态势，支持人机交互干预。' },
    ],
    scenarios: [
      { title: '城市交通管理', desc: '实时路况预测、信号灯优化、拥堵预警与疏导方案。' },
      { title: '应急指挥调度', desc: '突发事件下交通态势推演，辅助应急管理部门科学决策。' },
      { title: '公共交通优化', desc: 'OD 出行预测 + 公交线路优化，提升公共交通运行效率。' },
    ],
    highlight: '自研核心模型，预测精度提升 20%；多源数据融合，支持人机交互干预；为城市应急管理提供智能决策支持。',
  },
]

const accentMap = {
  blue:   { ring: 'ring-blue-500/20', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500', tagBg: 'bg-blue-100', tagText: 'text-blue-700', tagBorder: 'border-blue-200' },
  cyan:   { ring: 'ring-cyan-500/20',  bg: 'bg-cyan-50',  text: 'text-cyan-700',  border: 'border-cyan-200',  dot: 'bg-cyan-500',  tagBg: 'bg-cyan-100',  tagText: 'text-cyan-700',  tagBorder: 'border-cyan-200' },
  purple: { ring: 'ring-purple-500/20',bg: 'bg-purple-50',text: 'text-purple-700',border: 'border-purple-200',dot: 'bg-purple-500',tagBg: 'bg-purple-100',tagText: 'text-purple-700',tagBorder: 'border-purple-200' },
  amber:  { ring: 'ring-amber-500/20', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500', tagBg: 'bg-amber-100', tagText: 'text-amber-700', tagBorder: 'border-amber-200' },
}

export default function Products() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active')
        })
      },
      { threshold: 0.05 }
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
          <div className="glow-orb w-[300px] h-[300px] bottom-[-5%] left-[5%] bg-cyan-300" style={{ opacity: 0.12 }} />
        </div>
        <div className="absolute inset-0 hex-grid opacity-50" />
        <FloatingShapes />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="reveal">
            <span className="section-tag">产品服务</span>
          </div>
          <h1 className="reveal text-4xl md:text-5xl font-extrabold text-ink mb-6 mt-6 tracking-tight">
            四大业务线
          </h1>
          <p className="reveal text-lg text-ink-secondary max-w-2xl mx-auto">
            AI 数字员工 · VR/AR 虚实融合 · 无人机训练软件 · 智慧交通
          </p>

          <div className="reveal flex flex-wrap justify-center gap-2.5 mt-10">
            {products.map((p) => {
              const a = accentMap[p.accent]
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${a.border} ${a.text} bg-white/60 backdrop-blur hover:scale-105`}
                >
                  {p.badge && <span className={`inline-block w-1.5 h-1.5 rounded-full ${a.dot} mr-1.5 animate-pulse`} />}
                  {p.title}
                </a>
              )
            })}
          </div>
        </div>
        <div className="bottom-fade" />
      </section>

      {/* ───── Product Sections ───── */}
      {products.map((product, idx) => {
        const a = accentMap[product.accent]
        const isAlt = idx % 2 === 1

        return (
          <section
            key={product.id}
            id={product.id}
            className={`py-24 md:py-32 relative ${isAlt ? 'bg-section-alt' : 'bg-section'}`}
          >
            <div className={`absolute inset-0 ${isAlt ? 'dot-grid' : 'hex-grid'} opacity-40`} />
            <FloatingShapes />
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left: Description + Illustration (alternate sides) */}
                <div className={`reveal ${isAlt ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {product.badge && (
                      <span className={`px-3 py-1 text-[11px] font-semibold rounded-full uppercase tracking-wider ${a.tagBg} ${a.tagText} border ${a.tagBorder}`}>
                        {product.badge}
                      </span>
                    )}
                    <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>
                      {product.subtitle}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-6">
                    {product.title}
                  </h2>

                  <p className="text-ink-secondary leading-relaxed mb-8">
                    {product.desc}
                  </p>

                  {/* SVG Illustration */}
                  <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200/50 bg-white/40 backdrop-blur-sm">
                    <ProductIllustration type={product.id} />
                  </div>

                  <div className={`p-5 rounded-2xl border ${a.border} ${a.bg} mb-8`}>
                    <p className="text-sm text-ink-secondary leading-relaxed">{product.highlight}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[11px] font-semibold text-ink-muted uppercase tracking-[0.15em]">应用场景</h4>
                    {product.scenarios.map((s) => (
                      <div key={s.title} className="flex gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${a.dot}`} />
                        <div>
                          <span className="text-sm font-medium text-ink">{s.title}</span>
                          <span className="text-sm text-ink-muted ml-2">{s.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Feature Cards */}
                <div className={`reveal grid grid-cols-1 sm:grid-cols-2 gap-4 ${isAlt ? 'lg:order-1' : 'lg:order-2'}`}>
                  {product.features.map((f) => (
                    <div key={f.title} className="glass-card p-6 hover:-translate-y-1">
                      <h4 className="text-sm font-bold text-ink mb-2">{f.title}</h4>
                      <p className="text-xs text-ink-secondary leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ───── CTA ───── */}
      <section className="py-24 md:py-32 bg-section relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400" style={{ opacity: 0.18 }} />
        </div>
        <FloatingShapes />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">需要定制方案？</h2>
          <p className="text-lg text-ink-secondary mb-10">告诉我们您的需求，我们提供个性化的解决方案。</p>
          <a href="/contact" className="btn-primary text-lg px-10 py-4 inline-flex">
            <span className="relative z-10">联系我们</span>
          </a>
        </div>
      </section>
    </div>
  )
}
