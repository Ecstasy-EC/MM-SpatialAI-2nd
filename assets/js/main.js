// Renders the page from the data in config.js. No dependencies.

const $ = id => document.getElementById(id)

function initials(name) {
  return name.split(/\s+/).map(w => w[0]).filter(c => /[A-Za-zÀ-ž]/.test(c)).slice(0, 2).join('').toUpperCase()
}

function link(text, url) {
  return url ? `<a href="${url}" target="_blank" rel="noopener">${text}</a>` : text
}

// Photo with an initials fallback, so missing images never show as broken.
function avatar(name, photo) {
  return `
    <div class="avatar">
      <span class="avatar-initials">${initials(name)}</span>
      ${photo ? `<img src="${photo}" alt="${name}" loading="lazy" onerror="this.remove()">` : ''}
    </div>`
}

function personCard(name, photo, position, affiliation, homepage, badge, width = 'is-one-quarter-desktop') {
  return `
    <div class="column is-half-mobile is-one-third-tablet ${width}">
      <div class="person">
        ${avatar(name, photo)}
        <p class="person-name">${link(name, homepage)}</p>
        <p class="person-meta">${position}</p>
        <p class="person-meta">${affiliation}</p>
        ${badge ? `<span class="tag is-danger is-light mt-1">${badge}</span>` : ''}
      </div>
    </div>`
}

function renderHero() {
  const w = workshop
  $('edition').textContent = `${w.edition} · ${w.short_name}`
  $('workshop-title').textContent = w.title
  $('conf-line').innerHTML = `${link(w.conference, w.conference_url)} &middot; ${w.location}`
  $('meta-line').innerHTML = [w.date, w.time, w.room, w.format].filter(Boolean).join(' &middot; ')
  if (w.conference_logo) {
    $('edition').insertAdjacentHTML('beforebegin',
      `<img class="conf-logo" src="${w.conference_logo}" alt="${w.conference}" onerror="this.remove()">`)
  }

  if (announcement) {
    $('announcement').innerHTML = `<div class="notification is-warning is-light announcement">${announcement}</div>`
  }

  const buttons = [
    ['Program', '#schedule', 'fa-regular fa-calendar', 'is-dark'],
    ['Call for Papers', '#cfp', 'fa-solid fa-file-lines', 'is-dark'],
    ['Hilti Challenge', '#challenge', 'fa-solid fa-trophy', 'is-dark'],
  ]
  if (w.submission_url) buttons.push(['Submit on OpenReview', w.submission_url, 'fa-solid fa-upload', 'is-link'])
  if (w.online_url) buttons.push(['Join Online', w.online_url, 'fa-solid fa-video', 'is-danger'])

  $('hero-buttons').innerHTML = buttons.map(([label, href, icon, cls]) => `
    <a href="${href}" class="button is-rounded ${cls}" ${href.startsWith('#') ? '' : 'target="_blank" rel="noopener"'}>
      <span class="icon"><i class="${icon}"></i></span><span>${label}</span>
    </a>`).join('')
}

function renderOverview() {
  $('overview-text').innerHTML = overview.map(p => `<p>${p}</p>`).join('')
  $('cases').innerHTML = cases.map(([id, title, text, icon]) => `
    <div class="column is-one-third">
      <div class="box case-card">
        <p class="case-head"><i class="fa-solid ${icon}"></i></p>
        <p class="case-title">${title}</p>
        <p class="case-text">${text}</p>
      </div>
    </div>`).join('')
  $('questions').innerHTML = questions.map(([id, title, text], i) => `
    <div class="column is-half">
      <div class="question">
        <span class="q-id">${i + 1}</span>
        <div><p class="q-title">${title}</p><p>${text}</p></div>
      </div>
    </div>`).join('')
}

function renderPeople() {
  $('speaker-list').innerHTML = Object.values(speakers)
    .map(s => personCard(s[0], s[1], s[2], s[3], s[4], s[8] ? 'Remote talk' : '', 'is-one-fifth-desktop')).join('')
  $('organizer-list').innerHTML = organizers.map(o => personCard(...o, '', 'is-one-third-desktop')).join('')
}

