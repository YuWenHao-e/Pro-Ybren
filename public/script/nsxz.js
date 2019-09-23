function load() {
    var page_index = parseInt(document.getElementById("pageindex").value);
    page_index += 8;
    document.getElementById("pageindex").value = page_index;
    $.post(
        "/nsxz",
        {next_index:page_index},
        function (result) {
            console.log(result);
            var show_again = "";
            for(var i = 0; i < result.length; i++){
                show_again +=
                    `
                <li>
                    <div class="magnify">
                         <img src=${result[i].picture}>
                    </div>
                    <div>
                        <span class="desc">${result[i].name}</span>
                        <span class="coup">精品</span>
                    </div>
                    <p class="tese">${result[i].describe}</p>
                    <p class="jiage">&#xFFE5;${result[i].price}</p>
                </li>
                `
            };
            var ul_show = document.getElementById("db");
            console.log(ul_show);
            ul_show.innerHTML = ul_show.innerHTML + show_again;
        },
        "json"
    );
}