const Features = document.getElementById('Features');
const Company = document.getElementById('Company');
const btnFeatures = document.getElementById("btnFeatures")
const btnCompany = document.getElementById("btnCompany")

btnFeatures.addEventListener('click',() => {

    if(Features.classList.contains('hidden')){

        Features.classList.remove("hidden")
    }else{
        Features.classList.add('hidden')
    }
});

btnCompany.addEventListener('click',() => {

    if(Company.classList.contains('hidden')){

        Company.classList.remove("hidden")
    }else{
        Company.classList.add('hidden')
    }
})

