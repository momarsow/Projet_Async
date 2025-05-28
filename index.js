//TACHE 01:
// Fonction pour attendre un certain temps
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Fonction principale demandée
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await wait(1000); // 1000 ms = 1 seconde
  }
}

// Exemple d'appel
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

//TACHE 02:
// Fonction qui simule un appel d'API (simulé avec setTimeout)
function simulateAPICall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Données récupérées depuis l'API" });
    }, 2000); // 2 secondes de délai
  });
}

// Fonction principale demandée
async function awaitCall() {
  const result = await simulateAPICall();
  console.log(result);
}

// Appel de la fonction
awaitCall();

//TACHE 03:
// Fonction qui simule un appel d'API avec possibilité d'erreur
function simulateAPICall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50% de chance de succès
      if (success) {
        resolve({ data: "Données récupérées depuis l'API" });
      } else {
        reject(new Error("Échec de l'appel API"));
      }
    }, 2000);
  });
}

// Fonction principale demandée avec gestion des erreurs
async function awaitCall() {
  try {
    const result = await simulateAPICall();
    console.log(result);
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de l'appel API :",
      error.message
    );
  }
}

// Appel de la fonction
awaitCall();
