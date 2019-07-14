export function listArticle() {
    var elementItem, elButton, element, compTitle;
    elButton = '';

    elementItem =
    `<li class="list-m-bottom">
        <a href="#" title="Hey Tayo Hey Tayo Bus Kecil Ramah" class="vlign-article">
            <div class="content content-img shadow-round pull-left list-m-right">
            <img class = "lazy img-round img-thumb" data-src="https://dummyimage.com/768x432.jpg/cee/000"
            alt = "Hey Tayo Hey Tayo Bus Kecil Ramah" >
            </div>
            <div class="content content-text pull-right">
            <div class = "text-title">
              <h5 class="subtitle">mama</h5>
            </div>
            <div>
                <h4 class="title">${window.screen.width >= 768 ? "Hey Tayo Hey Tayo Bus Kecil Ramah" :  truncText("Hey Tayo Hey Tayo Bus Kecil Ramah", 60, '...')}</h4>
            </div>
            ${drawBody("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?")}
            </div>
        <div class="clearfix"></div>
        </a>
    </li>`
//        `<li class="list-m-bottom ${isAllCard || isCard && i % 5 == 0 ? 'card' : ''}">
//                <a href="${article.link}" title="${article.title}" class="${isCard && i % 5 == 0 ? '' : 'vlign-article'}">
//                    <div class="content content-img shadow-round pull-left list-m-right">
//                        <img class = "lazy img-round ${isCard && i % 5 == 0 ? '' : 'img-thumb'}" data-src="${article.img_url}"
//                        alt = "${article.title}" >
//                        ${article.cover_type == 'YOUTUBE' && pageHeader == 'gallery' ?`<div class="iplay"><i class="material-icons"><img src="/img/galeri/play_button@2x.png" /></i></div>`:''}
//                    </div>
//                    <div class="content content-text pull-right">
//                        <div class = "${(article.subtitle == undefined || article.subtitle == '') && (article.label == undefined || article.label == '') ? 'collapse' : 'text-title'}">
//                          <h5 class="${(article.subtitle != '' && article.subtitle != undefined) ? 'subtitle' : 'label'}">${article.subtitle != undefined ? article.subtitle : article.label}</h5>
//                        </div>
//                        <div>
//                            <h4 class="title">${window.screen.width >= 768 ? article.title :  truncText(article.title, 60, '...')}</h4>
//                        </div>
//                        ${drawBody(article.short_body,i,compTitle)}
//                        <div class = "${article.gdp_recommend == undefined ? 'collapse' : 'gdp-recommend view'}">
//                            <small>${article.gdp_recommend}</small>
//                        </div>
//                        ${elementViewers(compTitle, article.viewed, pageHeader)}
//                    </div>
//                    <div class="clearfix"></div>
//                </a>
//            </li>`;

//    if (useAds) {
//        elementItem = elementItem + `${elementDfpAds()}`;
//    }
//

//        elButton = `<hr class="divide divide-sm">
//                    <a href="#" class="btn btn-default block"><h4 class="text-center">bo-rap</h4></a>`;
//
//
//        compTitle = `<h3 class="text-center title-line">yolasams</h3>
//                    <hr class="divide divide-lg">`;

var textAll = ``;

for(var i = 0; i<5 ; i++){
    textAll += elementItem;
}

    element = `<div class="list-article component-indent">
                    <ul>
                        ${textAll}
                    </ul>
                </div>`;
    return element;
//}
//
//function elementViewers(compTitle, viewed, pageHeader) {
//    var drawViewers = '';
//    var result = 0;
//    if (viewed != '' && viewed != null && viewed != undefined &&
//        compTitle != 'Rekomendasi' && compTitle != 'Berita Terbaru' &&
//        viewed > 100 && pageHeader != 'newest') {
//        result = formatNumber(viewed);
//        drawViewers = `
//                    <div class="text-soft-grey view">
//                        <small class="bl-visibility" ></small>&nbsp;
//                        <small>${result}</small>
//                      </div>`;
//    }
//    return drawViewers;
}

function drawBody(short_body) {
    var body = '';
    if (short_body !== undefined && window.screen.width >= 768) {
        body = `<hr class="divide divide-sm"><span class="short-body">${short_body.length <= 120 ? short_body : truncText(short_body,120,'...')}</span><hr class="divide divide-sm">`;
    }
    return body;
}
