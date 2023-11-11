// document.addEventListener("DOMContentLoaded", function () {
//     const logo = document.getElementById("logo");
//     const mode = document.getElementById("mode-switch");

//     setTimeout(() => {
//         logo.classList.add("expanded");
//     }, 300);

//     setTimeout(() => {
//         logo.classList.add("place-header");
//         logo.addEventListener("transitionend", function (event) {
//             if (event.propertyName === "transform") {
//                 document.getElementById("content").classList.add("display");
//                 document.getElementById("mode-switch").classList.add("display");
//                 const logoWrapper = document.querySelector('.logo-wrapper');

//                 let isScrolledToTop = true;
//                 let previousScrollPos = window.pageYOffset;
//                 let logoAnimationInProgress = false;

//                 function handleScroll() {
//                     const currentScrollPos = window.pageYOffset;

//                     if (currentScrollPos > previousScrollPos && !logoAnimationInProgress) {
//                         isScrolledToTop = false;
//                         logoWrapper.classList.add('opacity-zero');
//                         mode.classList.remove('display');
//                         logoWrapper.classList.remove('expanded', 'place-header', 'expanded-after', 'place-header-after');
//                     } else {
//                         isScrolledToTop = currentScrollPos == 0;
//                         if (isScrolledToTop) {
//                             if (!logoAnimationInProgress) {
//                                 logoAnimationInProgress = true;
//                                 logoWrapper.classList.remove('opacity-zero');
//                                 mode.classList.add('display');
//                                 logoWrapper.classList.add('expanded-after', 'place-header-after');
//                             }
//                         } else {
//                             logoAnimationInProgress = false;
//                         }
//                     }

//                     previousScrollPos = currentScrollPos;

//                     window.requestAnimationFrame(handleScroll);
//                 }

//                 window.addEventListener('scroll', handleScroll);
//             }
//         });
//     }, 3000);

//     var helpIcons = document.querySelectorAll('.help-icon');

//     helpIcons.forEach(function (helpIcon) {
//         helpIcon.addEventListener('click', function () {
//             openModal();
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const logoPosition = document.getElementById("logo-position");
    const logoWrapper = document.querySelector('.logo-wrapper');
    const mode = document.getElementById("mode-switch");

    setTimeout(() => {
        logo.classList.add("expanded");
    }, 300);

    setTimeout(() => {
        logo.classList.add("place-header");
        logo.addEventListener("transitionend", function (event) {
            if (event.propertyName === "transform") {
                logoPosition.style.height = '13.5vh'
                logoWrapper.style.position = 'absolute';
                document.getElementById("content").classList.add("display");
                document.getElementById("mode-switch").classList.add("display");
            }
        });
    }, 3000);
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



function getActiveSelectText(elementID) {
    const wrapper = document.getElementById(elementID);
    const activeElement = wrapper.querySelector('.active');

    if (!activeElement) {
        return;
    }

    const input = activeElement.querySelector('.input');

    return input.value;
}

document.getElementById("sendButton").addEventListener('click', function () {
    const vertical = getActiveSelectText("verticalSelect1");
    if (!vertical) {
        alert('Choose a vertical !');
        return;
    }

    const geoSelect = document.getElementById("geoSelect2");
    const geoSelected = geoSelect.options[geoSelect.selectedIndex];
    if (geoSelected.value == "0") {
        alert('Choose a geo !');
        return;
    }

    const languageSelect = document.getElementById("languageSelect3");
    const languageSelected = languageSelect.options[languageSelect.selectedIndex];
    if (languageSelected.value == "0") {
        alert('Choose a language !');
        return;
    }

    const traff = getActiveSelectText("traffSelect4");
    if (!traff) {
        alert('Choose a traff source !');
        return;
    }

    const size = getActiveSelectText("sizeSelect5");
    if (!size) {
        alert('Choose a size !');
        return;
    }

    const length = getActiveSelectText("lengthSelect6");
    if (!length) {
        alert('Choose a length !');
        return;
    }

    const themaSelect = document.getElementById("themaSelect7");
    const themaSelected = themaSelect.options[themaSelect.selectedIndex];
    if (themaSelected.value == "0") {
        alert('Choose a theme !');
        return;
    }

    const gameTypeSelect = document.getElementById("gameTypeSelect8");
    const gameTypeSelected = gameTypeSelect.options[gameTypeSelect.selectedIndex];
    if (gameTypeSelected.value == "0") {
        alert('Choose a game !');
        return;
    }

    const os = getActiveSelectText("osSelect9");
    if (!os) {
        alert('Choose a OS !');
        return;
    }

    const emotions = getActiveSelectText("emotionsSelect10");
    if (!emotions) {
        alert('Choose a emotions options !');
        return;
    }

    const banking = getActiveSelectText("bankingSelect11");
    if (!banking) {
        alert('Choose a banking options !');
        return;
    }

    const push_up = getActiveSelectText("pushUpSelect12");
    if (!push_up) {
        alert('Choose a Push Up options !');
        return;
    }

    const app_name = document.getElementById("appNameInput13").value;
    if (app_name.length < 3) {
        alert("App name input is empty !");
        return;
    }

    const deadline = getActiveSelectText("deadlineSelect14");
    if (!deadline) {
        alert('Choose a deadline !');
        return;
    }

    const offer = document.getElementById("offerLinkInput15").value;
    if (offer.length < 3) {
        alert("Offer link input is empty !");
        return;
    }

    const tg_username = document.getElementById("tgUsernameInput").value;
    if (tg_username.length < 3) {
        alert("TG Username input is empty !");
        return;
    }

    const data = {
        id: generateRandomNumber(),
        time: getFormattedTimeWithTimeZone(),
        vertical: vertical,
        geo: geoSelected.value,
        language: languageSelected.value,
        traff: traff,
        size: size,
        length: length,
        thema: themaSelected.value,
        game: gameTypeSelected.value,
        os: os,
        emotions: emotions,
        banking: banking,
        push_up: push_up,
        app_name: app_name,
        deadline: deadline,
        offer: offer,
        tg_username: tg_username
    }

    console.log(data);

    axios.post('/order.php', data)
        .then((response) => {
            alert("Ваше замовлення успішно отримане !");
        })
        .catch((error) => {
            window.location.reload();
        });

});

function generateRandomNumber() {
    const min = 10000000;
    const max = 99999999;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFormattedTimeWithTimeZone() {
    const userTimezone = 'Europe/Sofia';

    const now = new Date();

    const userTime = new Date(now.toLocaleString('en-US', { timeZone: userTimezone }));

    const formattedTime = userTime.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
    }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+) (AM|PM)/, '$2/$1/$3 $4');

    return formattedTime;
}