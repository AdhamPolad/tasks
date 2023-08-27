

// 1. Write a JavaScript program to display numbers as worlds using ASCII code.
// example: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// output: hello world
// example: [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110]
// example: [106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 105, 115, 32, 98, 111, 109, 98, 97]

// 2. Write a JavaScript program to convert a string to an array of ASCII codes.
// example: hello world
// output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// example: Salam Azerbaycan


//  let benzin = 10 , dizel = 9 , lpg = 15;
//  const yenisetr = "\r\n";

//  const yakitmetni = "1-benzin" + yenisetr
//  + "2-dizel" + yenisetr
//  + "3-lpg" + yenisetr
//  + "yakit tipinizi girin";

//  let yakittipi = prompt(yakitmetni) ;

//  if (yakittipi == "1" || yakittipi == "2" || yakittipi == "3"){
//     let yakitlitresi = prompt("nece litr?")
//     let bakiye = prompt("bakiyenizi girin")
//      if(yakittipi == "1"){
//         //benzin
//         let odenis = benzin * yakitlitresi;
//         if(bakiye>odenis){
//             alert("odeme basarili" + yenisetr
//             + "qalan pul " + (bakiye-odenis))
//         }else{
//             alert("odeme basarisiz" + yenisetr
//             + "odenis " + odenis + yenisetr
//             + "pulunuz " + bakiye + yenisetr
//             + "catismayan mebleg " + (odenis - bakiye) )
//         }
//      }
//      else if (yakittipi == "2"){
//         //dizel
//         let odenis = dizel * yakitlitresi;
//         if(bakiye>odenis){
//             alert("odeme basarili" + yenisetr
//             + "qalan pul " + (bakiye-odenis))
//         }else{
//             alert("odeme basarisiz" + yenisetr
//             + "odenis" + odenis + yenisetr
//             + "pulunuz " + bakiye + yenisetr
//             + "catismayan mebleg " + (odenis - bakiye) )
//         }
//      }
//      else if (yakittipi == "3"){
//         //lpg
//         let odenis = lpg * yakitlitresi;
//         if(bakiye>odenis){
//             alert("odeme basarili" + yenisetr
//             + "qalan pul " + (bakiye-odenis))
//         }else{
//             alert("odeme basarisiz" + yenisetr
//             + "odenis " + odenis + yenisetr
//             + "pulunuz " + bakiye + yenisetr
//             + "catismayan mebleg " + (odenis - bakiye) )
//         }
//      }
//  }
// else{
//     alert("zehmet olmasa gecerli yakit tipi girin")
// }

// const yenisetr = "\r\n";
// let metin = "1-Pazartesi" + yenisetr
// + "2-Sali" + yenisetr
// + "3-Carsamba" + yenisetr
// + "4-persembe" + yenisetr
// + "5-Cuma" + yenisetr
// + "6-Cumartesi" + yenisetr
// + "7-Pazar" + yenisetr
// + "Zehmet olmasa gun secin";

// let Gunler = prompt(metin);

// switch(Gunler){
//     case "1": 
//     console.log("1ci gun")
//          break;
//     case "2":
//         console.log("2ci gun")
//         break;
//     case "3":
//         console.log("3ci gun")
//         break;
//         case "4":
//         console.log("4ci gun")
//         break;
//         case "5":
//         console.log("5ci gun")
//         break;
//         case "6":
//         console.log("6ci gun")
//         break;
//         case "7":
//         console.log("bazar")
//         default:
//             console.log("gecerli gun girin")
//             break;
    
// }


// let sayi = prompt("1 ile 7 arasinda reqem gir!")

// switch(sayi){
//     case "1":
//         console.log("Pazartesi")
//         break;
//         case "2":
//             console.log("Sali")
//             break;
//             case "3":
//                 console.log("Carsamba")
//                 break;
//                 case "4":
//                     console.log("persembe")
//                     break;
//                     case "5":
//                         console.log("Cuma")
//                         break;
//                         case "6":
//                             console.log("Cumartesi")
//                             break;
//                             case "7":
//                                 console.log("Bazar")
//                                 break;
//                                 default:
//                                     console.log("gun girin")
//                                     break;

// }


// let bakiye = 10000;
// const yenisetr = "\r\n";


// let metin = "1-Bakiye goruntuleme" + yenisetr
// + "2-Para cekme" + yenisetr
// + "3-Para yatirma" + yenisetr
// + "4-cixis" + yenisetr
// + "seciniz";

// let deger = Number(prompt(metin));

