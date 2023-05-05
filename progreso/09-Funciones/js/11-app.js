// Parametros en un arrow Function...

// Parametros
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo("JavaScript");

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo1 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo1("Html");

// multiples parametros si requieren parentesis
const aprendiendo2 = (tecn1, tecn2) =>
  console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo2("React", "Node");
