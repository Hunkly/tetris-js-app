let totalScore = [];
fetch('http://localhost:3000/getData')
    .then(function(res){ return res.json(); })
    .then(function(data){
        totalScore = data;
        console.log('get data request from client', JSON.stringify(data), 'and', totalScore) ;
        let tabscore = document.getElementById('score');
        let str = ' ';
        for (let i = 0; i< totalScore.length; i++  ) {
            if (totalScore[i]!==undefined) str +=totalScore[i].userName+': '+totalScore[i].maxCount+'<br>';
            console.log('ffe', str)
        }
        tabscore.innerHTML = str;
    });