// switch(deger){
//     case 1:
//         alert("bakiyeniz " + bakiye)
//         break;
//         case 2:
//             let cekilenpul = Number(prompt("neqeder pul cekirsiz?"))
//             if(bakiye>=cekilenpul){
//                 alert("basarili" + yenisetr
//                 + "qalan pul " + (bakiye-cekilenpul))
//             }else{
//                 alert("islem basarisiz" + yenisetr
//                 +"bakiyeniz " + bakiye + yenisetr
//                 +"cekilen pul " + cekilenpul + yenisetr
//                 + "catismayan mebleg " + (cekilenpul-bakiye))
//             }
//             break;
//             case 3 :
//                 let yatirilanpul = Number(prompt("neqeder pul yatirmaq isteyirsiz?"))
//                 bakiye = yatirilanpul + bakiye;
//                 alert("artirilmis pulunuz " + bakiye)
//                 break;
//                 case 4 :
//                     alert("cixisiniz ugurludur")
//                     break;

//                     default:
//                         alert("zehmet olmasa 4 e qeder eded secin")
//                         break;


// }


// const yenisetr ="\r\n";

// let matamatikDogru , matamatikYanlis = 0;
// let turkceDogru , turkceYanlis = 0;
// let fenDogru , fenYanlis = 0;
// let sosyalDogru , sosyalYanlis = 0;
// let okulpuani = 0;

// let puan = 0;

// let mesaj = "Tyt hesablama" + yenisetr
// + "1-puan hesablama"+ yenisetr
// + "2-cikis yap";

// let secim = Number(prompt(mesaj));

// switch(secim){
//     case 1:
//         matamatikDogru = Number(prompt("Matamatik dogru sayisi:"))
//         matamatikYanlis = Number(prompt("Matamatik yanlis sayisi:"))

//         turkceDogru = Number(prompt("turkce dogru sayisi:"))
//         turkceYanlis = Number(prompt("turkce yanlis sayisi:"))

//         fenDogru = Number(prompt("fen dogru sayisi:"))
//         fenYanlis = Number(prompt("fen yanlis sayisi:"))

//         sosyalDogru = Number(prompt("sosyal dogru sayisi:"))
//         sosyalYanlis = Number(prompt("sosyal yanlis sayisi:"))

//         okulpuani = Number(prompt("okul puaninizi yazin"))

//         let dogrular = matamatikDogru + turkceDogru + fenDogru + sosyalDogru;
//         let yanlislar = matamatikYanlis + turkceYanlis + fenYanlis + sosyalYanlis;

//         let kalandogru = dogrular - (yanlislar/4);
//         puan = kalandogru*4 + 100 + okulpuani;
//         alert("Puaniniz:" + " " + puan)
//         break;

//         case 2:
//             alert("cikis yaptiniz")
//             break;

//             default:
//                 alert("gecerli sayi girin")
//                 break;



// }

// let toplam = 0;
// for(let i = 50; i>=1; i-=2){
//     toplam += i;
//     console.log(i);
// }

// console.log("toplam: " + toplam);

// for(let i = 1; i<=10; i++){
//     if(i%2==0){
//         console.log("Edhem");
//     }else{
//         console.log("Poladzade");
//     }
// }


// let sayac = 0;
//  while(sayac<=10){
//    console.log(sayac);
//    if(sayac==7){
//     break;
//    }
//    sayac++
//  }


// let sayac = 0;
// let cem = 0;
// do{
// if(sayac%4==0){
//     cem +=sayac;

// }
// sayac++
// }while(sayac<=100)
// console.log(cem);

// let sayac = 0;

// while(sayac<=10){
//     sayac++
//     if(sayac==8){
//         continue;
//     }
   
//      console.log(sayac);
// }


// for( let i =1; i<=10; i++){
//     for(let j =1; j<=10; j++ ){
//         console.log(i+ "x" + j + "=" + (i*j))
//     }


//     console.log("------------------")
// }



// let sayi = Number(prompt("Bir sayi girin :"))
// let result = true;
// for(let i = 1; i<=Math.floor(sayi/2); i++){
//     if(sayi%2==0){
//         //adi eded deyil
//      result = false;
//      break;
//     }
// }
// if(result){
//     alert("sade ededir: " + sayi)
// }else{
//     alert("murekkeb ededdir: " + sayi)
// }


// let eded = Number(prompt("Bir eded girin: "))
// let result = true;



// let eded = Number(prompt("Bir eded girin: "))
// let vurma = 1;
// for(let i = 1; i<=eded; i++){
//     vurma = vurma * i;
//     }
// alert("netice: " + vurma);

// let sayi = prompt("bir reqem girin:")
// let toplam = 0;
// for(let i =0; i<sayi.length; i++){
// let rakam = sayi.charAt(i);
// toplam +=rakam *rakam*rakam;


// }
// if(sayi==toplam){
//     alert("armstrong ededir;")
// }else{
//     alert("armstrong eded deyil:")
// }



// const yenisetr ="\r\n";
// let metn = "Dim ballarin hesablanmasi:" + yenisetr
// +"1-programa giris:"+ yenisetr
// +"2-proqramdan cixis";
// let secim = Number(prompt(metn));

// let Azerbaycandogru; Azerbaycanyanlis = 0;
// let Riyaziyyatdogru; Riyaziyyatyanlis = 0;
// let Ingdogru ; Ingyanlis = 0;

// let toplamBal= 0;

// if(secim==1){
    
