class MapGenerator {

    renderMap = function(){
        //crea la tabla
        this.#generateMainTable();

        //se esta asignando la tabla a una variable
        let mainTable = document.getElementById(SETUP_TableNameID);
        let rows = "";
        
        rows += this.#rowsGenerator(enum_mapSides.heroesStand, 1, SETUP_heroes_columns);

        rows += this.#rowsGenerator(enum_mapSides.enemy, SETUP_player_rows, SETUP_player_columns);
        rows += this.#rowsGenerator(enum_mapSides.neutral, SETUP_neutral_rows, SETUP_player_columns);
        rows += this.#rowsGenerator(enum_mapSides.ally, SETUP_player_rows, SETUP_player_columns);

        rows += this.#rowsGenerator(enum_mapSides.heroesStand, 1, SETUP_heroes_columns);

        mainTable.innerHTML = rows;
    }

    #generateMainTable = function(){
        document.body.innerHTML = "<table id='"+ SETUP_TableNameID +"'></table>";
    }

    #rowsGenerator = function(side, rows, columns){
        let render = "";
        for(let iRows = 0 ; iRows<rows; iRows++){
            render += "<tr>";
            for(let i = 0; i<columns; i++){
                render += "<td class='" + side + "'>" 
                    
                    "</td>";
            }
            render += "</tr>"
        }        
        return render;
    }
}