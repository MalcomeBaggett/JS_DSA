let practice = "The dogs are outside the door";

const returnDupes = (str) => {
    let lowercased = str.toLowerCase();
    let splitted = lowercased.split(" ");
    let freq = {};
    let dupes = [];

    splitted.forEach((el) => {
        if(freq[el]) freq[el]++
        else {
            freq[el] = 1;
        }
    });
    let objKeys = Object.keys(freq);
    objKeys.forEach((el) => {
        if (freq[el] > 1) dupes.push(el);
    })

    return dupes
}

console.log(returnDupes(practice))