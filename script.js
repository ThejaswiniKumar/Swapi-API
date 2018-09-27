

let apiSelection = document.getElementsByClassName('sideBar');

let captureID;
let res;

const ul = document.getElementById('list');
const ul_details = document.getElementById('details');

let des_elems;
let select_elems;

/*Makes API CALL*/
for(let i = 0; i < apiSelection.length; i++) {
      apiSelection[i].addEventListener("click", (e) => {

      select_elems = document.querySelectorAll(".select");   
  
      [].forEach.call(select_elems, function(el) {
        el.classList.remove("select");
      });

     
      ul.innerHTML = "";
      ul_details.innerHTML ="";
      e.target.className = "sideBar select";
      captureID = apiSelection[i].id;
      getResults('https://swapi.co/api/'+ apiSelection[i].id +'/?results=10');
  })
}



/*Gets the results of API*/
function getResults(url){
  fetch(url)
      .then( response => response.json() )
      .then( data => { 
        console.log(data);
         res = data.results;  
           res.map( (res,index) => {

             let li = createNode('li'),            
             name = createTxtNode(res.name);
              
             append(li,name);
             appendClass(li,"lst_items");
             appendIndex(li,index);
             append(ul,li);   

          })
      })
      .catch( error => {
        console.log(JSON.stringify(error))
      })
}


/*Checks the condition and calls upon the function to describe in details */
ul.addEventListener('click', (e) => {

 des_elems = document.querySelectorAll(".description");

  [].forEach.call(des_elems, function(el) {
    el.classList.remove("description");
  });


   if (e.target && e.target.matches("li.lst_items")) {
      e.target.className = "lst_items description";
      let i = e.target.id;
      console.log(captureID);
      if(captureID == 'people'){
        getPeople_Details(i);
      }else if(captureID == 'planets') {
        getPlanet_Details(i);
      }else if(captureID == 'starships') {
        getStarship_Details(i);
      }else{
        getSpecies_Details(i);
      }
  }
})

function createNode(element) {
  return document.createElement(element);
}

function createTxtNode(name){
  return document.createTextNode(name);
}

function appendClass(li, lst_items) {
  return li.className = lst_items;
}

function appendIndex(li, index) {
  return li.id = index;
}

function append(parent, el) {
  return parent.appendChild(el);   
}




/*Displays the getails of Planets*/
function getPlanet_Details(i) {
ul_details.innerHTML = "";

ul_details.innerText = "List of Details about " +res[i].name+ " planet" + "\n\n" ;
 let li_climate =  createNode('li'),
     li_diameter = createNode('li'),
     li_gravity = createNode('li'),
     li_orbital_period = createNode('li'),
     li_population = createNode('li'),
     li_rotation_period = createNode('li'),
     li_surface_water = createNode('li'),
     li_terrain = createNode('li'),

      Climate =  createTxtNode("Climate : "+res[i].climate),
      diameter =  createTxtNode("Diameter : "+res[i].diameter),
      gravity =  createTxtNode("Gravity : "+res[i].gravity),
      orbital_period =  createTxtNode("Orbital_period : "+res[i].orbital_period),
      population =  createTxtNode("Population : "+res[i].population),
      rotation_period =  createTxtNode("Climate : "+res[i].rotation_period),
      surface_water =  createTxtNode("Surface_water : "+res[i].surface_water),
      terrain =  createTxtNode("Terrain : "+res[i].terrain);  
    
      append(li_climate,Climate);
      append(li_diameter,diameter);
      append(li_gravity,gravity);
      append(li_orbital_period,orbital_period);
      append(li_population,population);
      append(li_rotation_period,rotation_period);
      append(li_surface_water,surface_water);
      append(li_terrain,terrain);

      append(ul_details,li_climate);
      append(ul_details,li_diameter);
      append(ul_details,li_gravity);
      append(ul_details,li_orbital_period);
      append(ul_details,li_population);
      append(ul_details,li_rotation_period);
      append(ul_details,li_surface_water);
      append(ul_details,li_terrain);

}

