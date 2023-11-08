document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    setTimeout(() => {
        logo.classList.add("expanded");
    }, 300);

    // setTimeout(() => {
    //     logo.classList.add("place-header");
    //     logo.addEventListener("transitionend", function (event) {
    //         if (event.propertyName === "transform") {
    //             document.getElementById("content").classList.add("display");
    //             document.getElementById("mode-switch").classList.add("display");
    //         }
    //     });
    // }, 3000);

});


var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        const selectItems = this.nextSibling;
        const rect = selectItems.getBoundingClientRect();
        if (window.innerHeight - rect.bottom < rect.top) {
            selectItems.classList.add("select-up");
        } else {
            selectItems.classList.remove("select-up");
        }
        selectItems.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);


document.addEventListener('DOMContentLoaded', function () {
    var helpIcons = document.querySelectorAll('.help-icon');

    helpIcons.forEach(function (helpIcon) {
        helpIcon.addEventListener('click', function () {
            openModal();
        });
    });
});

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function (event) {
    var modal = document.getElementById('modal');
    var closeBtn = document.querySelector('.close');
    if (event.target === modal || event.target === closeBtn) {
        closeModal();
    }
};

function changeColor(inputElement) {
    const wrapper = inputElement.closest('.wrapper');
    const inputCheckGroups = wrapper.querySelectorAll('.input-check-group');

    inputCheckGroups.forEach((inputCheckGroup) => {
        const input = inputCheckGroup.querySelector('.input');
        if (input === inputElement) {
            inputCheckGroup.classList.add('active');
            inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = '#d7d7d758';
        } else {
            inputCheckGroup.classList.remove('active');
            inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = 'rgba(0, 0, 0, 0.00)';
        }
    });
}

function changeColorLight(inputElement) {
    const wrapper = inputElement.closest('.wrapper');
    const inputCheckGroups = wrapper.querySelectorAll('.input-check-group');

    inputCheckGroups.forEach((inputCheckGroup) => {
        const input = inputCheckGroup.querySelector('.input');
        if (input === inputElement) {
            inputCheckGroup.classList.add('active');
            inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = 'rgba(0, 0, 0, 0.150)';
        } else {
            inputCheckGroup.classList.remove('active');
            inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = 'rgba(0, 0, 0, 0.00)';
        }
    });
}

function displayFileName(input) {
    const fileName = input.files[0].name;
    const fileInputLabel = document.getElementById('fileInputLabel');
    fileInputLabel.textContent = fileName;
    fileInputLabel.setAttribute('data-file-name', fileName);
}

// const image = document.getElementById("image");
// image.style.height = "55vh";
// image.src = "./nightPng.png";
// logo.classList.add("header-top");

document.getElementById('mode-switch').addEventListener('click', function () {
    var modeSwitch = document.getElementById('mode-switch');

    if (modeSwitch.classList.contains('night')) {
        window.location.href = "index-light.html"
    } else if (modeSwitch.classList.contains('sun')) {
        window.location.href = "index.html"
    }
});

const logoWrapper = document.querySelector('.logo-wrapper');

// let isScrolledToTop = false;

// window.addEventListener('scroll', () => {
//     const currentScrollPos = window.pageYOffset;

//     if (currentScrollPos === 0) {
//         isScrolledToTop = true;
//     } else {
//         isScrolledToTop = false;
//     }

//     if (isScrolledToTop) {
//         logoWrapper.classList.remove('opacity-zero');
//         logoWrapper.classList.add('expanded-after', 'place-header-after');
//     } else {
//         logoWrapper.classList.add('opacity-zero');
//         logoWrapper.classList.remove('expanded', 'place-header', 'expanded-after', 'place-header-after');
//     }
// });

let isScrolledToTop = true;
let previousScrollPos = window.pageYOffset;

function handleScroll() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > previousScrollPos) {
        isScrolledToTop = false;
        logoWrapper.classList.add('opacity-zero');
        logoWrapper.classList.remove('expanded', 'place-header', 'expanded-after', 'place-header-after');
    } else {
        isScrolledToTop = currentScrollPos <= 120;
        if (isScrolledToTop) {
            logoWrapper.classList.remove('opacity-zero');
            logoWrapper.classList.add('expanded-after', 'place-header-after');
        }
    }

    previousScrollPos = currentScrollPos;

    window.requestAnimationFrame(handleScroll);
}

window.addEventListener('scroll', handleScroll);


