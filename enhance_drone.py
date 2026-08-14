from PIL import Image, ImageFilter, ImageEnhance
import os, re

ROOT = 'C:/Users/jx/WorkBuddy/2026-08-10-16-29-14/mingcheng-website'
d = os.path.join(ROOT, 'public/assets/drone')
jsx = os.path.join(ROOT, 'src/pages/Products.jsx')

MAX_EDGE = 2000  # 放大到最长边 2000px，兼顾清晰度与文件体积

for f in sorted(os.listdir(d)):
    if not f.lower().endswith('.jpg') or f.endswith('-x2.jpg'):
        continue
    p = os.path.join(d, f)
    im = Image.open(p).convert('RGB')
    w, h = im.size
    scale = MAX_EDGE / max(w, h)
    if scale > 1.001:
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    # 锐化增强（保真，无 AI 伪影）
    im = im.filter(ImageFilter.UnsharpMask(radius=1.5, percent=130, threshold=2))
    # 轻微对比度提升，让界面更通透
    im = ImageEnhance.Contrast(im).enhance(1.08)
    out = os.path.join(d, f[:-4] + '-x2.jpg')
    im.save(out, 'JPEG', quality=90, optimize=True)
    print(f'{f} -> {im.size}  {os.path.getsize(out)//1024}KB')

# 同步更新 Products.jsx 引用（仅对 /assets/drone/ 路径加 -x2）
s = open(jsx, encoding='utf-8').read()
s2 = re.sub(r'(/assets/drone/drone-\d{2}-[a-z-]+)\.jpg', r'\1-x2.jpg', s)
open(jsx, 'w', encoding='utf-8').write(s2)
print('Products.jsx -x2 refs:', s2.count('-x2.jpg'))
