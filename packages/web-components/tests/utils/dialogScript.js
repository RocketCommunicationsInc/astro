const toggleBtn = document.getElementById('toggle')
const testDialog = document.querySelector('rux-dialog')

toggleBtn.addEventListener('click', () => {
    console.log('heard btn click!')

    testDialog.open = !testDialog.open
})
