
for(let i=5; i>=1; i--){
    for(let sp=1; sp<=5-i; sp++){
        document.write("&nbsp")
    }
    for(let j=1; j<=2*i-1; j++){
        document.write("*")
    }
    document.write("<br />")
}