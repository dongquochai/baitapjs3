/**     Bài tập 1 : Xuất 3 số theo thứ tự tăng dần 
 *         Mô hình 3 khối 
 * Khối1 : input
 *  num1
 *  num2
 *  num3
 *  khối 2:
 *  b1 : tạo hàm /
 *  b2 : viết chương trình so sánh các giá trị từ các thẻ
 *  b3 : sắp xếp kết quả 
 *  Khối 3:
 *  Xuất kết quả đạt được 
 * 
 */

function btnsapXep(){
    var number1 = Number(document.getElementById("inpstt1").value);
    var number2 = Number(document.getElementById("inpstt2").value);
    var number3 = Number(document.getElementById("inpsst3").value);

    if (number1 > number2 ) {
        if (number2 > number3){
            document.getElementById("txtketQua").innerHTML = number3 + ' < ' + number2 + ' < ' + number1;
        }else if (number1 > number3){
        document.getElementById("txtketQua").innerHTML = number2 + '<' + number3+ '<' + number1 ;
         }else{
        document.getElementById("txtketQua").innerHTML = number2 + '<' + number1 + '<' + number3;
        }
     }else if(number2 > number3){
        if(number1 > number3){
            document.getElementById("txtketQua").innerHTML = number3 + '<' + number1 + '<' + number2 ;
        }else{
            document.getElementById("txtketQua").innerHTML = number1 + '<' +number3 + '<' + number2 ;
        }

    }else
    document.getElementById("txtketQua").innerHTML = number1 + '<' +number2 + '<' +number3 ;
    document.getElementById("txtketQua").style.display="block";
}

                // bài 2 : Chương trình "Chào hỏi"
/**             Mô hình 3 khối 
 * Khối 1 : input
 * Bo
 * Me
 * anhTrai
 * emGai
 * Khối 2 :
 *  b1 : tạo hàm / gán giá trị 
 *  
 * khối 3 : output
 *  xuất kết quả , lời chào 
 *  
 */
 function sayHello(){
    var name = document.getElementById('select').value;

    if (name == 'B') {
        document.getElementById('Hello').innerHTML = 'Xin Chào Bố';
    }else if (name == 'M') {
        document.getElementById('Hello').innerHTML = 'Xin Chào MẸ';
    }else if (name == 'A') {
        document.getElementById('Hello').innerHTML = 'Xin Chào Anh Trai';
    }else {
        document.getElementById('Hello').innerHTML = 'Xin Chào Em Gái';
    };

    document.getElementById("Hello").style.display="block";
    
 };

     //Bài 3 :xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
/**     Mô hình 3 khối
 * khối 1: input
 *   Khai báo / gán giá trị 
 *  num1
 *  num2
 *  num3
 * 
 * 
 * Khối 2 :
 *   Số chẳn / lẻ (%2 =0)
 * 
 * 
 * Khối 3: output
 * 
 * Xuất ra số chẳn / số lẻ 
* 
 */

function btnChanLe(){
    var num1 = Number(document.getElementById("inpsoThu1").value) %2;
    var num2 = Number(document.getElementById("inpsoThu2").value) %2;
    var num3 = Number(document.getElementById("inpsoThu3").value) %2;
    SoChan = 0 ; 
    SoLe = 0;
    
    if (num1 == 0){
        SoChan ++ ;
    }else{
        SoLe ++;
    }
    if (num2 == 0){
        SoChan ++ ; 
    }else{
        SoLe ++ ;
    }
    if (num3 == 0){
        SoChan ++ ;
    }else{
        SoLe ++ ;
    }
    document.getElementById("tongChanLe").innerHTML = "Tacó : " +  SoChan +" Số Chẵn" +" , " + SoLe + " Số Lẻ" ;
    document.getElementById("tongChanLe").style.display="block";
}


    //  Bài 4 : Viết chương trình cho nhập 3 cạnh của tam giác
/** Mô hình 3 khối
 * Khối 1 : input
 *  khai báo các cạnh của tam giác
 * Khối 2 :
 *  B1 : so sánh các cạnh của tam giác
 *  B2 :  xác định đây là tam giác loại gì 
 * 
 * khối 3 :
 *  Xuất ra loại tam giác 
 * 
 */
function tinh3Canh(){
    var a= Number(document.getElementById("canhThu1").value);
    var b= Number(document.getElementById("canhThu2").value);
    var c= Number(document.getElementById("canhThu3").value);

    if ( a==b && a==c){
        document.getElementById("txtXuat").innerHTML = "Đây là tam giác Đều";
    }else if (a==b || a==c || b==c){
        document.getElementById("txtXuat").innerHTML = "Đây là tam giác cân";
    }else if(a*a == b*b +c*c || b*b == a*a + c*c || c*c == a*a + b*b){
        document.getElementById("txtXuat").innerHTML = "Đây là tam giác vuông";
    }else{
        document.getElementById("txtXuat").innerHTML = "Một loại tam giác nào đó";
    }
    document.getElementById("txtXuat").style.display="block";

}
