# Todo List

JavaScript ile DOM manipülasyonu ve event handling pratiği olarak geliştirdiğim interaktif bir görev listesi uygulaması.

## Canlı Demo
https://ssb-dvlpr.github.io/todo-list-js/

## Kullanılan Teknolojiler
- HTML5
- JavaScript (vanilla — kütüphane kullanılmadı)
- Tailwind CSS (Vite ile kurulum)

## Özellikler
- Görev ekleme (buton veya Enter tuşu ile)
- Görev silme
- Boş görev girişini engelleyen validasyon
- Kullanıcıya anlık durum/hata mesajları

## Öğrendiklerim
- `document.createElement()` ile dinamik olarak HTML elemanı oluşturma
- `addEventListener()` ile click ve keydown olaylarını yönetme
- `classList` ve `className` ile dinamik stil verme
- Basit form validasyonu (`.trim()` ile boş/boşluklu girişleri engelleme)
- Event listener'ları doğru elemana (silinecek öğenin kendisine) bağlama

## Not
Veri kalıcı değildir — sayfa yenilendiğinde liste sıfırlanır. Kalıcı veri saklama (localStorage) roadmap'imde ileride ele alacağım bir konu.

## İlgili Projelerim
- [Dashboard UI (saf CSS ile)](https://ssb-dvlpr.github.io/dashboard-grid-pratick/)
- [Kişisel Tanıtım Sayfası (Tailwind ile)](https://ssb-dvlpr.github.io/tailwind-tanitim-sayfam/)
