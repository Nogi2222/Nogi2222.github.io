function RH(language) {
    // 表示する文字列を格納する変数
    let message = '';

    // 日本語は１,　英語は２,　中国語は３,　韓国語は４
    if (language === 1) {
        message = 'セロトニン的幸福とは一言でいうと「心と身体の健康」という.';
    } else if (language === 2) {
        message = 'オキシトシン的幸福とは一言でいうと「つながり」の幸福という.';
    } else if (language === 3) {
        message = 'ドーパミン的幸福とは一言でいうと「お金や成功の幸福」という。';    
    } else  {
        message = '';
    }
    
    console.log(message);

    //書き換えたいHTMLの要素を取得する 
    const p_hello = document.querySelector('#RH')
    // 書き換えたい要素の文字列を置き換える
    p_hello.textContent = message;

    return message;

}

let aiueo = RH();

