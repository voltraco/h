module.exports = (s, ...args) => {
  const el = document.createElement(s.match(/^\w+/) || 'div')
  const attrs = s.match(/\[(.*?)\]/g)

  if (attrs) {
    attrs.map(s => s.slice(1, -1).split('='))
    .forEach(pair => el.setAttribute(pair[0], pair[1] || true))
    s = s.replace(/\[[^\]]*\]/g, '')
  }

  const matches = s.match(/\W\w+[-\w]+/g)

  matches && matches.forEach(m => m[0] === '#'
    ? el.setAttribute('id', m.slice(1))
    : el.classList.add(m.slice(1)))

  args.forEach(arg => {
    if (!(arg instanceof window.HTMLElement)) {
      arg = document.createTextNode(String(arg))
    }

    el.appendChild(arg)
  })

  return el
}
