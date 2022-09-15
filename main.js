const input = document.querySelector('input')

function stringGenerator() {
    var randomString = Math.random().toString(36).slice(-15)

    input.value = randomString
}

function copyCLipboard() {
    navigator.clipboard.writeText(input.value).then(() => {
        alert('Copiado para clipboard')
    })
}