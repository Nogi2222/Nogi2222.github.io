console.log('chart.jsを読み込みました.');

// chart.jsの本来のサイトからコピーしてきたサンプルコード
// 棒グラフ
const labels = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];


// グラフデータ
const data = {
    labels: labels,
    datasets: [{
        label: '成長イメージ',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600],
    },
    // カンマで区切ってデータを増やしてみる
    {
        label: '実際の成長',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(99, 255, 132)',
        data: [0, 0.2, 0.4, 0.6, 0.8, 5, 60, 180, 1800],
    }]
};

// コンフィグ
const config = {
    type: 'line',
    data: data,
    options: {}
};

// グラフをcanvasタグに描画する(ID名で場所指定)
const myChart = new Chart(
    // document.getElementById('myChart'),
    // 上の処理をjQueryを使って書くと．．．
    $('#myChart'),
    config
    
);


// myChart.canvas.parentNode.style.height ='15px'
// myChart.canvas.parentNode.style.width ='128px'

const labels_1 = [
    '',
    '20分後',
    '1時間後',
    '1日後',
    '6日後',
    '1か月後',
];


// グラフデータ
const data2 = {
    labels: labels_1,
    datasets: [{
        label: 'エビングハウスの忘却曲線',
        backgroundColor: 'rgb(100, 99, 132)',
        borderColor: 'rgb(100, 99, 132)',
        // tension: 'Number(0.4)',
        data: [100, 58, 44, 34, 25, 21],
    }],
}
// コンフィグ
const config2 = {
    type: 'line',
    data: data2,
    options: {}
};

// グラフをcanvasタグに描画する(ID名で場所指定)
const myChart2 = new Chart(
    // document.getElementById('myChart'),
    // 上の処理をjQueryを使って書くと．．．
    $('#myChart2'),
    config2
);