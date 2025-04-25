const fs = require("fs");

function leerPeliculas() {
  const contenido = fs.readFileSync(__dirname + "/pelis.json", "utf-8");
  return JSON.parse(contenido);
}

function getAll() {
  return leerPeliculas();
}

function sortBy(prop) {
  const pelis = leerPeliculas();
  return pelis.sort((a, b) => {
    if (typeof a[prop] === "string") {
      return a[prop].localeCompare(b[prop]);
    }
    return a[prop] - b[prop];
  });
}

function searchByTitle(text) {
  const pelis = leerPeliculas();
  return pelis.filter((p) =>
    p.title.toLowerCase().includes(text.toLowerCase())
  );
}

function filterByTag(tag) {
  const pelis = leerPeliculas();
  return pelis.filter((p) => p.tags.includes(tag));
}

module.exports = {
  getAll,
  sortBy,
  searchByTitle,
  filterByTag,
};
