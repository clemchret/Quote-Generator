const getQuote = async() => {
    //Récupération des données
    const response = await fetch('https://type.fit/api/quotes');
    //Attente de la réponse et sa conversion en json
    const allQuotes = await response.json();

    //Génération d'un nombre entre 0 et la longueur du tableau des doonnées
    let selectectedQuote = Math.floor(Math.random()*allQuotes.length);
    //Juste pour moi vérifier
    console.log(`Indexe de la citation : ${selectectedQuote}`);
    
    //Stockage des éléments du DOM
    let quoteDiv = document.querySelector('.quote');
    let authorDiv = document.querySelector('.author');

    //Insertion de la citation
    quoteDiv.innerText = (`${allQuotes[selectectedQuote].text}`);

    //Insertion de l'auteur en tenant compte des cas où il ne serait pas renseigné
    let author = allQuotes[selectectedQuote].author;
    if(author === null){
        authorDiv.innerText = "Anonymous";
    }else{
        authorDiv.innerText = author;
    }

}

//Écouteur d'évènement click sur le boutton
document.getElementById('generate').addEventListener('click', getQuote);

