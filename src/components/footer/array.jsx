function createObject(name, lastname, img) {
  const personas = {
    name,
    lastname,
    img,
    hash: name.length * subs,

    getStatus: function () {
      // <- método
      return `el canal ${name} tiene ${subs}`;
    },
  };
  return personas;
}
const gordito = createObject("name", 10000000);
console.log(gordito.getStatus());
