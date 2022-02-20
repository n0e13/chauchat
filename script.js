let cargador = Math.floor(Math.random() * 400);

console.log(cargador);

function chauchat (numDisparos) {
  for (let i=0; i < numDisparos; i++) { 
    let pillada = Math.floor(Math.random() * 100);
    if(pillada < 80){
      console.log("Illo, me he quedao pillá!");
      break;
    }
    if (i%4==0) {
      console.log(" ");
    } else {
      console.log("pium!");
    }
  } 
}

chauchat(cargador);