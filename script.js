//* string methods
//* split and join
//* charAt
// * access like an array with []
//*slice(start, end)
//*substring(start, end)
//* substr(start, length)
//* concat()
//* toUpperCase()
//* toLowerCase()

// * Example!

//! Smells Like Teen Spirit - MESLSL-_-LEKI-_-NTEE-_-TISRIP
let rockNirv = "MESLSL-_-LEKI-_-NTEE-_-TISRIP"
let songSplit = rockNirv.split("-_-");
console.log(songSplit);
//* smells
let nirvUnSmell = `${songSplit[0][2]}${songSplit[0].slice(0,2).toLowerCase()}${songSplit[0].charAt(3).toLowerCase()}${songSplit[0].charAt(3).toLowerCase()}${songSplit[0].substring(4,5).toLowerCase()}`;
//* like
let lowLike = songSplit[1].toLowerCase()
let nirvUnLike = `${lowLike.substr(0,1)}${lowLike.substr(3,1)}${lowLike.substr(2,1)}${lowLike.substr(1,1)}`;
//* Teen
let niTeenLow = songSplit[2].toLowerCase();
let niTeen = `${niTeenLow.slice(1,4)}${niTeenLow[0]}`;
//* spirit
let spirLow = songSplit[3].toLowerCase();
let spir = `${spirLow[2]}${spirLow[5]}${spirLow[4]}${spirLow[3]}${spirLow[1]}${spirLow[0]}`
let unscabledTitle = `${nirvUnSmell} ${nirvUnLike} ${niTeen} ${spir}`;

console.log(unscabledTitle);
let pageBody = document.querySelector("body");
let teenSpiritP = document.createElement("p");
teenSpiritP.innerText = unscabledTitle;
pageBody.appendChild(teenSpiritP);


/**
 * * for each puzzle find the movie or song title:
 * * must use split, toLowerCase, toUpperCase, template literals, let based variable creation
 * * use at least 2 of the following
 * *    -accessing characters with [] array coordinates
 * *    -slice(start, end)
 * *    -charAt(num)
 * *    -substring(start, end)
 * *    -substr(start, length)
 * *    
 * * Teams of 3!
 * * All changes to the strings must be done with code!  Must show all work!  Team that solves the most gets a prize!  Use Dom Manipulation to put the unscrabled titles on screen and in your console log in a p tag.
 * 
 * *  Each team must unscramble a minimum of 4 puzzles.
*/
//* word puzzles - Famous Fictional Characters

//! PINACAT**JAKC**RSWRPOA

//! RADHT^DRVAE

//! NAKIAN#_ALYSKWKER

//! SEAJM&*DOBN

//! IKECMY67SEOMU

//! MRIEONEH_==AGNGRER

//! RUVEOESS*&NSEPA

//! WLYLI^##OAKWN

//! ANDIANI_+=_NJSEO

//! HOMATS551ETH551NKAT551NNGIEE 

//! NSPBEOOBG12PNTAERUAQSS

//! BOOSYC%%%OOD

//! ADWDRE^^--SSSRHODICANS

//! BLIOB67&IBGASNG

//! STKAISN~~EVRENEED

//! ERIECC~*TSANELNIR

//! NEYSRDEA==RTNRYEAGA

//! NDO%___&QXIUETO

//! OIMUPST****oh***REMPI

//! ECIAL##IN##OADLWRDNNE

//! EDWORN??OWMAN