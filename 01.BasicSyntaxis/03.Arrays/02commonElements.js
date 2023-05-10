function commonElements(arrOne, arrTwo) {

    for (const elementOne of arrOne) {

        for (const elementTwo of arrTwo) {
         if( elementOne === elementTwo) {
            console.log(elementOne);
         }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);