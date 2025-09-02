document.addEventListener('DOMContentLoaded', () => {
  const widgetBtn = document.getElementById('widget-btn');
  const widgetMenu = document.getElementById('widget-menu');
  const toggleContrast = document.getElementById('toggle-contrast');
  const toggleText = document.getElementById('toggle-text');
  const moveWidget = document.getElementById('move-widget');
  const widget = document.getElementById('access-widget');
  const sections = document.querySelectorAll('.section');

  // Estados salvos
  let contrastOn = localStorage.getItem('contrast') === 'true';
  let textOn = localStorage.getItem('text') === 'true';
  let positionRight = localStorage.getItem('widgetRight') !== 'false';

  document.body.classList.toggle('contrast', contrastOn);
  document.body.classList.toggle('large-text', textOn);
  if(!positionRight){
    widget.style.right = '';
    widget.style.left = '20px';
  }

  // Fade-in das seções animadas
  const fadeInSections = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
      if(section.getBoundingClientRect().top < trigger){
        section.classList.add('show');
      }
    });
  };
  fadeInSections();
  window.addEventListener('scroll', fadeInSections);

  // Abrir/fechar menu do widget
  widgetBtn.addEventListener('click', () => {
    widgetMenu.style.display = widgetMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Atalho Ctrl + M
  document.addEventListener('keydown', e => {
    if(e.ctrlKey && e.key.toLowerCase() === 'm'){
      widgetMenu.style.display = widgetMenu.style.display === 'flex' ? 'none' : 'flex';
    }
  });

  // Contraste
  toggleContrast.addEventListener('click', () => {
    contrastOn = !contrastOn;
    document.body.classList.toggle('contrast', contrastOn);
    localStorage.setItem('contrast', contrastOn);
  });

  // Texto grande
  toggleText.addEventListener('click', () => {
    textOn = !textOn;
    document.body.classList.toggle('large-text', textOn);
    localStorage.setItem('text', textOn);
  });

  // Mover widget
  moveWidget.addEventListener('click', () => {
    positionRight = !positionRight;
    widget.style.right = positionRight ? '20px' : '';
    widget.style.left = positionRight ? '' : '20px';
    localStorage.setItem('widgetRight', positionRight);
  });

  // Arrastar widget
  let isDragging = false, offsetX, offsetY;
  widget.addEventListener('mousedown', e => {
    if(e.target !== widget) return;
    isDragging = true;
    offsetX = e.clientX - widget.getBoundingClientRect().left;
    offsetY = e.clientY - widget.getBoundingClientRect().top;
    widget.style.cursor = 'grabbing';
    widget.style.transition = 'none';
  });
  document.addEventListener('mousemove', e => {
    if(isDragging){
      widget.style.left = e.clientX - offsetX + 'px';
      widget.style.top = e.clientY - offsetY + 'px';
      widget.style.right = 'auto';
      widget.style.bottom = 'auto';
    }
  });
  document.addEventListener('mouseup', () => {
    if(isDragging){
      isDragging = false;
      widget.style.cursor = 'grab';
      widget.style.transition = 'all 0.2s ease';
    }
  });

  // Abrir/fechar card ao clicar com animação suave
  sections.forEach(section => {
    section.addEventListener('click', () => {
      section.classList.toggle('open');
    });
  });
});