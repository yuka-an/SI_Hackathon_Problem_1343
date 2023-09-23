document.addEventListener("DOMContentLoaded", function () {//loads the dom before executing rest of the code
    const container = document.getElementById('container');
    container.style.backgroundColor = 'rgb(233, 202, 63)';
    container.style.width = '1000px';
    container.style.height = '800px';
    container.style.fontSize = '50px';
    container.style.fontFamily = 'sans-serif';
    container.style.borderRadius = '15px';
    container.style.padding = '10px';
    const calc = document.getElementById('calc');
    calc.style.backgroundColor = 'rgb(218, 216, 190)';
    calc.style.height = '650px';
    calc.style.width = '650px';
    calc.style.borderRadius = '15px';
    calc.style.display = 'flex';
    calc.style.alignItems = 'center';
    calc.style.justifyContent = 'center';
    calc.style.padding = '10px';
    calc.style.flexDirection = 'column';
    const disp = document.createElement('input');
    disp.value = '';
    disp.style.width = '500px';
    disp.style.height = '75px';
    disp.style.borderRadius = '10px';
    disp.style.border = '10px solid rgb(42, 27, 6)';
    disp.style.margin = '10px';
    disp.style.padding = '10px';
    disp.style.fontSize = '50px';
    disp.style.textAlign = 'right';
    calc.appendChild(disp);
    const buttons = document.createElement('div');
    buttons.style.backgroundColor = 'rgb(223, 212, 60)';
    buttons.style.width = '500px';
    buttons.style.height = '500px';
    buttons.style.border = '10px solid rgb(42, 27, 6)';
    buttons.style.borderRadius = '10px';
    buttons.style.padding = '10px';
    calc.appendChild(buttons);
    const bac = document.createElement('button');
    bac.textContent = 'AC';
    buttons.appendChild(bac);
    const beq = document.createElement('button');
    beq.textContent = '=';
    buttons.appendChild(beq);
    const bp = document.createElement('button');
    bp.textContent = '+';
    buttons.appendChild(bp);
    const bsub = document.createElement('button');
    bsub.textContent = '-';
    buttons.appendChild(bsub);
    const b1 = document.createElement('button');
    b1.textContent = '1';
    buttons.appendChild(b1);
    const b2 = document.createElement('button');
    b2.textContent = '2';
    buttons.appendChild(b2);
    const b3 = document.createElement('button');
    b3.textContent = '3';
    buttons.appendChild(b3);
    const bmul = document.createElement('button');
    bmul.textContent = '*';
    buttons.appendChild(bmul);
    const b4 = document.createElement('button');
    b4.textContent = '4';
    buttons.appendChild(b4);
    const b5 = document.createElement('button');
    b5.textContent = '5';
    buttons.appendChild(b5);
    const b6 = document.createElement('button');
    b6.textContent = '6';
    buttons.appendChild(b6);
    const bdiv = document.createElement('button');
    bdiv.textContent = '/';
    buttons.appendChild(bdiv);
    const b7 = document.createElement('button');
    b7.textContent = '7';
    buttons.appendChild(b7);
    const b8 = document.createElement('button');
    b8.textContent = '8';
    buttons.appendChild(b8);
    const b9 = document.createElement('button');
    b9.textContent = '9';
    buttons.appendChild(b9);
    const b0 = document.createElement('button');
    b0.textContent = '0';
    buttons.appendChild(b0);
    let dis = disp.value;
    b1.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '1';
    })
    b2.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '2';
    })
    b3.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '3';
    })
    b4.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '4';
    })
    b5.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '5';
    })
    b6.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '6';
    })
    b7.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '7';
    })
    b8.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '8';
    })
    b9.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '9';
    })
    b0.addEventListener('click', function () {
        dis = disp.value;
        disp.value = dis + '0';
    })
    bac.addEventListener('click', function () {
        disp.value = '';
    })
    bp.addEventListener('click', function () {
        let dis = disp.value;
        if (dis.includes("+") || dis.includes("-") || dis.includes("*") || dis.includes("/")) {
            let a, o, b, k;
            for (let i = 0; i < dis.length; i++) {
                if (dis[i] == '+' || dis[i] == '-' || dis[i] == '*' || dis[i] == '/') {
                    k = i;
                    o = dis[i];
                    break;
                }
            }
            a = dis.slice(0, k);
            b = dis.slice(k + 1);
            let result = 0;
            if (o === '+') {
                result = parseFloat(a) + parseFloat(b);
            } else if (o === '-') {
                result = parseFloat(a) - parseFloat(b);
            } else if (o === '*') {
                result = parseFloat(a) * parseFloat(b);
            } else if (o === '/') {
                result = parseFloat(a) / parseFloat(b);
            }
            dis = result.toString() + '+';
            disp.value = dis;
        } else {
            dis += '+';
            disp.value = dis;
        }
    });
    bsub.addEventListener('click', function () {
        let dis = disp.value;
        if (dis.includes("+") || dis.includes("-") || dis.includes("*") || dis.includes("/")) {
            let a, o, b, k;
            for (let i = 0; i < dis.length; i++) {
                if (dis[i] == '+' || dis[i] == '-' || dis[i] == '*' || dis[i] == '/') {
                    k = i;
                    o = dis[i];
                    break;
                }
            }
            a = dis.slice(0, k);
            b = dis.slice(k + 1);
            let result = 0;
            if (o === '+') {
                result = parseFloat(a) + parseFloat(b);
            } else if (o === '-') {
                result = parseFloat(a) - parseFloat(b);
            } else if (o === '*') {
                result = parseFloat(a) * parseFloat(b);
            } else if (o === '/') {
                result = parseFloat(a) / parseFloat(b);
            }
            dis = result.toString() + '-';
            disp.value = dis;
        } else {
            dis += '-';
            disp.value = dis;
        }
    })
    bmul.addEventListener('click', function () {
        let dis = disp.value;
        if (dis.includes("+") || dis.includes("-") || dis.includes("*") || dis.includes("/")) {
            let a, o, b, k;
            for (let i = 0; i < dis.length; i++) {
                if (dis[i] == '+' || dis[i] == '-' || dis[i] == '*' || dis[i] == '/') {
                    k = i;
                    o = dis[i];
                    break;
                }
            }
            a = dis.slice(0, k);
            b = dis.slice(k + 1);
            let result = 0;
            if (o === '+') {
                result = parseFloat(a) + parseFloat(b);
            } else if (o === '-') {
                result = parseFloat(a) - parseFloat(b);
            } else if (o === '*') {
                result = parseFloat(a) * parseFloat(b);
            } else if (o === '/') {
                result = parseFloat(a) / parseFloat(b);
            }
            dis = result.toString() + '*';
            disp.value = dis;
        } else {
            dis += '*';
            disp.value = dis;
        }
    })
    bdiv.addEventListener('click', function () {
        let dis = disp.value;
        if (dis.includes("+") || dis.includes("-") || dis.includes("*") || dis.includes("/")) {
            let a, o, b, k;
            for (let i = 0; i < dis.length; i++) {
                if (dis[i] == '+' || dis[i] == '-' || dis[i] == '*' || dis[i] == '/') {
                    k = i;
                    o = dis[i];
                    break;
                }
            }
            a = dis.slice(0, k);
            b = dis.slice(k + 1);
            let result = 0;
            if (o === '+') {
                result = parseFloat(a) + parseFloat(b);
            } else if (o === '-') {
                result = parseFloat(a) - parseFloat(b);
            } else if (o === '*') {
                result = parseFloat(a) * parseFloat(b);
            } else if (o === '/') {
                result = parseFloat(a) / parseFloat(b);
            }
            dis = result.toString() + '/';
            disp.value = dis;
        } else {
            dis += '/';
            disp.value = dis;
        }
    })
    beq.addEventListener('click', function () {
        let dis = disp.value;
        if (dis.includes("+") || dis.includes("-") || dis.includes("*") || dis.includes("/")) {
            let a, o, b, k;
            for (let i = 0; i < dis.length; i++) {
                if (dis[i] == '+' || dis[i] == '-' || dis[i] == '*' || dis[i] == '/') {
                    k = i;
                    o = dis[i];
                    break;
                }
            }
            a = dis.slice(0, k);
            b = dis.slice(k + 1);
            let result = 0;
            if (o === '+') {
                result = parseFloat(a) + parseFloat(b);
            } else if (o === '-') {
                result = parseFloat(a) - parseFloat(b);
            } else if (o === '*') {
                result = parseFloat(a) * parseFloat(b);
            } else if (o === '/') {
                result = parseFloat(a) / parseFloat(b);
            }
            dis = result.toString()
            disp.value = dis;
        }
    })
});