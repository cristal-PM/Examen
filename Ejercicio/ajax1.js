
function traerDatos(){
    const xhttp =new XMLHttpRequest();
xhttp.open('GET','numeros.json',true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status ==200){
      let datos = JSON.parse(this.responseText);  
      var barra = document.getElementById('tabla')
      res.innerHTML='';
      for (let i in datos.data)
   datos.data[i];
   {
res.innerHTML+=`
<tr>
<td>${item.data}</td>
</tr>`
    }
    }
}
}