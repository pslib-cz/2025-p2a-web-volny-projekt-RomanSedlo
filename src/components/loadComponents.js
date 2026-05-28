import './navbar.css';
import './footer.css';
async function loadComponent(selector, path) {
  const html = await fetch(path).then(part => part.text());
  document.querySelector(selector).innerHTML = html;
}
await loadComponent('#navbar', 'src/components/navbar.html');
await loadComponent('#footer', 'src/components/footer.html');