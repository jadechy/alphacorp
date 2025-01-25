document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('status').addEventListener('change', (event)=>{
        filtreResponses(event);        
    })
    
    function filtreResponses(event){
        var code = event.target;
        
        const responses = document.querySelectorAll(".response");
    
        for(let i = 0; i<responses.length; i++){
            if(code.value == responses[i].dataset.status){
                responses[i].classList.remove("hidden");
            }
            else if(code.value == "all"){
                responses[i].classList.remove("hidden");
            }
            else{
                responses[i].classList.add("hidden");
            }
        }
    }
});
