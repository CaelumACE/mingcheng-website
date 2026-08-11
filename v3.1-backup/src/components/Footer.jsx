import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold tracking-wide">
              <span className="text-gradient">铭澄</span>
              <span className="text-ink-muted text-lg ml-1.5 font-semibold">互动</span>
            </div>
            <p className="mt-4 text-sm text-ink-secondary leading-relaxed">
              北京铭澄互动科技有限公司<br />
              虚实融合，智创未来
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ink text-sm font-semibold mb-4 uppercase tracking-wider">快速导航</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-ink-secondary hover:text-brand-600 transition-colors">关于我们</Link></li>
              <li><Link to="/products" className="text-ink-secondary hover:text-brand-600 transition-colors">产品服务</Link></li>
              <li><Link to="/contact" className="text-ink-secondary hover:text-brand-600 transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ink text-sm font-semibold mb-4 uppercase tracking-wider">联系方式</h4>
            <ul className="space-y-2.5 text-sm text-ink-secondary">
              <li>电话：18610142706</li>
              <li>邮箱：18610142706@163.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-xs text-ink-muted">
          <p>&copy; {new Date().getFullYear()} 北京铭澄互动科技有限公司. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
