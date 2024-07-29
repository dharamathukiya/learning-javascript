const accountId = 144553
let accountEmail = "dharapatel@gmail.com"
var accountPassword = "12345"
accountcity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "dhara@gmail.com"
accountPassword = "11223344"
accountcity = "Udaipur"

console.log(accountId);

/*
prefer not to use var beacause of issue in block scope and functional scope 
(jyare var ni value koi pan change kare to ee var nu name same hoy to badhi jagya e 
value change thai jay etale var no use nai karavo ane let no use karavo)
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountState])