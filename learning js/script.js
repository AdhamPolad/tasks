// let kitab1 = {isim:"Her Seyi Dusunme",yazar:"Anne Bogel",fiyat:25, raf:2.4}
// let kitab2 = {isim:"Hic bir karsilasma tesaduf deildir",yazar:"Hakan Menguc",fiyat:45, raf:1.5}
// let kitab3 = {isim:"Insan Neyle yasar",yazar:"Tolstoy",fiyat:34, raf:3.3}
// let kitab4 = {isim:"Zafer sizlanarak kazanilmaz",yazar:"Haluk Tatar",fiyat:65, raf:4.4}
// let kitab5 = {isim:"Seker portkali",yazar:"Jose more",fiyat:43, raf:5.5}


// let kitablar = [kitab1,kitab2,kitab3,kitab4,kitab4,kitab5]


// let raf11 = {kod: "1.1 Raf", goster: false}
// let raf12 = {kod: "1.2 Raf", goster: false}
// let raf13 = {kod: "1.3 Raf", goster: false}
// let raf14 = {kod: "1.4 Raf", goster: false}
// let raf15 = {kod: "1.5 Raf", goster: false}


// let raf21 = {kod: "2.1 Raf", goster: false}
// let raf22 = {kod: "2.2 Raf", goster: false}
// let raf23 = {kod: "2.3 Raf", goster: false}
// let raf24 = {kod: "2.4 Raf", goster: false}
// let raf25 = {kod: "2.5 Raf", goster: false}


// let raf31 = {kod: "3.1 Raf", goster: false}
// let raf32 = {kod: "3.2 Raf", goster: false}
// let raf33 = {kod: "3.3 Raf", goster: false}
// let raf34 = {kod: "3.4 Raf", goster: false}
// let raf35 = {kod: "3.5 Raf", goster: false}


// let raf41 = {kod: "4.1 Raf", goster: false}
// let raf42 = {kod: "4.2 Raf", goster: false}
// let raf43 = {kod: "4.3 Raf", goster: false}
// let raf44 = {kod: "4.4 Raf", goster: false}
// let raf45 = {kod: "4.5 Raf", goster: false}



// let raf51 = {kod: "5.1 Raf", goster: false}
// let raf52 = {kod: "5.2 Raf", goster: false}
// let raf53 = {kod: "5.3 Raf", goster: false}
// let raf54 = {kod: "5.4 Raf", goster: false}
// let raf55 = {kod: "5.5 Raf", goster: false}


// let raflar = [
//     [raf51,raf52,raf53,raf54,raf55],
//     [raf41,raf42,raf43,raf44,raf45],
//     [raf31,raf32,raf33,raf34,raf35],
//     [raf21,raf22,raf23,raf24,raf25],
//     [raf11,raf12,raf13,raf14,raf15],
// ]



// function rafOlustur(){
//     console.clear();
//     let satir = "";
//     for(let i =0; i<raflar.length; i++){
//         for(let j =0; j<5; j++){
//            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "----") + ""
//         }

//         console.log(satir)
//         console.log("------------------------")
//         satir = "";
//     }
// }



// function kodBul (kitabIsmi){
//     let rafKod = null;
//     kitablar.forEach(function(kitab){
//         if( kitab.isim.toLocaleUpperCase().includes(kitabIsmi.toLocaleUpperCase(), 0)){
//             rafKod = kitab.raf
//         }
        
       
//     });
//     return rafKod;
// }


// function raftaGoster (rafkodu){
//     for(let i = 0; i<raflar.length;i++){
//         for(let j = 0; j<5; j++){
//             if(raflar[i][j].kod==rafkodu){
//                 raflar[i][j].goster = true;
//                 break;
//             }
//         }
//     }
// }

// rafOlustur();

// let kitabIsmi = prompt("istediginiz kitabin adini giriniz: ")
// rafKod = kodBul(kitabIsmi);

// if(rafKod!=null){
//     raftaGoster(rafkod)
//     rafOlustur();
// }else{
//     alert("Istediginiz kitab yok:")
// }




// let number = Math.random();
// let sonuc = number*100;
// let sonucYuvarlak = Math.floor(sonuc);

// console.log(sonucYuvarlak);


let tarix = new Date();
console.log(tarix);