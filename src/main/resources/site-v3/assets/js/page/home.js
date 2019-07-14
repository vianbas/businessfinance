import {
    listArticle
} from '../components/list-article.js';


//xhrDefault.get('/article/newest/5/0')
//    .then(function (response) {

        var elTarget = document.querySelector('#newest');

//        var elResult = listArticle(response.data.object, 'Berita Terbaru', true, 'Berita Terbaru Lainnya', BASE_URL + '/newest');
        var elResult = listArticle();
        replaceSlotApi(elTarget, elResult);
        imgLazyLoad.update()
//    })
//    .catch(function (error) {
//        console.log(error);
//    });