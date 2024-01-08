let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let i = 0; i<pronoun.length; i++){
    for (let m = 0; m<adj.length; m++){
        for (let s = 0; s<noun.length; s++){
            console.log(`${pronoun[i]}${adj[m]}${noun[s]}.com`)
    }
}

