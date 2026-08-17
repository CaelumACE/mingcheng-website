import { useEffect, useState } from 'react'
import FloatingShapes from '../components/FloatingShapes'
import { ProductIllustration } from '../components/ProductIllustrations'
import ImageCarousel from '../components/ImageCarousel'

const products = [
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
  {
    id: 'drone',
    title: '无人机低空攻防虚拟训练平台',
    subtitle: '低空攻防仿真 · 战训教一体化',
    accent: 'purple',
    desc: '面向低空攻防的无人机虚拟训练平台 5.0，覆盖人员装备编组、无人机机库配置、战术想定构设、作战指挥协同、侦察情报、打击毁伤评估、红蓝对抗、低空反无、复盘分析及导调监管十大核心模块，贯通作战、训练、教学一体化应用。',
    features: [
      { title: '装备与人员编组', desc: '五大作战角色（警戒/侦察/指挥/打击/保障）岗位化编组；无人机9类核心部件3D组装；性能雷达多维评估与任务适配。' },
      { title: '战术想定与指挥协同', desc: 'DEM地形+倾斜摄影战场环境构建；作战区域规划与任务指挥控制；多源侦察融合与敌情信息实时共享。' },
      { title: '侦察打击与对抗演练', desc: '目标识别跟踪与精确火力打击；40vs40红蓝攻防体系对抗；低空威胁感知与电子对抗/末端拦截/VR反无演训。' },
      { title: '评估分析与导调监管', desc: '任务效能评估与战损毁伤鉴定；个人/团队能力雷达画像生成；全域态势监视与演训过程回放讲评。' },
    ],
    scenarios: [
      { title: '部队作战运用', desc: '贴近实战的低空攻防演训与作战推演，红蓝对抗多类型战场场景。' },
      { title: '专业训练', desc: '无人机操控、战术运用、反无装备运用等专业技能训练与考评。' },
      { title: '院校教学', desc: '无人机理论教学、模拟训练、考评结合的一体化教学支撑。' },
    ],
    highlight: '十大核心模块全覆盖：从人员装备编组到导调监管闭环；支持40vs40大规模红蓝对抗；AI智能点评与能力雷达画像贯穿全流程。',
    carouselInterval: 6000,
    carouselSlides: [
      {
        image: '/assets/drone/drone-v6-01-personnel-equip.jpg',
        tag: '岗位编组 · 装备配置',
        title: '人员岗位与装备编组',
        desc: '实现"人、装、任务"一体化编组，支撑警戒、侦察、指挥、打击、保障五大岗位协同训练。',
        points: [
          { t: '五岗协同', d: '警戒 / 侦察 / 指挥 / 打击 / 保障 角色差异化配置' },
          { t: '装备匹配', d: '每个岗位配备差异化武器与装备方案' },
          { t: '一体化编组', d: '人员、装备、任务三维联动，灵活组合' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-02-uav-hangar-mission.jpg',
        tag: '机库配置 · 任务适配',
        title: '无人机机库与任务适配',
        desc: '性能雷达图多维评估（升限/加速/极速/推力/续航/载量），9类核心部件3D组装，作战任务标签化配置与Rate调参曲线联动。',
        points: [
          { t: '性能雷达', d: '六维核心指标可视化评估与任务推荐' },
          { t: '9类部件组装', d: '机架/电池/电机/螺旋桨/相机/电调/飞控/天线/载荷' },
          { t: '调参曲线', d: '组装评分与参数实时联动，输出完整配置清单' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-03-tactical-scene.jpg',
        tag: '战术想定 · 场景构设',
        title: '战术想定与场景构设',
        desc: '基于DEM地形与倾斜摄影数据构建高仿真战场环境，支持敌我态势部署、战术想定构设及演训想定的保存、加载与复用。',
        points: [
          { t: '战场环境构建', d: '山地/城镇/机场/边境等多类型地形' },
          { t: '敌我态势部署', d: '兵力编组、目标部署与战场态势快速构设' },
          { t: '演训想定管理', d: '方案保存/加载/二次编辑，满足推演需求' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-04-command-collab.jpg',
        tag: '指挥协同 · 任务规划',
        title: '作战指挥与任务协同',
        desc: '基于任务需求自动生成作战区域规划，实现任务下达、兵力调配与动态重构，支持多源侦察信息融合与实时态势监控及敌情共享。',
        points: [
          { t: '区域规划', d: '基于任务需求自动生成作战区域划分' },
          { t: '指挥控制', d: '任务下达、兵力调配与动态重构' },
          { t: '态势共享', d: '位置上报、敌情标绘与战场情报实时同步' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-05-recon-intel.jpg',
        tag: '侦察监视 · 情报上报',
        title: '侦察监视与敌情上报',
        desc: '融合可见光与红外探测手段提升复杂环境目标发现能力，基于智能识别实现目标定位与持续跟踪，形成"发现—确认—上报—共享"的侦察闭环。',
        points: [
          { t: '多源侦察感知', d: '可见光/红外多波段融合，提升目标发现能力' },
          { t: '目标识别跟踪', d: 'AI智能识别与自动跟踪，持续监视' },
          { t: '情报闭环', d: '发现→确认→上报→共享全链路打通' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-06-strike-damage.jpg',
        tag: '打击评估 · 毁伤判定',
        title: '无人机打击与毁伤评估',
        desc: '完成目标搜索、低空突防、攻击航路规划及攻击阵位占领训练；开展撞击毁伤、精确投送、遥控起爆等多模式火力打击训练；实现关键部位毁伤判定与战果统计分析。',
        points: [
          { t: '突防接敌', d: '目标搜索/低空突防/航路规划/阵位占领' },
          { t: '精确打击', d: '撞击毁伤/精确投送/遥控起爆多模式' },
          { t: '战果评估', d: '毁伤判定+任务完成度+作战效能综合评分' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-07-redblue-vs.jpg',
        tag: '红蓝对抗 · 多人演练',
        title: '红蓝攻防与多人演练',
        desc: '支持40人vs40人大规模红蓝攻防对抗演练，构建多级指挥与作战席位协同指挥体系，实现多源信息实时同步与统一态势感知。',
        points: [
          { t: '指挥编组训练', d: '多级指挥员与作战席位协同指挥体系' },
          { t: '红蓝体系对抗', d: '40vs40大规模对抗，贴近实战' },
          { t: '联合协同演训', d: '多岗位、多兵力联合协同训练' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-08-counter-uav.jpg',
        tag: '反无保障 · 电子对抗',
        title: '低空反无与保障处置',
        desc: '依托多型反无人装备开展低空威胁发现、识别确认及威胁判别训练；支持电子对抗（通信压制/导航干扰）、末端硬杀伤拦截及PC/VR双模式反无综合演训。',
        points: [
          { t: '威胁感知', d: '雷达扇形扫描，低空目标发现与识别' },
          { t: '电子对抗', d: '通信压制/导航干扰等软杀伤反制' },
          { t: '拦截与演训', d: '末端硬杀伤拦截 + VR反无综合训练' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-09-review-analysis.jpg',
        tag: '复盘评估 · 能力画像',
        title: '复盘评估与能力分析',
        desc: '开展任务完成时效、完成度及任务达成效果评估；战损统计与毁伤鉴定结合AI实时点评；生成个人能力、团队协同及综合作战能力雷达画像。',
        points: [
          { t: '效能评估', d: '任务完成时效/完成度/达成效果量化评分' },
          { t: '能力画像', d: '个人/团队六维能力雷达图可视化' },
          { t: '复盘讲评', d: '关键事件回放+训练复盘+改进建议' },
        ],
      },
      {
        image: '/assets/drone/drone-v6-10-referee-monitor.jpg',
        tag: '导调监管 · 全域监视',
        title: '导调裁判与训练监管',
        desc: '支持三维战场空间与全局态势实时监视，实现关键目标与关键行为全过程观察与跟踪，开展演训过程监管、事件记录与行为分析。',
        points: [
          { t: '全域态势监视', d: '三维战场空间+全局态势实时监控' },
          { t: '关键目标跟踪', d: '关键目标/关键行为全程观察追踪' },
          { t: '过程监管', d: '演训过程录像+事件记录+行为分析' },
        ],
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI 数字员工',
    subtitle: '不只回答问题，更敢进入业务流程',
    accent: 'blue',
    badge: '即将上线',
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
]

const accentMap = {
  blue:   { ring: 'ring-blue-500/20', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500', tagBg: 'bg-blue-100', tagText: 'text-blue-700', tagBorder: 'border-blue-200' },
  cyan:   { ring: 'ring-cyan-500/20',  bg: 'bg-cyan-50',  text: 'text-cyan-700',  border: 'border-cyan-200',  dot: 'bg-cyan-500',  tagBg: 'bg-cyan-100',  tagText: 'text-cyan-700',  tagBorder: 'border-cyan-200' },
  purple: { ring: 'ring-purple-500/20',bg: 'bg-purple-50',text: 'text-purple-700',border: 'border-purple-200',dot: 'bg-purple-500',tagBg: 'bg-purple-100',tagText: 'text-purple-700',tagBorder: 'border-purple-200' },
  amber:  { ring: 'ring-amber-500/20', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500', tagBg: 'bg-amber-100', tagText: 'text-amber-700', tagBorder: 'border-amber-200' },
}

export default function Products() {
  const [activeId, setActiveId] = useState(products[0]?.id)

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

  // Scrollspy: highlight the nav pill for the section currently in view
  useEffect(() => {
    const sections = products
      .map((p) => document.getElementById(p.id))
      .filter(Boolean)
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => spy.observe(s))
    return () => spy.disconnect()
  }, [])

  return (
    <div>
      {/* ───── Hero ───── */}
      <section className="bg-hero pt-32 pb-16 md:pt-44 md:pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb w-[400px] h-[400px] top-[-10%] right-[-5%] bg-blue-400" style={{ opacity: 0.20 }} />
          <div className="glow-orb w-[300px] h-[300px] bottom-[-5%] left-[5%] bg-cyan-300" style={{ opacity: 0.12 }} />
        </div>
        <div className="absolute inset-0 hex-grid opacity-25" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="reveal">
            <span className="section-tag">产品服务</span>
          </div>
          <h1 className="reveal text-4xl md:text-5xl font-extrabold text-ink mb-6 mt-6 tracking-tight">
            四大业务线
          </h1>
          <p className="reveal text-lg text-ink-secondary max-w-2xl mx-auto">
            VR/AR 虚实融合 · 智慧交通 · 无人机训练软件 · AI 数字员工
          </p>

          <div className="reveal flex flex-wrap justify-center gap-2.5 mt-10">
            {products.map((p) => {
              const a = accentMap[p.accent]
              const active = activeId === p.id
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 border backdrop-blur ${
                    active
                      ? `${a.bg} ${a.text} ${a.border} scale-105 shadow-sm font-bold`
                      : `${a.border} ${a.text} bg-white/60 hover:scale-105`
                  }`}
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
            <div className={`absolute inset-0 ${isAlt ? 'dot-grid' : 'hex-grid'} opacity-25`} />
            <span className={`absolute top-8 ${isAlt ? 'right-4 md:right-16' : 'left-4 md:left-16'} text-[100px] md:text-[150px] font-extrabold leading-none pointer-events-none select-none z-0 ${a.text} opacity-[0.05]`}>
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              {product.carouselSlides ? (
                /* ── Full-width carousel layout (drone) ── */
                <div className="reveal">
                  {/* Header */}
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
                  <p className="text-ink-secondary leading-relaxed mb-10 max-w-3xl">
                    {product.desc}
                  </p>

                  {/* Full-width Carousel */}
                  <div className="mb-12">
                    <ImageCarousel
                      slides={product.carouselSlides}
                      interval={product.carouselInterval || 6000}
                    />
                  </div>

                  {/* Feature Cards — 2×2 grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {product.features.map((f) => (
                      <div key={f.title} className={`glass-card fx-border p-6 hover:-translate-y-1 rounded-2xl ${a.bg}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${a.tagBg}`}>
                          <div className={`w-3 h-3 rounded-sm ${a.dot}`} />
                        </div>
                        <h4 className="text-base font-bold text-ink mb-2">{f.title}</h4>
                        <p className="text-sm text-ink-secondary leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className={`p-6 rounded-2xl border ${a.border} ${a.bg} mb-8`}>
                    <p className="text-sm text-ink-secondary leading-relaxed">{product.highlight}</p>
                  </div>

                  {/* Scenarios */}
                  <div className="space-y-4">
                    <h4 className="text-[11px] font-semibold text-ink-muted uppercase tracking-[0.15em]">应用场景</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {product.scenarios.map((s) => (
                        <div key={s.title} className={`p-5 rounded-xl border ${a.border} bg-white/40 backdrop-blur-sm`}>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
                            <span className="text-sm font-semibold text-ink">{s.title}</span>
                          </div>
                          <p className="text-xs text-ink-muted leading-relaxed">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Standard 2-column layout (other products) ── */
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

                    {/* Visual: photo for XR, SVG for others */}
                    {product.id === 'xr' ? (
                      <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200/50 bg-white/40 backdrop-blur-sm shadow-sm">
                        <img
                          src="/assets/vr-ar-showroom.jpg"
                          alt="数字展厅实景"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200/50 bg-white/40 backdrop-blur-sm">
                        <ProductIllustration type={product.id} />
                      </div>
                    )}

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
                  <div className={`reveal grid grid-cols-1 sm:grid-cols-2 gap-5 ${isAlt ? 'lg:order-1' : 'lg:order-2'}`}>
                    {product.features.map((f) => (
                      <div key={f.title} className={`glass-card fx-border p-6 hover:-translate-y-1 rounded-2xl ${a.bg}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${a.tagBg}`}>
                          <div className={`w-3 h-3 rounded-sm ${a.dot}`} />
                        </div>
                        <h4 className="text-base font-bold text-ink mb-2">{f.title}</h4>
                        <p className="text-sm text-ink-secondary leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
