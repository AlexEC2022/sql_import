const path = require('path')
const {appendFileAsync, writeFileAsync} = require('./helper')

const diff = (a,b) => a.filter(e => !b.includes(e))


const siteArt = [715646,728276,728276]

const warhouseArt = [728276,728288,728289,728291,728292,728293,728294,728295,728296,728297,728298,728299,728300,728301,728302,728265,728266,728270,728271,728272,728273,728274,728275,728276,726037,713242,713243,713240,713244,728280,728281,728282,728283,728284]


let deleteDuplicate = (arr) => arr.filter((e, i) => arr.indexOf(e) === i)



let list = diff(deleteDuplicate(siteArt), deleteDuplicate(warhouseArt))
console.log(list);

writeFileAsync(path.resolve(__dirname, 'diff.txt'), '')
        .then(() => appendFileAsync(path.resolve(__dirname, 'diff.txt'), `${list}` + '\n'))
        .catch(err => console.log('err'))