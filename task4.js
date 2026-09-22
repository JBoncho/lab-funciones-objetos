const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// ¡Escribe tu código debajo de esta línea!

for (let i=0; i<=arr.length;i++){
    for (let j=i+1; j<arr.length;j++){
        if (arr[i]===arr[j]){
            arr.splice(j,1);
        }
    }
}


// ¡Escribe tu código encima de esta línea!

arr.forEach(element => console.log(element))