document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('langue').addEventListener('change', (event)=>{
        filtreTopics(event.target.value, document.getElementById('category').value, document.getElementById('status').value);
    })

    document.getElementById('category').addEventListener('change', (event)=>{
        filtreTopics(document.getElementById('langue').value, event.target.value, document.getElementById('status').value);
    })

    document.getElementById('status').addEventListener('change', (event)=>{
        filtreTopics(document.getElementById('langue').value, document.getElementById('category').value, event.target.value);
    })
    
    function filtreTopics(langue, category, status){
        var topics = document.querySelectorAll(".topic");

        for(let i = 0; i<topics.length; i++){
            if((category == topics[i].dataset.category || category == "all") && (langue == topics[i].dataset.langue || langue == "all") && (status == topics[i].dataset.status || status == "all")){
                topics[i].classList.remove("hidden");
            }
            else{
                topics[i].classList.add("hidden");
            }
        }
    }
});
