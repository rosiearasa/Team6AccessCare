function main(){
console.log(datak);
let html="";

for (let i=0; i<datak.length; i++){
let str= createTemplate(datak[i]);
html=html+str;

}

$(".results").html(html);

}
$("#doSearch").submit(function(evt){
  evt.preventDefault();
  let searchTerm = $("#search").val();
  console.log(searchTerm);

  let result = data.filter(function(info){
      console.log(info);
     return info.name.includes(searchTerm);

      // return info.state == searchTerm;
  })

  let html = "";
  for(let i=0; i< result.length;i++){
      html = html + createTemplate(result[i]);
  }

$(".results").html(html);

})

function createTemplate(info){
  return `
  <div>
      <h2>${info.name}</h2>


      <ul>
          <li> ${info.name}</li>

      </ul>
      </div>
  `;


}
$(main);
