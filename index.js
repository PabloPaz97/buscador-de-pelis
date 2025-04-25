const pelis = require("./pelis");

function main() {
  const args = process.argv.slice(2); // ejemplo: ["--sort", "title"]

  if (args.length === 0) {
    console.log(pelis.getAll());
    return;
  }

  if (args.includes("--sort")) {
    const prop = args[args.indexOf("--sort") + 1];
    console.log(pelis.sortBy(prop));
  }

  if (args.includes("--search")) {
    const palabra = args[args.indexOf("--search") + 1];
    console.log(pelis.searchByTitle(palabra));
  }

  if (args.includes("--tag")) {
    const tag = args[args.indexOf("--tag") + 1];
    console.log(pelis.filterByTag(tag));
  }
}

main();
