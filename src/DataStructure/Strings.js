const Strings = () => {
    let dog = "Fido";
    // console.log(dog.charAt(0));
    let name = "YouTube"
    // console.log(name.substring(1, 7));


    //String Comparison
    var a = "a";
    var b = "b";
    // console.log(a < b);
    var a = "add";
    var b = "b";
    // console.log(a < b);

    //String Search

    function existInString(stringValue, search) {
        return stringValue.indexOf(search) !== -1
    }
    // console.log(existInString('red', 'r'));
    // console.log(existInString('red', 'b'));

    var str = "He's my king from this day until his last day";
    var count = 0;
    var pos = str.indexOf('a')
    while (pos !== -1) {
        count++;
        pos = str.indexOf("a", pos + 1);
    }
    // console.log(count)
    //String Decomposition
    var test1 = 'chicken,noodle,soup,broth';
    // console.log(test1.split(","));
    var test1 = "Chicken";
    // console.log(test1.split(""))

    //String Replace
    var res = "Wizard of Oz";
    // console.log(res.replace("Wizard", "Witch"))





    //Regular Expressions

    // i Perform case-insensitive matching 
    // g Perform a global match (find all matches rather than stopping after first match)
    // m Perform multiline matching


    //  search(): Tests for matches in a string. This returns the index of the 

    //  match(): Tests for matches. This returns all the matches.
    //• exec(): Tests for matches in a string. This returns the first match.
    //• test(): Tests for matches in a string. This returns true or false.


    //Basic Regex
    //     ^: Indicates the start of a string/line
    // \d: Finds any digit
    // [abc]: Finds any character between the brackets
    // [^abc]: Finds any character not between the brackets
    // [0-9]: Finds any digit between the brackets
    // [^0-9]: Finds any digit not between the brackets
    // (x|y): Finds any of the alternatives specified
    var str = "JavaScript DataStructures";
    var n = str.search(/DataStructures/);
    // console.log(n)

    //Any Numeric Characters  /\d+/
    // var reg = /\d+/;
    // console.log(reg.test("123"));
    // console.log(reg.test("33asd"))
    // console.log(reg.test("5asdasd"))
    // console.log(reg.test("asdasd"))

    //Only Numeric Characters /^\d+$/;
    // var reg = /^\d+$/;
    // console.log(reg.test('123'));
    // console.log(reg.test('123a'));
    // console.log(reg.test('a'));

    // Floating Numeric Characters  /^[0-9]*.[0-9]*[1-9]+$/
    // var reg = /^[0-9]*.[0-9]*[1-9]+$/;
    // console.log(reg.test("11"));
    // console.log(reg.test("12.2"));



    // Only Alphanumeric Characters /[a-zA-Z0-9]/
    var reg = /[a-zA-Z0-9]/;
    // console.log(reg.test("Somethingelse"));
    // console.log(reg.test("hello"));
    // console.log(reg.test("112a"));
    // console.log(reg.test("112"));
    // console.log(reg.test("^"));


    // function encodeId(num) {
    //     var base = DICTIONARY.length;
    //     var encoded = " ";
    //     if (num == 0) {
    //         return DICTIONARY[0]
    //     }
    //     while (num > 0) {
    //         encoded += DICTIONARY[(num % base)]
    //         num = Math.floor(num / base)
    //     }
    //     return reverseWord(encoded);
    // }
    // function reverseWord(str){
    //     var reversed = "" ;
    //     for(var i =str.length-1;i>=0;i--){

    //     }
    // }







}
export default Strings