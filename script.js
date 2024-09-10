document.getElementById('generateButton').addEventListener('click', function() {
    let numbers = generateLottoNumbers();
    const numbersCon = document.getElementById('numbers');
    
    //지난 당첨 번호를 화면에 보이기
    if(numbersCon.classList.contains('stay')){
        numbersCon.classList.remove('stay');
    } else{
        document.getElementById('latestNumbers').textContent = numbersCon.textContent;
    }

    //새로운 당첨 번호를 화면에 보이기
    numbersCon.textContent = numbers.join(', ');
});


function generateLottoNumbers() {
    let lotteryArr = [];

    function genNewNum(){
        const genNum = Math.floor(Math.random()*100);
        return (genNum>10) ? Math.abs(genNum-55)+1 : genNum;
    }

    for(i=0; i<6; i++){
        let isUnique = genNewNum();
        while(lotteryArr.includes(isUnique)){
            isUnique = genNewNum();
        }
        lotteryArr.push(isUnique);
    }

    return lotteryArr
}