function renderSchedule() {
  const icons = {
    intro: 'fa-door-open', talk: 'fa-microphone', challenge: 'fa-trophy', spotlight: 'fa-bolt',
    break: 'fa-mug-hot', sponsor: 'fa-building', panel: 'fa-comments', award: 'fa-award',
  }
  let talkNo = 0
  $('schedule-note').textContent = `All times are local (${workshop.location}). Click a talk for details.`
  $('schedule-body').innerHTML = schedule.map(([type, time, title, extra]) => {
    const icon = `<i class="fa-solid ${icons[type] || 'fa-circle'} row-icon"></i>`
    if (type !== 'talk') {
      const note = extra ? `<span class="row-note">${extra}</span>` : ''
      return `<tr class="row-${type}"><td class="time">${time}</td><td>${icon}${title}${note}</td></tr>`
    }
    talkNo++
    const s = speakers[extra]
    const remote = s[8] ? ' <span class="tag is-danger is-light">Remote</span>' : ''
    const details = (s[5] || s[6] || s[7])
      ? `${s[5] ? `<p class="talk-title">${s[5]}</p>` : ''}
         ${s[6] ? `<p><strong>Abstract.</strong> ${s[6]}</p>` : ''}
         ${s[7] ? `<p><strong>Bio.</strong> ${s[7]}</p>` : ''}`
      : '<p class="has-text-grey">Talk title and abstract coming soon.</p>'
    return `
      <tr class="row-talk toggle" data-talk="${talkNo}">
        <td class="time">${time}</td>
        <td>${icon}${title}: <strong>${s[0]}</strong> <span class="has-text-grey">(${s[3]})</span>${remote}
          <span class="toggle-hint"><i class="fa-solid fa-chevron-down"></i></span></td>
      </tr>
      <tr class="talk-details" id="talk-${talkNo}" hidden><td></td><td>${details}</td></tr>`
  }).join('')

  document.querySelectorAll('tr.toggle').forEach(row => row.addEventListener('click', () => {
    const d = $(`talk-${row.dataset.talk}`)
    d.hidden = !d.hidden
    row.classList.toggle('open', !d.hidden)
  }))
}

function renderCfp() {
  const c = call_for_papers
  $('cfp-intro').innerHTML = c.intro
  $('cfp-formats').innerHTML = `<strong>Submission formats</strong><ul>${c.formats.map(f => `<li>${f}</li>`).join('')}</ul>`
  $('cfp-topics').innerHTML = c.topics.map(t => `<li>${t}</li>`).join('')
  $('cfp-submission-link').innerHTML = workshop.submission_url
    ? `Please submit via <a href="${workshop.submission_url}" target="_blank" rel="noopener">OpenReview</a>.`
    : 'Submissions will be handled through OpenReview; the link will be posted here when the call opens.'
  $('cfp-award').innerHTML = c.award
  $('dates-body').innerHTML = important_dates.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('')
}

function renderChallenge() {
  const c = challenge
  $('challenge-text').innerHTML = `<p>${c.text}</p>` +
    (c.url ? `<p class="has-text-centered"><a class="button is-rounded is-dark" href="${c.url}" target="_blank" rel="noopener">
       <span class="icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></span><span>Challenge website</span></a></p>`
           : `<p class="has-text-centered has-text-grey">${c.note}</p>`)
}

function renderFooterSections() {
  if (sponsors.length) {
    $('sponsor-list').innerHTML = sponsors.map(([name, logo, url]) => `
      <div class="column is-one-quarter has-text-centered">
        <a href="${url}" target="_blank" rel="noopener"><img class="sponsor-logo" src="${logo}" alt="${name}"></a>
      </div>`).join('')
  } else {
    $('sponsors').remove()
  }
  $('previous-editions').innerHTML = previous_editions.map(([t, u]) => `<p>${link(t, u)}</p>`).join('')
  $('contact-text').innerHTML = `<p>For questions, please contact
    <a href="mailto:${workshop.contact_email}">${workshop.contact_email}</a>.</p>`
}

function initNavbar() {
  const burger = document.querySelector('.navbar-burger')
  const menu = $(burger.dataset.target)
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active')
  })
  menu.querySelectorAll('.navbar-item').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('is-active')
    menu.classList.remove('is-active')
  }))
}

document.addEventListener('DOMContentLoaded', () => {
  document.title = `${workshop.short_name.split(' ')[0]} Workshop @ ${workshop.conference}`
  renderHero()
  renderOverview()
  renderPeople()
  renderSchedule()
  renderCfp()
  renderChallenge()
  renderFooterSections()
  initNavbar()
})
