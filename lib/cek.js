const fs = require('fs')
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const karakter = JSON.parse(fs.readFileSync('./database/user/karakter.json'))
const hp = JSON.parse(fs.readFileSync('./database/user/hp.json'))
const cekUang = (userid) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === userid) {
position = i
}})
if (position !== false) {
return uang[position].uang
}}
const cekKarakter = (userid) => {
let position = false
Object.keys(karakter).forEach((i) => {
if (karakter[i].id === userid) {
position = i
}})
if (position !== false) {
return karakter[position].karakter
}}
const cekHp = (userid) => {
let position = false
Object.keys(hp).forEach((i) => {
if (hp[i].id === userid) {
position = i
}})
if (position !== false) {
return hp[position].hp
}}
module.exports = {
cekUang,
cekKarakter,
cekHp
}