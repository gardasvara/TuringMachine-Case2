// Variabel input
const pow = document.getElementById("pow");   
const var_b = document.getElementById("var_b");  

// Show answer
function showPembagianAns() {
    // Pembagian
    let ans = Math.floor(pow.value/var_b.value);

    // Menampilkan jawaban
    let ansField = document.getElementById("ans");
    ansField.textContent = ans;
}

// Tampilkan tape
function execute_pembagian() {
    // Jika kondisi terpenuhi
    if (pow.value && var_b.value && parseInt(pow.value) > 0 && parseInt(var_b.value) > 0) {
        // Clear
        executeClear();

        // Enable speed option
        enableSpeed();

        // Enable button play, nextmove, clear
        enableButton(0);
        enableButton(2);
        enableButton(3);

        // Disable button pause
        disableButton(1);

        // Menambah blank symbol di awal
        tapeCells.push(new Cell("B"));
        tapeCells.push(new Cell("B"));
        tmTape.childNodes[1].className += " active";
        it = 2; // Awal head
        state = 0; // Awal state
        
        // Memasukkan 0 sejumlah pow
        for (let i = 0; i < pow.value; i++) {
            tapeCells.push(new Cell("0"));
        }
        // Pembatas
        tapeCells.push(new Cell("C"));
        // Memasukkan 0 sejumlah var_b
        for (let i = 0; i < var_b.value; i++) {
            tapeCells.push(new Cell("0"));
        }
        // Pembatas
        tapeCells.push(new Cell("C"));
        // Blank symbol di akhir tape
        tapeCells.push(new Cell("B"));
        tapeCells.push(new Cell("B"));

        showPembagianAns();
    }
}

// Next move button
function executeNextMove() {
    // Pembagian
    // Jika ada
    if (tapeCells[0]) {
        // Deactivate 
        let curCell = document.getElementsByClassName("active");
        for (let i = 0; i < curCell.length; i++) {
            curCell[i].className = curCell[i].className.replace(" active", "");
        }

        // STATE 0
        switch (state) {
            case 0:
                // 0/0,R to state 0
                if (tapeCells[it].symbol == "0") {
                    move("0", 1, 0);
                }
                // C/C,R to state 1
                else if (tapeCells[it].symbol == "C") {
                    move("C", 1, 1);
                }
                break;

            // STATE 1
            case 1:
                // 0 / 0, R to state 1
                if (tapeCells[it].symbol == "0") {
                    move("0", 1, 1);
                }
                // C/C,L to state 2
                else if (tapeCells[it].symbol == "C") {
                    move("C", -1, 2);
                }
                break;

            // STATE 2
            case 2:
                // 0 / X, L to state 3
                if (tapeCells[it].symbol == "0") {
                    move("X", -1, 3);
                }
                // C / C, R to state 7
                else if (tapeCells[it].symbol == "C") {
                    move("C", 1, 7);
                }
                break;

            // STATE 3
            case 3:
                // 0 / 0, L to state 3
                if (tapeCells[it].symbol == "0") {
                    move("0", -1, 3);
                }
                // C / C, L to state 4
                else if (tapeCells[it].symbol == "C") {
                    move("C", -1, 4);
                }
                break;

            // STATE 4
            case 4:
                // Y / Y, L to state 4
                if (tapeCells[it].symbol == "Y") {
                    move("Y", -1, 4);
                }
                // 0/Y,R to state 5
                else if (tapeCells[it].symbol == "0") {
                    move("Y", 1, 5);
                }
                // B / B, R to state 10
                else if (tapeCells[it].symbol == "B") {
                    move("B", 1, 10);
                }
                break;

            // STATE 5
            case 5:
                // Y/Y,R to state 5
                if (tapeCells[it].symbol == "Y") {
                    move("Y", 1, 5);
                }
                // C/C,R to state 6
                else if (tapeCells[it].symbol == "C") {
                    move("C", 1, 6);
                }
                break;

            // STATE 6
            case 6:
                // 0/0,R to state 6
                if (tapeCells[it].symbol == "0") {
                    move("0", 1, 6);
                }
                // X/X,L to state 2
                else if (tapeCells[it].symbol == "X") {
                    move("X", -1, 2);
                }
                break;

            // STATE 7
            case 7:
                // X/0,R to state 7
                if (tapeCells[it].symbol == "X") {
                    move("0", 1, 7);
                }
                // C/C,R to state 8
                else if (tapeCells[it].symbol == "C") {
                    move("C", 1, 8);
                }
                break;

            // STATE 8
            case 8:
                // 0/0,R to state 8
                if (tapeCells[it].symbol == "0") {
                    move("0", 1, 8);
                }
                // B/0,L to state 9
                else if (tapeCells[it].symbol == "B") {
                    move("0", -1, 9, 1);
                }
                break;

            // STATE 9
            case 9:
                // 0/0,L to state 9
                if (tapeCells[it].symbol == "0") {
                    move("0", -1, 9);
                }
                // C/C,L to state 2
                else if (tapeCells[it].symbol == "C") {
                    move("C", -1, 2);
                }
                break;

            // STATE 10
            case 10:
                // Y/B,R to state 10
                if (tapeCells[it].symbol == "Y") {
                    move("B", 1, 10);
                }
                // C/B,R to state 11
                else if (tapeCells[it].symbol == "C") {
                    move("B", 1, 11);
                }
                break;

            // STATE 11
            case 11:
                // 0/B,R to state 11
                if (tapeCells[it].symbol == "0") {
                    move("B", 1, 11);
                }
                // X/B,R to state 11
                else if (tapeCells[it].symbol == "X") {
                    move("B", 1, 11);
                }
                // C/B,R to state 12
                else if (tapeCells[it].symbol == "C") {
                    move("B", 1, 12);
                }
                break;

            // STATE 12 (FINAL STATE)
            case 12:
                reachedEndState();
                break;
        }
    }
}