//   Azerbaycandogru =  Number(prompt("Azerbaycan dili dogru suallarinizi girin:"))
//   Azerbaycanyanlis = Number(prompt("Azerbaycan yanlis suallarinizi  girin:"))

//   Riyaziyyatdogru = Number(prompt("Riyaziyyat dogrularinizi girin:"))
//   Riyaziyyatyanlis = Number(prompt("Riyaziyyat yanislarinizi girin:"))

//   Ingdogru = Number(prompt("Ingilis dili dogrularinizi girin:"))
//   Ingyanlis = Number(prompt("Ingilis dili yanlislar:"))

// let dogrular = Azerbaycandogru + Riyaziyyatdogru + Ingdogru;


//   toplamBal = (dogrular*4) 

//   alert(toplamBal)

// }else{
//     alert("proqramdan cixdiniz:")
// }


// function ad (isim, soyisim){
//     console.log(isim, " " ,soyisim);

// }
// ad("Adham" , "Poladzadeh");


// let number = Number(prompt("reqem girin:"))

// cube(number);
// function cube (number){
//     console.log(number*number*number)
// }


// let yas = Number(prompt("yasinizi girin:"))

// checkUP(yas);
// function checkUP(yas){
//     if(yas>18){
//         console.log("ala bilersiz: ")
//     }else{
//         console.log("ala bilmersiz:<")
//     }
// }

// let metin = prompt("metn girin:")

// let herf = prompt("herf girin: ")

// function find(herf){
//     let toplam = 0;
//     for(let i = 0; i<metin.length;i++){
//         if(metin.charAt(i).toLocaleLowerCase==herf.toLocaleLowerCase){
//             toplam +=1;
//         }
//     }
//     return toplam;
// }
// let result = find(herf);
// alert("herf sayi: " + result);

// let reqem = Number(prompt("reqem girin: "))
// isPerfect(reqem);
// function isPerfect(reqem){
//     let toplam = 0;
//     for(let i = 2; i<=reqem/2; i++){
//        if(reqem%i==0){
//          toplam +=i;
//        }
//     }
//       toplam += 1+reqem;

//       if(toplam==reqem*2){
//         alert("it is perfect number )")
//       }
//       else{
//         alert("it is fuck)")
//       }

// }





// convertBinaryToDecimal("1010");

// function convertBinaryToDecimal (binary){
//     let toplam = 0;
//     let ust = 0;

//     for (let i = binary.length-1; i>=0; i--){
//         toplam += Number(binary.charAt(i))*Math.pow(2,ust);
//         ust++;
//     }

//     console.log(toplam);
// }

// convertDecimalToBinary(25);

// function convertDecimalToBinary(number){
// let binary = "";

//     while(true){
//       binary += (number%2).toString();
//       number = Math.floor(number/2);

//       if(number == 1){
//         binary +=1;
//         break;
//       }
//     }
//    let result = reverse(binary);
//    console.log(result);
   
// }

// function reverse (binary){
//     let reverseBinary = 0;
//    for(let i = binary.length-1; i>=0;i--){
//       reverseBinary += binary.charAt(i);
//    }

//    return reverseBinary;
// }



// isimler[2]= "Amik"

// isimler.forEach(function(ad){
//     console.log(ad);
// })

// for(let i =0; i<isimler.length;i++){
//     console.log(isimler[i]);
// }

// let isimler = ["Adham", "Musa", "Ismayil","Huseyn"]

// isimler.pop();
// console.log(isimler);


// let urun1 = {
//     isim: "ACER Aspire3" ,
//     fiyat:7.999,
//     katagori: "Teknoloji",
// }
// let urun2 = {
//     isim: "ACER Aspire5" ,
//     fiyat:11.499,
//     katagori: "Teknoloji",
// }
// let urun3 = {
//     isim: "LENOVO Ideapad Gaming 3 " ,
//     fiyat:21.999,
//     katagori: "Teknoloji",
// }
// let urun4 = {
//     isim: "LENOVO V15" ,
//     fiyat:10.919,
//     katagori: "Teknoloji",
// }
// let urun5 = {
//     isim: "Apple Macbook Air " ,
//     fiyat:25.139,
//     katagori: "Teknoloji",
// }

// let urunler = [urun1, urun2, urun3, urun4, urun5];
// let firteliUrun =  [];
// let secilenUrun = prompt("Istediyiniz komputerin adini giriniz: ")

// getFirtelliUrun(urunler)
// writeFirteliUrun (firteliUrun)


// function getFirtelliUrun(urunler){
//     urunler.forEach(function(urun){
//     if(urun.isim.toUpperCase().includes(secilenUrun.toLocaleUpperCase(),0)){
//         firteliUrun.push(urun);
//     }
// })
// }

// function writeFirteliUrun (urunler){
//     urunler.forEach(function(urun){
//         console.log("-------------------------")
//         console.log(urun.isim + "|" + urun.fiyat + "|" + urun.katagori)
//         console.log("-------------------------")
//     })
// }










