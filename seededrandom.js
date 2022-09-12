
function jsf32(a, b, c, d) {
  a |= 0; b |= 0; c |= 0; d |= 0;
  var t = a - (b << 27 | b >>> 5) | 0;
  a = b ^ (c << 17 | c >>> 15);
  b = c + d | 0;
  c = d + t | 0;
  d = a + t | 0;
  return (d >>> 0) / 4294967296;
}

Math.random = function() {
Math.randSeed+=73;
return(jsf32(Math.randSeed,Math.randSeed+671,Math.randSeed+1889,Math.randSeed+56781))
}

Math.setSeed = function(seed){
Math.randSeed=seed;
}

var origRandom = Math.random;
Math.randSeed = Math.floor(Date.now());
