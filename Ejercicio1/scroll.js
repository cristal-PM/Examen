
			function cargar(){
				var barra = document.getElementById('barra')
                barra.value +=10
                if (barra.value == 100) {
                    document.getElementById("ban").style.display = "none";
                } else {
                    document.getElementById("ban").style.display = "block";
                }
				 
			}
            function iniciar(){
				var barra = document.getElementById('barra')
				 barra.value=0
                 //document.getElementById("ban").style.height = "0%";
                 document.getElementById("ban").style.display = "none";
			}
        
           