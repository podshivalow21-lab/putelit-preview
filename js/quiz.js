(function () {
  'use strict';

  var QUESTIONS = [
    {
      id: 'age',
      q: 'Сколько лет ребёнку?',
      opts: [
        { t: '6–8 лет', v: 'young', w: { family: 1 } },
        { t: '9–11 лет', v: 'mid', w: { it: 1, roblox: 1 } },
        { t: '12–14 лет', v: 'teen', w: { it: 1, roblox: 1 } },
        { t: '15–16 лет', v: 'older', w: { it: 2 } }
      ]
    },
    {
      id: 'interest',
      q: 'Что сейчас интереснее всего?',
      opts: [
        { t: 'Игры и миры в Roblox', v: 'roblox', w: { roblox: 3 } },
        { t: 'Программирование / сайты / Python', v: 'it', w: { it: 3 } },
        { t: 'Заниматься вместе с родителем', v: 'family', w: { family: 3 } },
        { t: 'Пока не знаю — хочу попробовать', v: 'explore', w: { it: 1, roblox: 1, family: 1 } }
      ]
    },
    {
      id: 'format',
      q: 'Какой формат удобнее?',
      opts: [
        { t: 'Онлайн, из дома', v: 'online', w: { it: 1, roblox: 1 } },
        { t: 'Группы / офлайн рядом', v: 'group', w: { it: 1, family: 1 } },
        { t: '1:1 с ментором', v: 'mentor', w: { it: 2, roblox: 1 } },
        { t: 'Семейные вечера / короткие модули', v: 'family_fmt', w: { family: 3 } }
      ]
    },
    {
      id: 'goal',
      q: 'Какая цель на ближайшие месяцы?',
      opts: [
        { t: 'Сделать свою игру / мир', v: 'game', w: { roblox: 3 } },
        { t: 'Понять код и логику', v: 'code', w: { it: 3 } },
        { t: 'Провести время вместе без давления', v: 'bond', w: { family: 3 } },
        { t: 'Подготовить к IT-интересу в школе', v: 'school', w: { it: 2, family: 1 } }
      ]
    },
    {
      id: 'pace',
      q: 'Какой темп комфортен?',
      opts: [
        { t: 'Мягкий старт, без гонки', v: 'soft', w: { family: 2, it: 1 } },
        { t: 'Интенсивно, с проектами', v: 'intense', w: { it: 2, roblox: 2 } },
        { t: 'Игровой формат важнее теории', v: 'play', w: { roblox: 3 } },
        { t: 'Короткие сессии 1–2 раза в неделю', v: 'short', w: { family: 2, it: 1 } }
      ]
    },
    {
      id: 'budget',
      q: 'Что важно при выборе школы?',
      opts: [
        { t: 'Пробный урок / демо', v: 'demo', w: { it: 1, roblox: 1, family: 1 } },
        { t: 'Возрастная группа «в точку»', v: 'agefit', w: { family: 1, it: 1 } },
        { t: 'Ментор и обратная связь', v: 'feedback', w: { it: 2, roblox: 1 } },
        { t: 'Понятная цена и без давления', v: 'price', w: { family: 2 } }
      ]
    }
  ];

  var RESULTS = {
    it: {
      title: 'IT-курсы',
      lead: 'Похоже, лучше стартовать с программирования: Python, логика, первые проекты.',
      guide: 'guides/scratch-ili-python.html',
      guideLabel: 'Scratch или Python',
      cards: [
        {
          name: 'Skillbox Kids',
          tag: 'IT',
          age: '7–17',
          text: 'Онлайн IT: код, игры, дизайн. Удобно сравнивать с другими школами.',
          cps: 'пример CPS · ~16% (Saleads) · не live-аналитика',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=skillbox-kids',
          erid: 'PLACEHOLDER'
        },
        {
          name: 'CODDY',
          tag: 'IT',
          age: '4–16',
          text: 'Группы и офлайн/онлайн — если важен формат рядом с домом.',
          cps: 'пример UI · ставка в кабинете партнёрки',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=coddy',
          erid: 'PLACEHOLDER'
        },
        {
          name: 'ProgKids',
          tag: 'IT · ментор',
          age: '7–17',
          text: 'Индивидуальный формат с ментором — если нужен темп «под ребёнка».',
          cps: 'пример CPS · фикс в обзорах САЛИД · сверять кабинет',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=progkids',
          erid: 'PLACEHOLDER'
        }
      ]
    },
    roblox: {
      title: 'Roblox / игротворчество',
      lead: 'Ребёнок уже «в мирах» — логичный следующий шаг: Studio, Lua, свои уровни.',
      guide: 'guides/limity-trat-v-roblox.html',
      guideLabel: 'Лимиты трат в Roblox',
      cards: [
        {
          name: 'ProgKids',
          tag: 'Roblox',
          age: '7–17',
          text: 'Roblox и смежные треки с ментором — частый выбор после «просто играю».',
          cps: 'пример CPS · сверять кабинет САЛИД',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=progkids',
          erid: 'PLACEHOLDER'
        },
        {
          name: 'Skillbox Kids',
          tag: 'Roblox · IT',
          age: '7–17',
          text: 'Курсы по играм (Roblox/Minecraft и др.) внутри большого бренда.',
          cps: 'пример CPS · ~16% · не live-аналитика',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=skillbox-kids',
          erid: 'PLACEHOLDER'
        },
        {
          name: 'Rocket Tech',
          tag: 'IT · игры',
          age: '5–17',
          text: 'Программирование и цифровое творчество; есть пробный урок.',
          cps: 'пример · фикс + CPL на САЛИД · UI-плейсхолдер',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=rocket-tech',
          erid: 'PLACEHOLDER'
        }
      ]
    },
    family: {
      title: 'Семейный формат',
      lead: 'Вам важнее совместный темп и спокойный вход — семейные и мягкие курсы.',
      guide: 'guides/onlayn-vs-ochno.html',
      guideLabel: 'Онлайн или очно',
      cards: [
        {
          name: 'ЭкоФэмилиСкул',
          tag: 'Семья',
          age: 'семья',
          text: 'Семейные образовательные форматы — смотрите актуальные модули у школы.',
          cps: 'пример UI · оффер через партнёрки · сверять кабинет',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=ecofamily',
          erid: 'PLACEHOLDER'
        },
        {
          name: 'Ukids',
          tag: 'Семья · дети',
          age: 'дошкольники+',
          text: 'Детские курсы с понятным входом для родителей.',
          cps: 'пример · фикс на САЛИД в обзорах · не live',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=ukids',
          erid: 'PLACEHOLDER'
        },
        {
          name: 'Ахмадуллин',
          tag: 'Развитие',
          age: 'дети',
          text: 'Развивающие курсы — сравнивайте возраст и нагрузку перед записью.',
          cps: 'пример UI · партнёрская ссылка-плейсхолдер',
          href: 'https://example.com/?erid=PLACEHOLDER&partner=ahmadullin',
          erid: 'PLACEHOLDER'
        }
      ]
    }
  };

  var root = document.getElementById('quiz-app');
  if (!root) return;

  var state = { step: 0, answers: {}, scores: { it: 0, roblox: 0, family: 0 } };

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function recomputeScores() {
    state.scores = { it: 0, roblox: 0, family: 0 };
    QUESTIONS.forEach(function (qq) {
      var ans = state.answers[qq.id];
      if (!ans) return;
      var found = null;
      for (var i = 0; i < qq.opts.length; i++) {
        if (qq.opts[i].v === ans) { found = qq.opts[i]; break; }
      }
      if (found && found.w) {
        Object.keys(found.w).forEach(function (k) {
          state.scores[k] = (state.scores[k] || 0) + found.w[k];
        });
      }
    });
  }

  function winner() {
    var best = 'it';
    var max = -1;
    ['it', 'roblox', 'family'].forEach(function (k) {
      if (state.scores[k] > max) { max = state.scores[k]; best = k; }
    });
    if (state.answers.age === 'young' && best === 'it') {
      if ((state.scores.family || 0) >= (state.scores.it || 0) - 1) best = 'family';
    }
    return best;
  }

  function renderQuestion() {
    var q = QUESTIONS[state.step];
    if (!q) { renderResult(); return; }
    var html = '';
    html += '<div class="quiz-box" role="group" aria-labelledby="quiz-q">';
    html += '<div class="quiz-progress">Вопрос ' + (state.step + 1) + ' / ' + QUESTIONS.length + '</div>';
    html += '<h2 class="quiz-q" id="quiz-q">' + escapeHtml(q.q) + '</h2>';
    html += '<div class="quiz-opts">';
    q.opts.forEach(function (o, i) {
      var sel = state.answers[q.id] === o.v ? ' is-selected' : '';
      html += '<button type="button" class="quiz-opt' + sel + '" data-v="' + escapeHtml(o.v) + '" data-i="' + i + '">' + escapeHtml(o.t) + '</button>';
    });
    html += '</div>';
    html += '<div class="quiz-nav">';
    if (state.step > 0) {
      html += '<button type="button" class="btn btn-ghost" data-act="back">← Назад</button>';
    } else {
      html += '<span></span>';
    }
    html += '</div></div>';
    root.innerHTML = html;

    root.querySelectorAll('.quiz-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-i'), 10);
        var opt = q.opts[idx];
        if (!opt) return;
        state.answers[q.id] = opt.v;
        recomputeScores();
        if (state.step < QUESTIONS.length - 1) {
          state.step += 1;
          renderQuestion();
          root.focus({ preventScroll: true });
          try { window.scrollTo({ top: Math.max(0, root.getBoundingClientRect().top + window.scrollY - 80), behavior: 'smooth' }); } catch (e) {}
        } else {
          renderResult();
        }
      });
    });
    var back = root.querySelector('[data-act="back"]');
    if (back) {
      back.addEventListener('click', function () {
        if (state.step > 0) {
          state.step -= 1;
          renderQuestion();
        }
      });
    }
  }

  function renderResult() {
    var key = winner();
    var r = RESULTS[key] || RESULTS.it;
    var html = '<div class="quiz-result is-on">';
    html += '<div class="quiz-disclaimer" role="note">';
    html += '<strong>Важно.</strong> Результат — ориентир, не диагноз и не рекомендация «купить курс». ';
    html += 'Карточки ниже — <em>пример UI</em> с партнёрскими плейсхолдерами (<code>erid=PLACEHOLDER</code>). ';
    html += 'Путелит не школа и не получает оплату за обучение. Подробнее — <a href="offer.html">оферта / дисклеймер</a>.';
    html += '</div>';
    html += '<figure class="mascot mascot--result"><img src="assets/mascot/compass-celebrate.jpg" alt="Компас — маскот Путелит" width="96" height="96" /></figure>';
    html += '<span class="label">результат</span>';
    html += '<p class="result-dir">' + escapeHtml(r.title) + '</p>';
    html += '<p class="sub" style="margin-bottom:28px">' + escapeHtml(r.lead) + '</p>';
    html += '<div class="cards">';
    r.cards.forEach(function (c, idx) {
      var best = idx === 0 ? ' card--best' : '';
      var btn = idx === 0 ? 'btn btn-primary' : 'btn btn-ghost';
      var erid = c.erid || 'PLACEHOLDER';
      html += '<article class="card' + best + '">';
      html += '<div class="card-top"><span class="card-tag">' + escapeHtml(c.tag) + '</span><span class="card-age">' + escapeHtml(c.age) + '</span></div>';
      html += '<p class="card-erid">Реклама · erid=' + escapeHtml(erid) + '</p>';
      html += '<h3>' + escapeHtml(c.name) + '</h3>';
      html += '<p>' + escapeHtml(c.text) + '</p>';
      html += '<p class="card-cps">' + escapeHtml(c.cps) + '</p>';
      html += '<a class="' + btn + '" href="' + escapeHtml(c.href) + '" rel="sponsored noopener nofollow" target="_blank">Смотреть школу →</a>';
      html += '</article>';
    });
    html += '</div>';
    html += '<div class="hero-ctas" style="margin-top:32px">';
    html += '<a class="btn btn-ghost" href="catalog.html">Весь каталог →</a>';
    if (r.guide) {
      html += '<a class="btn-line" href="' + escapeHtml(r.guide) + '">' + escapeHtml(r.guideLabel || 'Гайд') + '</a>';
    }
    html += '<a class="btn-line" href="guides/kak-vybrat-shkolu.html">Как выбрать школу</a>';
    html += '<button type="button" class="btn btn-ghost" data-act="restart">Пройти снова</button>';
    html += '</div>';
    html += '<p class="soon-note" style="margin-top:20px">Скоро бот @putelit_bot · пока не запущен</p>';
    html += '<p class="cps-note" style="margin-top:12px">Партнёрские ссылки — плейсхолдеры (erid=PLACEHOLDER). Цифры CPS — пример UI, не live-аналитика.</p>';
    html += '</div>';
    root.innerHTML = html;
    var restart = root.querySelector('[data-act="restart"]');
    if (restart) {
      restart.addEventListener('click', function () {
        state = { step: 0, answers: {}, scores: { it: 0, roblox: 0, family: 0 } };
        renderQuestion();
        try {
          window.scrollTo({ top: Math.max(0, root.getBoundingClientRect().top + window.scrollY - 80), behavior: 'smooth' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      });
    }
  }

  // make root focusable for a11y after step change
  if (!root.hasAttribute('tabindex')) root.setAttribute('tabindex', '-1');
  renderQuestion();
})();
