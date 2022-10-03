
let divisa1 = prompt(
  `seleccione la opcion divisa origen:\n1 - usd\n2 - clp\n3 - eur`
);
let divisa2 = prompt(
  `seleccione la opcion divisa destino:\n1 - usd\n2 - clp\n3 - eur`
);
let cantidad = parseFloat(prompt(`ingrese cantidad:`));
const valorUsdClp = 994;
const valorEurClp = 955;
const valorUsdEur = 1.04;

function usd() {
    const resultadoUsdClp = cantidad * valorUsdClp;
    if (divisa2 == "3") {
      const resultadoUsdEur = cantidad * valorUsdEur;
      return resultadoUsdEur;
    }
    return resultadoUsdClp;
  }
  totalClp = usd();
  totalEur = usd();

  function clp() {
    const resultadoClpUsd = cantidad / valorUsdClp;
    if (divisa2 == "3") {
      const resultadoClpEur = cantidad / valorEurClp;
      return resultadoClpEur;
    }
    return resultadoClpUsd;
  }

  totalClUs = clp();
  totalClEu = clp();

  function eur() {
    const resultadoEurUsd = cantidad / valorUsdEur;
    if (divisa2 == "2") {
      const resultadoEurClp = cantidad * valorEurClp;
      return resultadoEurClp;
    }
    return resultadoEurUsd;
  }

  totalErUs = eur();
  totalEucl = eur();

let repetir = false;

do {
  switch (divisa1) {
    case "1":
      if (divisa2 == "2") {
        alert(`la cantidad de clp es: ${totalClp}`);
      } else if (divisa2 == "3") {
        alert(`la cantidad de eur es: ${totalEur}`);
      } else {
        alert("no es posible hacer la conversion");
      }
      break;
    case "2":
      if (divisa2 == "1") {
        alert(`la cantidad de usd es: ${totalClUs}`);
      } else if (divisa2 == "3") {
        alert(`la cantidad de eur es: ${totalClEu}`);
      } else {
        alert("no es posible hacer la conversion");
      }
      break;
    case "3":
      if (divisa2 == "1") {
        alert(`la cantidad de usd es: ${totalErUs}`);
      } else if (divisa2 == "2") {
        alert(`la cantidad de clp es: ${totalEucl}`);
      } else {
        alert("no es posible hacer la conversion");
      }
      break;
    default:
      alert("esa no es una operacion valida");
  }
  const respuesta = prompt("desea realizar otra conversion?\n1 - si\n2 - no");
  if (respuesta == "1") {
    repetir = true;
  } else {
    repetir = false;
  }
} while (repetir);