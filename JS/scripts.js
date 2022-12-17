function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,fr'
    }, 'google_translate_element');
  }
  /************ https://codepen.io/arnedecant/pen/OeZJqQ arne decant **************/
  const progressbar = document.querySelector('progress');
  let isScrolling = false;
  document.addEventListener('scroll', e => isScrolling = true);
  render();

  function render() {
    requestAnimationFrame(render);
    if (!isScrolling) return;
    progressbar.value = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100;
    isScrolling = false;
  }