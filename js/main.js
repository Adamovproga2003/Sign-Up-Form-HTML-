const maleGender = document.querySelector('.male');
const signMale = document.querySelector('.flaticon-male');
const signFemale = document.querySelector('.flaticon-femenine');
const femaleGender = document.querySelector('.female');
const bronze = document.querySelector('.bronze');
const silver = document.querySelector('.silver');
const gold = document.querySelector('.gold');

bronze.addEventListener('click', () => {
	if (silver.classList.contains('active-subscription')){
		silver.classList.remove('active-subscription');
		bronze.classList.add('active-subscription');
	}else if(gold.classList.contains('active-subscription')){
		gold.classList.remove('active-subscription');
		bronze.classList.add('active-subscription');
	}else{
		bronze.classList.add('active-subscription');
	}
});

silver.addEventListener('click', () => {
	if (bronze.classList.contains('active-subscription')){
		bronze.classList.remove('active-subscription');
		silver.classList.add('active-subscription');
	}else if(gold.classList.contains('active-subscription')){
		gold.classList.remove('active-subscription');
		silver.classList.add('active-subscription');
	}else{
		silver.classList.add('active-subscription');
	}
});

gold.addEventListener('click', () => {
	if (silver.classList.contains('active-subscription')){
		silver.classList.remove('active-subscription');
		gold.classList.add('active-subscription');
	}else if(bronze.classList.contains('active-subscription')){
		bronze.classList.remove('active-subscription');
		gold.classList.add('active-subscription');
	}else{
		gold.classList.add('active-subscription');
	}
});

maleGender.addEventListener('click', () => {
	if (signFemale.classList.contains('active')){
		signFemale.classList.remove('active');
		signMale.classList.add('active');
	}else{
		signMale.classList.add('active');
	}	
});

femaleGender.addEventListener('click', () => {
	if (signMale.classList.contains('active')){
		signMale.classList.remove('active');
		signFemale.classList.add('active');
	}else{
		signFemale.classList.add('active');
	}
});


