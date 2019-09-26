function load() {
    var page_index = parseInt(document.getElementById("pageindex").value);
    page_index += 8;
    document.getElementById("pageindex").value = page_index;
    $.post(
        "/mancs",
        {next_index:page_index},
        function (result) {
            console.log(result);
            var show_again = "";
            for(var i = 0; i < result.length; i++){
                show_again +=
                    `
                <li>
                    <a>
                        <div class="magnify">
                             <img src=${result[i].picture}>
                        </div>
                        <div class="desc">
                             <p class="p_title">
                                <span class="name">${result[i].name}</span></p>
                            <p class="p_desc">${result[i].describe}</p>
                            <p class="p_num" style="color=#222222;font-weight: bold;font-size: 14px;color: #262626;float: left;margin-right: 5px;">&#xFFE5;${result[i].price}</p>
                        </div>
                        
                        </a>
                </li>
                `
            };
            var ul_show = document.getElementsByClassName("list")[0];
            console.log(ul_show);
            ul_show.innerHTML = ul_show.innerHTML + show_again;
        },
        "json"
    );
}