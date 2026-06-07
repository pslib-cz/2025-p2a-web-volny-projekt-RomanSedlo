document.addEventListener('DOMContentLoaded', async () => {
    async function loadComponent(selector, path) {
        const html = await fetch(path).then(part => part.text());
        document.querySelector(selector).innerHTML = html;
    }
    if(document.querySelector('#navbar') || document.querySelector('#footer')) {
        await loadComponent('#navbar', '../assets/components/navbar.html');
        await loadComponent('#footer', '../assets/components/footer.html');
    }

    document.querySelector(".menu__button").addEventListener('click', () => {
        document.querySelector(".nav--primary").classList.toggle("visible")
        document.querySelector(".menu__button").classList.toggle("menu__button--visible")
    })
})
