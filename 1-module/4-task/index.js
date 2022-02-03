function checkSpam(str) {
  let site = str.toLowerCase();

  return site.includes('1xbet') || site.includes('xxx')
}

alert( checkSpam('1XbeT now') );
alert( checkSpam ('free xxxxx') );
alert( checkSpam('innocent rabbit') );