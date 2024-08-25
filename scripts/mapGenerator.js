class MapGenerator {

    renderMap = function(){
        //crea la tabla
        this.#generateMainTable();

        //se esta asignando la tabla a una variable
        let mainTable = document.getElementById(SETUP_TableNameID);

        //generando las 3 secciones
        //enemigos, neutro, nuestro
        let rows = this.#rowsGenerator(enum_mapSides.enemy, SETUP_player_rows);
        rows += this.#rowsGenerator(enum_mapSides.neutral, SETUP_neutral_rows);
        rows += this.#rowsGenerator(enum_mapSides.ally, SETUP_player_rows);

        mainTable.innerHTML = rows;
    }

    #generateMainTable = function(){
        document.body.innerHTML = "<table id='"+ SETUP_TableNameID +"'></table>";
    }

    #rowsGenerator = function(side, rows){
        let render = "";
        for(let iRows = 0 ; iRows<rows; iRows++){
            render += "<tr>";
            for(let i = 0; i<7; i++){
                render += "<td class='" + side + "'>" 
                    + (i+1) + 
                    "</td>";
            }
            render += "</tr>"
        }        
        return render;
    }
}