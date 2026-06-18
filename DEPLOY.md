# Hướng dẫn Deploy lên GitHub Pages

## Lần đầu tiên

1. Tạo repository trên GitHub: `tiemlennhadev` (public)
2. Push code lên nhánh `main`
3. Vào Settings > Pages
4. Source: chọn "GitHub Actions"
5. Vào Settings > Actions > General
   Đảm bảo "Workflow permissions" được set là "Read and write permissions"
6. Push lần đầu hoặc vào Actions tab và chạy thủ công

## Sau khi setup

Mỗi lần push lên `main`, site sẽ tự động build và deploy.

URL:
https://nguyenthithuyvan-12.github.io/tiemlennhadev

## Cập nhật astro.config.mjs

Ensure astro.config.mjs uses:

site: 'https://nguyenthithuyvan-12.github.io',
base: '/tiemlennhadev',

Do not overwrite existing integrations.

## Troubleshoot

Nếu gặp lỗi 404:
Kiểm tra base có đúng là:

base: '/tiemlennhadev'

Nếu CSS không load:
Đảm bảo tất cả asset được import theo chuẩn Astro.
