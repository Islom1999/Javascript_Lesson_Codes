/*  2-masala
const login = 'Eshmat'
const parol = 'Toshmat'

let login_user
let parol_user

do{
    login_user = prompt('loginizni kiriting')
    parol_user = prompt('parolizni kiriting')
}while(login_user!=login || parol_user!=parol)

if(login_user==login && parol_user==parol){
    console.log('hush kelibsiz')
}
*/



/*
// 1-masala

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombi",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor Timur)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
];

let countries_size_4 = [];
let countries_size_6 = [];

let countries_G_harf_bn_boshlanganlari = [];
let countries_C_harf_bn_boshlanganlari = [];

let countries_Qolgani = [];


for(item of countries){
    if(item.length == 4){
        countries_size_4.push(item)
    }
    if(item.length == 6){
        countries_size_6.push(item)
    }
    if(item[0] == 'G'){
        countries_G_harf_bn_boshlanganlari.push(item)
    }
    if(item[0] == 'C'){
        countries_C_harf_bn_boshlanganlari.push(item)
    }
}

for(let i=0; countries.length-1>=i; i++){
    if(!(countries[i].length == 4 || 
        countries[i].length == 6 ||
        countries[i][0] == 'G' ||
        countries[i][0] == 'C'))
        {
            countries_Qolgani.push(countries[i])
    }
    
}


console.log(countries_size_4, countries_size_6)
console.log(countries_G_harf_bn_boshlanganlari, countries_C_harf_bn_boshlanganlari)

console.log(countries_Qolgani)

*/

/*

function teksh------------------------------------------------------------ir(parol, tek_parol){
    if(parol == tek_parol){
        console.log(true)
    }else{
        console.log(false)
    }
}

tekshir('ogabek', 'ogabek')*/

let arr= 20
let s = 0
for(let i=2; i<=arr; i++){
    s=0
    for(let j=1; j<=i; j++){
        if(i%j == 0){
            s++
        }
    }
    if(s<=2){
        console.log(i)
    }
}





