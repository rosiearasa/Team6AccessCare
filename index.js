function main(){
console.log(datak);
let html="";

for (let i=0; i<datak.length; i++){
let str= createTemplate(datak[i]);

html= html + str;

}

$(".results").html(html);

}

$("#doSearch").submit(function(evt){
  evt.preventDefault();
  let searchTerm =$("#ssearch").val();
  console.log(searchTerm);

  let result = datak.filter(function(info){
    console.log(info);
    //search by region
     return info.region==searchTerm;


  })

  let html = "";
  for(let i=0; i< result.length;i++){
      html = html + createTemplate(result[i]);
      console.log(html);
  }

$(".results").html(html);

})

function createTemplate(info){
  return `
  <div>
        <h2>${info.name}</h2>
        <p> ${info.region}, ${info.organisation}</p>

        </div>

  `;
}
