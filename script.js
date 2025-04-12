document.querySelectorAll('.tab-content').forEach(content => {
  const itemCount = content.querySelectorAll('li').length
  content.setAttribute('data-count', itemCount)
})

const tabs = document.querySelectorAll('.tab-btn')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active')
    })

    tab.classList.add('active')
    const tabId = tab.getAttribute('data-tab')
    document.getElementById(tabId).classList.add('active')
  })
})