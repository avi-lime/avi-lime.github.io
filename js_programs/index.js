let btt = document.getElementById("btt")

window.addEventListener("scroll", () => {
    var y = window.scrollY
    if (y >= 1000)
        btt.className = "backtotop show"
    else btt.className = "backtotop hide"
})

var getVal = (id) => {
    return document.getElementById(id).value;
}

var setVal = (id, val) => {
    document.getElementById(id).innerHTML = val;
}

var armstrong = () => {
    let val = getVal("txtArm")
    let ans = 0
    val.split("").forEach(el => {
        ans += el ** val.length;
    });
    setVal("resArm", val == ans ? `${val} is an Armstrong Number.` : `${val} is not an Armstrong Number.`);

}

var evenodd = () => {
    let val = getVal("txtEveOdd")
    setVal("resEveOdd", val % 2 == 0 ? `Even` : `Odd`)
}

var greatest = () => {
    let num1 = getVal("txtGot1")
    let num2 = getVal("txtGot2")
    let num3 = getVal("txtGot3")
    let ans;
    if (num1 > num2 && num1 > num3) ans = num1
    else if (num2 > num3) ans = num2
    else ans = num3
    setVal("resGot", `${ans} is the greatest number.`)
}

var leapyear = () => {
    let flag = 0
    let year = getVal("txtLeap")
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) flag = 1
    setVal("resLeap", flag ? `${year} is leap year` : `${year} is not a leap year.`)
}

var palindrome = () => {
    let val = getVal("txtPal")
    if (val == val.split("").reverse().join(""))
        setVal("resPal", "Palindrome")
    else
        setVal("resPal", "Not Palindrome")
}

var perfectnum = () => {
    let num = getVal("txtPer")
    var sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i == 0)
            sum += i;
    }
    setVal("resPer", sum == num ? "Perfect Number" : "Not a perfect number.")
}

var prime = () => {
    let num = getVal("txtPrime")
    let flag = 0
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }
    setVal("resPrime", flag ? "Not Prime" : num == 1 ? "Special Number" : "Prime")
}

var revstr = () => {
    let str = getVal('txtRev')
    let rev = ""
    // rev = str.split("").reverse().join("")
    for (let i = str.length - 1; i >= 0; i--)
        rev += str[i]
    setVal('resRev', rev)
}

var strlen = () => {
    let str = getVal('txtLen')
    let len = 0

    // len = str.length
    for (let i = 0; str[i] != undefined; i++) {
        len++
    }
    setVal('resLen', `Length of string: ${len}`)
}

var sumofdig = () => {
    let num = getVal("txtSum")
    let sum = 0

    num.split("").forEach(digit => {
        sum += parseInt(digit)
    })

    setVal("resSum", `Sum of digits: ${sum}`)
}

var vowel = () => {
    let str = getVal("txtVow")
    let numOfVowels = 0

    str.split("").forEach(ch => {
        if (['a', 'e', 'i', 'o', 'u'].includes(ch.toLowerCase()))
            numOfVowels++
    })

    setVal("resVow", `Number of Vowels: ${numOfVowels}`)
}