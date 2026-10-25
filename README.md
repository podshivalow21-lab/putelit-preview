# Путелит (putelit.ru) — статический сайт

Русскоязычный SEO-гид для родителей: IT-, Roblox- и семейные курсы для детей.  
**Не школа** — сравнение + квиз + партнёрские CTA.

Дизайн: Chrysolite DNA (тёмный тёплый `#17120C` + янтарь `#FFAA00` + IBM Plex Mono/Sans через системный стек).  
Без Google Fonts / Analytics / GTM / Maps. Только плейсхолдер под Яндекс.Метрику.

## Как открыть локально

Сборка не нужна. Относительные пути.

```bash
# вариант 1 — просто открыть файл
xdg-open /workspace/putelit-site/index.html

# вариант 2 — локальный сервер
cd /workspace/putelit-site
python3 -m http.server 8080
# затем http://127.0.0.1:8080/
```

Архив для передачи: `/workspace/putelit-site.zip` (пересобирается через Python `zipfile`).

## Структура

```
putelit-site/
  index.html
  catalog.html          # секции IT / Roblox / семья
  quiz.html
  about.html
  privacy.html          # черновик 152-ФЗ · плейсхолдеры [ФИО/ИНН самозанятого] [email]
  offer.html            # оферта / дисклеймер · те же плейсхолдеры
  contacts.html
  sitemap.xml
  robots.txt
  guides/
    roblox-dlya-roditeley.html
    limity-trat-v-roblox.html
    it-kursy-detyam.html
    scratch-ili-python.html
    kak-vybrat-shkolu.html
    onlayn-vs-ochno.html
  css/main.css
  js/main.js
  js/quiz.js            # дисклеймер + erid-плейсхолдеры на результате
  assets/
    chrysolite-*.png     # OG / hero placeholders
    mascot/              # Компас — маскот-енот Путелит
      compass-hero.jpg
      compass-avatar.jpg
      compass-think.jpg
      compass-map.jpg
      compass-celebrate.jpg
      … (wave, point, thumbsup, base)
  README.md
  NOTES-PARTNERS-RISKS.md
```

## Маскот

**Компас** — енот-маскот Путелит. Картинки в `assets/mascot/`.  
На главной — hero-портрет, в квизе/каталоге — компактный круглый кадр, в шапке — avatar рядом с «Путелит».

## Гайды

Длинные материалы (около 1200+ слов) с партнёрским дисклеймером и перекрёстными ссылками:

| Файл | Тема |
|------|------|
| limity-trat-v-roblox.html | Лимиты Robux, разговор о деньгах |
| scratch-ili-python.html | Scratch vs Python по возрасту |
| onlayn-vs-ochno.html | Онлайн / очный формат |
| + три более коротких | Roblox для родителей, IT-курсы, как выбрать школу |

## Масштабирование кода

Сейчас: чистый static multi-page HTML + общие css/main.css и js/*.js.

Дальше:

1. Добавлять гайды в /guides/ по тому же шаблону.
2. Держать стили общими.
3. При росте страниц — SSG (Eleventy / Hugo) или визуал на Tilda.
4. Квиз остаётся на vanilla JS.

## Деплой

| Вариант | Когда |
|---------|--------|
| Static hosting (Nginx, Timeweb, Beget…) | Залить папку как есть |
| Tilda | Если нужен визуальный редактор; этот репо — эталон DNA |
| SSG позже | Когда больше 15–20 страниц |

Перед продом:

- Заменить erid=PLACEHOLDER и https://example.com/... на реальные партнёрские ссылки.
- Вставить код Яндекс.Метрики (комментарий в конце каждой страницы).
- Заполнить `[ФИО/ИНН самозанятого]` и `[email]` в privacy.html, offer.html, contacts.html.
- Проверить sitemap.xml / robots.txt на боевом домене.

## Бренд

- Название: **Путелит**
- Домены: putelit.ru · путелит.рф
- Бот: «Скоро @putelit_bot» — UI disabled, бот **не** заявлен как живой

## Юр. пометки

На каждой странице — партнёрский дисклеймер в футере.  
offer.html и privacy.html — **черновики**, не замена консультации юриста.  
Личные данные владельца в шаблонах не выдуманы — только плейсхолдеры.

## Пересборка zip

Из корня workspace:

python3 -c "from pathlib import Path; import zipfile; root=Path('/workspace/putelit-site'); out=Path('/workspace/putelit-site.zip');
z=zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED);
[z.write(p, arcname=str(Path('putelit-site')/p.relative_to(root))) for p in sorted(root.rglob('*')) if p.is_file()];
z.close(); print(out, out.stat().st_size)"
