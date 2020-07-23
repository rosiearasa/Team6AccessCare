function main(){
console.log(datak);
let html="";

for (let i=0; i<datak.length; i++){
let str= createTemplate(datak[i]);
html= html + str;

}

$(".results").html(html);

}

$("#search").submit(function(evt){
  evt.preventDefault();
  let searchTerm = $("#search").val();
  console.log(searchTerm);

  let result = datak.filter(function(info){
      console.log(info);
     return info.region.includes(searchTerm);


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



      <ul>


      </ul>
      </div>
  `;


}
$(main);
