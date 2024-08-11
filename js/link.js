// 随机排列
function shuffle(arr) {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}

// 渲染数据
function renderlink(data) {
    var name, avatar, site, detail, li = "";
    // shuffle(data);
    for (var i = 0; i < data.length; i++) {
        name = data[i].name;
        avatar = data[i].avatar;
        site = data[i].site;
        detail = data[i].detail;
        li += '        <div class="card" onclick="window.open(\''+site+'\')">\n' +
            '            <div class="avatar" style="background: url('+avatar+');"></div>\n' +
            '            <div class="details-container">\n' +
            '                <div class="name">'+name+'</div>\n' +
            '                <div class="detail">'+detail+'</div>\n' +
            '            </div>\n' +
            '        </div>\n';
    }
    document.querySelector(".card-container").innerHTML = li;
}

// 获取 json 文件
fetch('/links/linklist.json')
    .then(response => response.json())
    .then(res => renderlink(res));
