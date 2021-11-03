var linkImdb = [
    "https://www.imdb.com/title/tt0265086/",
    "https://www.imdb.com/title/tt0120815/",
    "https://www.imdb.com/title/tt0133093/",
    "https://www.imdb.com/title/tt0167261/?ref_=ttls_li_tt",
    "https://www.imdb.com/title/tt0094625/"
];

var poster = [
    "https://http2.mlstatic.com/D_NQ_NP_997726-MLB26164799116_102017-O.jpg",
    "https://img.elo7.com.br/product/original/2BED997/quadro-poster-com-moldura-o-resgate-do-soldado-ryan-presente-dia-dos-namorados.jpg",
    "https://img.elo7.com.br/product/zoom/2679A17/big-poster-filme-matrix-lo02-tamanho-90x60-cm-poster-de-filme.jpg",
    "https://img.elo7.com.br/product/zoom/26927C9/poster-o-senhor-dos-aneis-as-duas-torres-lo01-tam-90x60-cm-presente-geek.jpg",
    "https://img.rnudah.com/images/98/989929103103297.jpg"
];

for (var i = 0; i < linkImdb.length; i++) {
    document.write("<a href=" + "'" + linkImdb[i] + "'" + " target='_blank'><figure class='teste'>" + "<img src=" + poster[i] + "></figure></a>");
}