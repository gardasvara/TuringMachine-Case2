// Variabel input
const var_m = document.getElementById("var_m");
const var_n = document.getElementById("var_n");

// Menampilkan jawaban penjumlahan
function showPenjumlahanAns() {
    const ans = +var_m.value + +var_n.value;
    document.getElementById("ans").textContent = ans;
    document.getElementById("add").value = ans;
}

// Eksekusi penjumlahan
function execute_jumlah() {
    // Memastikan kedua input positif
    if (var_m.value >= 0 && var_n.value >= 0) {
        // Mengosongkan dan mengaktifkan opsi kecepatan
        executeClear();
        enableSpeed();

        // Mengaktifkan tombol play, next move, clear
        enableButton(0);
        enableButton(2);
        enableButton(3);

        // Menonaktifkan tombol pause
        disableButton(1);

        // Inisialisasi tape dengan blank symbol di awal
        tapeCells.push(new Cell("B"));
        tapeCells.push(new Cell("B"));
        tmTape.childNodes[1].className += " active";
        it = 2;
        state = 0;

        // Menambahkan 0 sebanyak var_m
        for (let i = 0; i < var_m.value; i++) {
            tapeCells.push(new Cell("0"));
        }

        // Tanda penjumlahan
        tapeCells.push(new Cell("C"));

        // Menambahkan 0 sebanyak var_n
        for (let i = 0; i < var_n.value; i++) {
            tapeCells.push(new Cell("0"));
        }

        // Blank symbol di akhir tape
        tapeCells.push(new Cell("B"));
        tapeCells.push(new Cell("B"));
    }
}

// Eksekusi langkah berikutnya
function executeNextMove() {
    if (tapeCells[0]) {
        const curCell = document.getElementsByClassName("active");
        Array.from(curCell).forEach(cell => {
            cell.classList.remove("active");
        });

        switch (state) {
            case 0:
                if (tapeCells[it].symbol === "0") {
                    move("B", 1, 1);
                } else if (tapeCells[it].symbol === "C") {
                    move("B", 1, 5);
                }
                break;

            case 1:
                if (tapeCells[it].symbol === "0") {
                    move("0", 1, 1);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", 1, 2);
                }
                break;

            case 2:
                if (tapeCells[it].symbol === "0") {
                    move("0", 1, 2);
                } else if (tapeCells[it].symbol === "B") {
                    move("0", -1, 3, 1);
                }
                break;

            case 3:
                if (tapeCells[it].symbol === "0") {
                    move("0", -1, 3);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", -1, 4);
                }
                break;

            case 4:
                if (tapeCells[it].symbol === "0") {
                    move("0", -1, 4);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", 1, 0);
                }
                break;

            case 5:
                reachedEndState();
                break;
        }
    }
}
