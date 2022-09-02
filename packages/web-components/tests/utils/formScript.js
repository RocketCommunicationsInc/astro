const log = document.getElementById('log')
const forms = document.querySelectorAll('form')

for (const form of forms) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // trigger formdata event
        new FormData(form)
    })

    form.addEventListener('formdata', logFormData)
}

function logFormData(e) {
    const status = document.getElementById('status')
    log.innerHTML = ''
    // Get the form data from the event object
    let data = e.formData
    const values = data.values()
    for (var value of data.entries()) {
        const item = document.createElement('li')
        item.innerHTML = `<strong>${value[0]}:</strong>${value[1]}`
        log.appendChild(item)
    }
}
