function load() {
    var page_index = parseInt(document.getElementById("pageindex").value);
    page_index += 8;
    document.getElementById("pageindex").value = page_index;
    $.post(
        "/polo",
        {next_index:page_index},
        function (result) {
            console.log(result);
            var show_again = "";
            for(var i = 0; i < result.length; i++){
                show_again +=
                    `
               <li>
                    <a target='_blank', href=''>
                        <div class="magnify">
                            <img src=${result[i].picture} alt='' ></div>
                        <div class="desc">
                            <p class="p_title">
                                <span class="name">${result[i].name}</span>
                                <span class="coup"> &#x5165;&#x95E8;&#x7EA7;</span>
                            </p>
                            <p class="p_desc"> ${result[i].describe}</p>
                            <p class="p_num" style="color:#222222" >
                                &#xFFE5;${result[i].price}</p>
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