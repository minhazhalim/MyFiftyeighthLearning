function isAnagram(string1,string2){
     return formatString(string1) === formatString(string2);
}
function formatString(string){
     return string.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
module.exports = isAnagram;