/*Displays the getails of People*/
function getPeople_Details(j) {
  ul_details.innerHTML = "";
  ul_details.innerText = "List of Details about " + res[j].name+" person" + "\n\n" ;

      let li_birth = createNode('li'),
      li_eye = createNode('li'),
      li_gender = createNode('li'),
      li_hair = createNode('li'),
      li_height = createNode('li'),
      li_homeworld = createNode('li'),
      li_mass = createNode('li'),
      li_skin = createNode('li'),
      li_url = createNode('li'),


      birth_year =  createTxtNode("Birth Year : "+res[j].birth_year);
      eye_color =  createTxtNode("Eye Year : "+res[j].eye_color);
      gender =  createTxtNode("Gender : "+res[j].gender);
      hair_color =  createTxtNode("Hair Color : "+res[j].hair_color);
      height =  createTxtNode("Height : "+res[j].height);
      homeworld =  createTxtNode("Homeworld : "+res[j].homeworld);
      mass =  createTxtNode("Mass : "+res[j].mass);
      skin_color =  createTxtNode("Skin Color : "+res[j].skin_color);
      url =  createTxtNode("URL : "+res[j].url);

      append(li_birth,birth_year);
      append(li_eye,eye_color);
      append(li_gender,gender);
      append(li_hair,hair_color);
      append(li_height,height);
      append(li_homeworld,homeworld);
      append(li_mass,mass);
      append(li_skin,skin_color);
      append(li_url,url);

     append(ul_details,li_birth);
     append(ul_details,li_eye);
     append(ul_details,li_gender);
     append(ul_details,li_hair);
     append(ul_details,li_height);
     append(ul_details,li_homeworld);
     append(ul_details,li_mass);
     append(ul_details,li_skin);
     append(ul_details,li_url);

}
/*Displays the getails of Starships*/
function getStarship_Details(i) {
  ul_details.innerHTML = "";
  ul_details.innerText = "List of Details about " +  res[i].name + " starships" + "\n\n" ;

      let li_model = createNode('li'),
      li_length = createNode('li'),
      li_manufacturer = createNode('li'),
      li_passengers = createNode('li'),
      li_starship_clas = createNode('li'),
      li_crew = createNode('li'),
      li_MGLT = createNode('li'),
      li_cargo = createNode('li'),
      li_cost = createNode('li'),


      Model =  createTxtNode("Model : " +res[i].model);
      Length =  createTxtNode("Length : " +res[i].length);
      Manufacturer =  createTxtNode("Lanufacturer : " +res[i].manufacturer);
      Passengers =  createTxtNode("Lassengers : " +res[i].passengers);
      Starship_clas =  createTxtNode("Starship_clas : " +res[i].starship_clas);
      Crew =  createTxtNode("Crew : " +res[i].crew);
      MGLT =  createTxtNode("MGLT : " +res[i].MGLT);
      Cargo_capacity =  createTxtNode("Cargo capacity : " +res[i].cargo_capacity);
      Cost_in_credits =  createTxtNode("Cost in credits : " +res[i].cost_in_credits);

    
      append(li_model,Model);
      append(li_length,Length);
      append(li_manufacturer,Manufacturer);
      append(li_passengers,Passengers);
      append(li_starship_clas,Starship_clas);
      append(li_crew,Crew);
      append(li_MGLT,MGLT);
      append(li_cargo,Cargo_capacity);
      append(li_cost,Cost_in_credits);

      append(ul_details,li_model);
      append(ul_details,li_length);
      append(ul_details,li_manufacturer);
      append(ul_details,li_passengers);
      append(ul_details,li_starship_clas);
      append(ul_details,li_crew);
      append(ul_details,li_MGLT);
      append(ul_details,li_cost);

}
/*Displays the getails of Species*/
function getSpecies_Details(i) {
  ul_details.innerHTML = "";
  ul_details.innerText = "List of Details about " + res[i].name+ " species" + "\n\n" ;

    let li_name = createNode('li'),
      li_classification = createNode('li'),
      li_height = createNode('li'),
      li_lifespan = createNode('li'),
      li_designation = createNode('li'),
      li_eye = createNode('li'),
      li_language = createNode('li'),
      li_skin = createNode('li'),
      li_url = createNode('li'),


      name =  createTxtNode("Name : "+res[i].name);
      Classification =  createTxtNode("Classification : "+res[i].classification);
      average_height =  createTxtNode("Average height : "+res[i].average_height);
      average_lifespan =  createTxtNode("Average Lifespan : "+res[i].average_lifespan);
      designation =  createTxtNode("Designation : "+res[i].designation);
      eye_colors =  createTxtNode("Eye Colors : "+res[i].eye_colors);
      language =  createTxtNode("Language : "+res[i].language);     
      skin_colors =  createTxtNode("Skin colors : "+res[i].skin_colors);
      url =  createTxtNode("Url : "+res[i].url);
    
      append(li_name,name);
      append(li_classification,Classification);
      append(li_height,average_height);
      append(li_lifespan,average_lifespan);
      append(li_designation,designation);
      append(li_eye,eye_colors);
      append(li_language,language);
      append(li_skin,skin_colors);
      append(li_url,url);


      append(ul_details,li_name);
      append(ul_details,li_classification);
      append(ul_details,li_height);
      append(ul_details,li_lifespan);
      append(ul_details,li_designation);
      append(ul_details,li_eye);
      append(ul_details,li_language);
      append(ul_details,li_skin);
      append(ul_details,li_url);

}




