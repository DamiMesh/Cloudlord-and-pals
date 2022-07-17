const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .fa-bars');
const sidebar = document.getElementById('sidebar');
const studentImage = document.getElementById("student-img")
console.log(studentImage)

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
	studentImage.classList.toggle('remove')
	console.log(sidebar)
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const getImageContainer = document.getElementById("student-img")
const profileImg = document.querySelector(".profile")
const socialBox = document.querySelector(".social-box")

// get items from local storage

let getData = JSON.parse(localStorage.getItem('data'))
console.log(getData)
const getProfile = () =>{
   
   const {name, track, img } = getData
    getImageContainer.innerHTML += `
	
	<img src= ${img} alt="">

	<p class="name">${name}</p>
	<p class="trac">${track}</p>`

	profileImg.innerHTML += `
	<img src= ${img} alt="">
	`

	return getData;

	}

	getProfile()



  let container = document.getElementById("container")
	const dashboard = () =>{
 

		const { socialmedia:{linkedin, github, twitter, portfolio} } = getData

container.innerHTML = `

<div class="head-title">
<div class="left">
	<p>Slack Handle</p>
	<ul class="breadcrumb">
		<li>
			<h1><i class="fab fa-slack"></i></h1></li>
		<li>
			<h1 href="#">Cloudlord</h1>
		</li>
		
		
	</ul>
</div>

</div>

<div class="social-box">


<div>
<a href= ${linkedin} target =_blank>
             <i class="fab fa-linkedin-in"></i>
					<span class="text">
						<h3>Linkedin</h3>
						
					</span>
					</a>

				</div>

				<div>
				<a href=${twitter} target =_blank>
				<i class="fab fa-twitter"></i>
					<span class="text">
						<h3>Twitter</h3>
					
					</span>
					</a>
				</div>

				<div>
				<a href=${github} target = _blank>
				<i class="fab fa-github"></i>
					<span class="text">
						<h3>GitHub</h3>
						
					</span>
					</a>
				</div>

				<div>
				<a href=${portfolio} target =_blank>
				<i class="fas fa-briefcase"></i>
					<span class="text">
						<h3>Portfolio</h3>
						
					</span>
					</a>
				</div>
				
</div>

`

container.classList.remove("container-style")

	}

dashboard()
console.log(getData)
const {project} = getData
console.log(project)

const projects = ()=>{

	const {project:{first, second, third}} = getData
	
	container.innerHTML =`

	<div class="head-title">
	<div class="left">
	<h1 href="#">Project</h1>
		<p>Click on the below link to checkout my works</p>
		
	</div>
	
	</div>
	
	<div class="project-box">
	
	
	<div>
	
				 
						<span class="text">
							<h3>${first.projectname}</h3>
							
						</span>

						<p class="project-description">${first.projectdescription} </p>
						<a href=${first.projectlink} target =_blank> ${first.projectname}
						</a>
	               
					</div>
	
					<div>
	
				 
						<span class="text">
							<h3>${second.projectname}</h3>
							
						</span>

						<p class="project-description">${second.projectdescription} </p>
						<a href=${second.projectlink} target =_blank> ${second.projectname}
						</a>
	               
					</div>

					<div>
	
				 
						<span class="text">
							<h3>${third.projectname}</h3>
							
						</span>

						<p class="project-description">${third.projectdescription} </p>
						<a href=${third.projectlink} target =_blank> ${third.projectname}
						</a>
	               
					</div>

					<div>
	
				 
						<span class="text">
							<h3>Linkedin</h3>
							
						</span>

						<p class="project-description">lorem ipsum </p>
						<a href="" target =_blank> Forbes.com
						</a>
	            
					</div>
					
	</div>
	
	`
	container.classList.remove("container-style")
}


const about =()=>{
   const {intro, introdetails}=getData.description
   console.log(introdetails)
	container.innerHTML =`
	
	<div class="head-title">
	<div class="left">
	<h1 href="#">About Me</h1>
		<p>Below is the full description of myself</p>
		
	</div>
	
	</div>
	        <aside>
			<h2> My Story </h1>
         <p>
     ${intro}
		 </p>

		 <p>
  ${introdetails}
		 </p>
			</aside>
	`
	container.classList.remove("container-style")

	console.log(container)
}

// all JSON
let getAllStudent = async () => {
	let response = await fetch('../studentdata.json') 
	let result = await response.json() 
		return result
   }
   
   let output;
   
   (async () => {
   
	   try {
   
		   const res = await getAllStudent()
		       res.data.students
		   
	   } catch (error) {
		   console.log("Not found", error)
	   }
	
   })()
   
   

const storeCircle = async () =>{
	const res = await getAllStudent()
 let response = res.data.students
	
    const newArr = response.filter( item=> {
      
		 return getData.circle === item.circle

	})
	
	console.log(newArr)
	let circleBox = ''
	newArr.forEach( item =>{


		const {name, img, track} =item
  circleBox +=`
      <div class="circle-box">
        <img src= ${img}>
  
		<p class="name">${name}  </p>

		<p class ="track"> ${track}</p>
	  </div>
  `  


	})

	container.innerHTML = circleBox
  container.classList.add("container-style")
	console.log(container)
  
  }
  
  container.classList.remove("container-style")
  
// all tabs .js




// logout

const logout = ()=>{

 container.innerHTML = `
    <div class = "parent-logout">

	<div>
         <h2> Are you sure you want to go back home </h2>

		 <div class="links">
            <a href ="">Yes</a>

			<a href ="">No</a>
		 </div>
		 </div>
	</div>
 `

}