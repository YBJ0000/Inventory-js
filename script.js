document.querySelectorAll('.tab-content').forEach(content => {
  const itemCount = content.querySelectorAll('li').length
  content.setAttribute('data-count', itemCount)
})

