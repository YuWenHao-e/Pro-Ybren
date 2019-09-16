// var img = document.querySelector("img");
// 			img.onmouseover=function(){
// 				img.style.cssText="animation: bigger 2s;";
// 			}
// 			img.onmouseout=function(){
// 				img.style.cssText="animation: smaller 1s;";
// 				}
// 
				
				var imgs = document.getElementsByClassName("img");
				Array.of(...imgs).forEach(val => {
					val.onmouseover=function(){
						val.style.cssText="animation: bigger 1s;";
					}
					val.onmouseout=function(){
						val.style.cssText="animation: smaller 0.7s";
					}
				}) 
