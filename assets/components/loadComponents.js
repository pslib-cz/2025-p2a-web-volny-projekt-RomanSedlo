import './navbar.css';
import './footer.css';
async function loadComponent(selector, path) {
  const html = await fetch(path).then(part => part.text());
  document.querySelector(selector).innerHTML = html;
}
await loadComponent('#navbar', import.meta.env.BASE_URL + '/src/components/navbar.html');
await loadComponent('#footer', import.meta.env.BASE_URL + '/src/components/footer.html');