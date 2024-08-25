class MapGenerator {

    renderMap = function(){
        //se esta asignando la tabla a una variable
        let mainTable = document.getElementById("mainTable");

        //generando las 3 secciones
        //enemigos, neutro, nuestro
        let rows = this.#rowsGenerator("enemy");
        rows += this.#rowsGenerator("neutral");
        rows += this.#rowsGenerator("mine");

        mainTable.innerHTML = rows;
    }

    #rowsGenerator = function(side){
        let render = "<tr>";
        for(let i = 0; i<7; i++){
            render += "<td class='" + side + "'>" 
                + (i+1) + 
                "</td>";
        }
        render += "</tr>"
        return render;
    }
}