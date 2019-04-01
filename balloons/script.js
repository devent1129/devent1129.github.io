document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "icons/splashwide.png", attackRadius: 100, monsterHitRadius: 100, attackDuration:500, jumpHeight: 270, pointsPerMonsterKilled: 1, autoPlay: false, makeResponsive: true});
});