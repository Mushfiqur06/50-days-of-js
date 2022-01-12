const transcription = (dna) => {
  // code here
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "G") {
      rna += dna[i].replace("G", "C");
    } else if (dna[i] === "C") {
      rna += dna[i].replace("C", "G");
    } else if (dna[i] === "T") {
      rna += dna[i].replace("T", "A");
    } else {
      rna += dna[i].replace("A", "U");
    }
  }
  return rna;
};
console.log(transcription("GATC"));
