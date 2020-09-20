const FORM = document.querySelector('form');
const TITULO = document.querySelector('#titulo');
const DESCRIPTION = document.querySelector('#description');
const KEYWORDS = document.querySelector('#keywords');

window.addEventListener('load', () => {
    TITULO.addEventListener('keyup', setTitulo);
    DESCRIPTION.addEventListener('keyup', setDescription);
    KEYWORDS.addEventListener('keyup', setKeyword);
    FORM.autor.addEventListener('keyup', setAutor);
    FORM.appname.addEventListener('keyup', setAppName);
    FORM.tema.addEventListener('change', setTema);
    FORM.miniatura.addEventListener('keyup', setMiniatura);
    FORM.robots.addEventListener('change', setRobots);
    FORM.novasVisitas.addEventListener('change', setNovasVisitas);
    FORM.charset.addEventListener('change', setCharset);
    FORM.gerador.addEventListener('change', setGerador);


    document.execCommand('copy');
});

const setTitulo = (e) => {
    const titulo = e.target.value;
    const tituloDiv = document.querySelector('#meta-title');
    const contador = document.querySelector("#title-chars");
    tituloDiv.textContent = '';
    
    if (titulo) {
        tituloDiv.textContent = `<title>${titulo}</title>\n`;
        tituloDiv.textContent += `<meta property="og:title" content="${titulo}" />`;
    }

    contador.textContent = titulo.length;
}

const setDescription = (e) => {
    const descricao = e.target.value;
    const tituloDiv = document.querySelector('#meta-description');
    const contador = document.querySelector("#description-chars");
    tituloDiv.textContent = '';

    if (descricao) {
        tituloDiv.textContent = `<meta name="description" content="${descricao}" />\n`;
        tituloDiv.textContent += `<meta property="og:description" content="${descricao}" />`;
    }

    contador.textContent = descricao.length;
}

const setKeyword = (e) => {
    const keywords = e.target.value;
    const keywordDiv = document.querySelector('#meta-keyword');
    const contador = document.querySelector("#keywords-chars");

    keywordDiv.textContent = (keywords) ? `<meta name="keywords" content="${keywords}" />` : '';
    contador.textContent = keywords.length;
}

const setAutor = (e) => {
    const autor = e.target.value;
    const autorDiv = document.querySelector('#meta-autor');
    autorDiv.textContent = '';

    if (autor) {
        autorDiv.textContent = `<meta name="author" content="${autor}" />\n`;
        autorDiv.textContent += `<meta name="creator" content="${autor}" />\n`;
        autorDiv.textContent += `<meta name="publisher" content="${autor}" />\n`;
    }
}

const setTema = (e) => {
    const tema = e.target.value;
    const temaDiv = document.querySelector('#meta-tema');

    temaDiv.textContent = (tema) ? `<meta name="theme-color" content="${tema}" />` : '';
}

const setAppName = (e) => {
    const appName = e.target.value;
    const appnameDiv = document.querySelector('#meta-nome');
    appnameDiv.textContent = ''
    
    if (appName) {
        appnameDiv.textContent =  `<meta name="application-name" content="${appName}" />`;
        appnameDiv.textContent += `<meta property="og:site_name" content="${appName}" />`;
    }    
}

const setMiniatura = (e) => {
    const url = e.target.value;
    const miniaturaDiv = document.querySelector('#meta-miniatura');

    miniaturaDiv.textContent = (url) ? `<meta property="og:image" content="${url}" />` : '';    
}

const setRobots = (e) => {
    const robots = e.target.value;
    const robotsDiv = document.querySelector('#meta-robos');

    robotsDiv.textContent = (robots) ? `<meta name="robots" content="${robots}" />` : '';    
}

const setNovasVisitas = (e) => {
    const novasVisitas = e.target.value;
    const novasVisitasDiv = document.querySelector('#meta-visitas');

    novasVisitasDiv.textContent = (novasVisitas) ? `<meta name="revisit-after" content="${novasVisitas}" />` : '';    
}

const setCharset = (e) => {
    const charset = e.target.value;
    const charsetDiv = document.querySelector('#meta-charset');

    charsetDiv.textContent = (charset) ? `<meta http-equiv="Content-Type" content="text/html;${charset}" />` : '';    
}

const setGerador = (e) => {
    const gerador = e.target.value;
    const geradorDiv = document.querySelector('#meta-gerador');

    geradorDiv.textContent = (gerador) ? `<meta name="generator" content="${gerador}" />` : '';    
}