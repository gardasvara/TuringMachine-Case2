// Variabel input
const add = document.getElementById("add");
const var_a = document.getElementById("var_a");

// Menampilkan jawaban perpangkatan
function showPerpangkatanAns(){
    const ans = Math.pow(add.value, var_a.value);
    document.getElementById("ans").textContent = ans;
    document.getElementById("pow").value = ans;
}

// Eksekusi perpangkatan
function execute_perpangkatan() {
    if (add.value > 0 && var_a.value > 0) {
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
        it = 2; // Awal head
        state = 0; // Awal state

        // Memasukkan 0 sebanyak add
        for (let i = 0; i < add.value; i++) {
            tapeCells.push(new Cell("0"));
        }
        // Pembatas
        tapeCells.push(new Cell("C"));
        // Memasukkan 0 sebanyak var_a
        for (let i = 0; i < var_a.value; i++) {
            tapeCells.push(new Cell("0"));
        }
        // Pembatas
        tapeCells.push(new Cell("C"));
        // Blank symbol di akhir tape
        tapeCells.push(new Cell("B"));
        tapeCells.push(new Cell("B"));

        showPerpangkatanAns();
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
                    move("0", 1, 0);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", 1, 1);
                }
                break;
k
            case 1:
                if (tapeCells[it].symbol === "0") {
                    move("B", -1, 2);
                }
                break;

            case 2:
                if (tapeCells[it].symbol === "C") {
                    move("C", -1, 2);
                } else if (tapeCells[it].symbol === "0") {
                    move("X", 1, 3);
                }
                break;

            case 3:
                if (tapeCells[it].symbol === "X") {
                    move("X", 1, 3);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", 1, 4);
                }
                break;

            case 4:
                if (tapeCells[it].symbol === "0") {
                    move("0", 1, 4);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", 1, 4);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", 1, 5);
                }
                break;

            case 5:
                if (tapeCells[it].symbol === "0") {
                    move("0", 1, 5);
                } else if (tapeCells[it].symbol === "B") {
                    move("0", -1, 6, 1);
                }
                break;

            case 6:
                if (tapeCells[it].symbol === "0") {
                    move("0", -1, 6);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", -1, 6);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", -1, 6);
                } else if (tapeCells[it].symbol === "X") {
                    move("X", -1, 7);
                }
                break;

            case 7:
                if (tapeCells[it].symbol === "X") {
                    move("X", -1, 7);
                } else if (tapeCells[it].symbol === "0") {
                    move("X", 1, 3);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", 1, 8);
                }
                break;

            case 8:
                if (tapeCells[it].symbol === "C") {
                    move("C", -1, 8);
                } else if (tapeCells[it].symbol === "X") {
                    move("0", 1, 8);
                } else if (tapeCells[it].symbol === "0") {
                    move("X", 1, 9);
                }
                break;

            case 9:
                if (tapeCells[it].symbol === "C") {
                    move("C", 1, 10);
                }
                break;

            case 10:
                if (tapeCells[it].symbol === "B") {
                    move("B", 1, 10);
                } else if (tapeCells[it].symbol === "0") {
                    move("B", -1, 18);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", -1, 23);
                }
                break;

            case 11:
                if (tapeCells[it].symbol === "X") {
                    move("X", -1, 11);
                } else if (tapeCells[it].symbol === "0") {
                    move("X", 1, 12);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", 1, 19);
                }
                break;

            case 12:
                if (tapeCells[it].symbol === "X") {
                    move("X", 1, 12);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", 1, 13);
                }
                break;

            case 13:
                if (tapeCells[it].symbol === "0") {
                    move("0", 1, 13);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", 1, 13);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", 1, 14);
                }
                break;

            case 14:
                if (tapeCells[it].symbol === "0") {
                    move("0", 1, 14);
                } else if (tapeCells[it].symbol === "Y") {
                    move("Y", 1, 14);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", -1, 15);
                }
                break;

            case 15:
                if (tapeCells[it].symbol === "Y") {
                    move("Y", -1, 15);
                } else if (tapeCells[it].symbol === "0") {
                    move("Y", 1, 16);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", -1, 18);
                }
                break;

            case 16:
                if (tapeCells[it].symbol === "0") {
                    move("0", 1, 16);
                } else if (tapeCells[it].symbol === "Y") {
                    move("Y", 1, 16);
                } else if (tapeCells[it].symbol === "B") {
                    move("0", -1, 17, 1);
                }
                break;

            case 17:
                if (tapeCells[it].symbol === "0") {
                    move("0", -1, 17);
                } else if (tapeCells[it].symbol === "Y") {
                    move("Y", -1, 15);
                }
                break;

            case 18:
                if (tapeCells[it].symbol === "0") {
                    move("0", -1, 18);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", -1, 18);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", -1, 11);
                }
                break;

            case 19:
                if (tapeCells[it].symbol === "X") {
                    move("0", 1, 19);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", 1, 20);
                }
                break;

            case 20:
                if (tapeCells[it].symbol === "0") {
                    move("0", 1, 20);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", 1, 20);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", 1, 21);
                }
                break;

            case 21:
                if (tapeCells[it].symbol === "0") {
                    move("0", -1, 21);
                } else if (tapeCells[it].symbol === "Y") {
                    move("0", 1, 21);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", -1, 22);
                }
                break;

            case 22:
                if (tapeCells[it].symbol === "0") {
                    move("0", -1, 22);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", -1, 22);
                } else if (tapeCells[it].symbol === "C") {
                    move("C", -1, 8);
                }
                break;

            case 23:
                if (tapeCells[it].symbol === "B") {
                    move("B", -1, 23);
                } else if (tapeCells[it].symbol === "C") {
                    move("B", -1, 24);
                }
                break;

            case 24:
                if (tapeCells[it].symbol === "0") {
                    move("B", -1, 24);
                } else if (tapeCells[it].symbol === "X") {
                    move("B", -1, 24);
                } else if (tapeCells[it].symbol === "B") {
                    move("B", 1, 24);
                } else if (tapeCells[it].symbol === "C") {
                    move("B", 1, 25);
                }
                break;

            case 25:
                reachedEndState();
                break;

            default:
                console.error("Unknown state:", state);
                break;
        }
    }
    // const ans = Math.pow(add.value, var_a.value);
    // document.getElementById("ans").textContent = ans;
    // document.getElementById("pow").value = ans;
}
