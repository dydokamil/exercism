function DnaTranscriber() {
  this.DNAtoRNAmap = { C: 'G', G: 'C', A: 'U', T: 'A' }
}

DnaTranscriber.prototype.toRna = function(nucleotide) {
  const strand = nucleotide.split('')

  if (
    strand.some(
      (nucleotide) => !Object.keys(this.DNAtoRNAmap).includes(nucleotide),
    )
  )
    throw new Error('Invalid input')

  return strand.map((nucleotide) => this.DNAtoRNAmap[nucleotide]).join('')
}

module.exports = DnaTranscriber
