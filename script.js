const countriesUkrainian = [
    "Австралія",
    "Австрія",
    "Аргентина",
    "Бангладеш",
    "Бельгія",
    "Болгарія",
    "Болівія",
    "Боснія і Герцеговина",
    "Бразилія",
    "В'єтнам",
    "Велика Британія",
    "Венесуела",
    "Германія",
    "Гондурас",
    "Греція",
    "Грузія",
    "Данія",
    "Егіпет",
    "Еквадор",
    "Есватіні",
    "Естонія",
    "Ізраїль",
    "Індія",
    "Іран",
    "Ірландія",
    "Ісландія",
    "Іспанія",
    "Італія",
    "Казахстан",
    "Канада",
    "Кенія",
    "Китай",
    "Киргизстан",
    "Колумбія",
    "Коста-Рика",
    "Латвія",
    "Литва",
    "Ліхтенштейн",
    "Люксембург",
    "Малайзія",
    "Мальта",
    "Марокко",
    "Мексика",
    "Молдова",
    "Нігерія",
    "Нідерланди",
    "Нікарагуа",
    "Норвегія",
    "Пакистан",
    "Палау",
    "Парагвай",
    "Перу",
    "Південна Африка",
    "Південна Корея",
    "Південний Судан",
    "Північна Корея",
    "Польща",
    "Португалія",
    "Росія",
    "Румунія",
    "Саудівська Аравія",
    "Сальвадор",
    "Сан-Марино",
    "Сербія",
    "Сингапур",
    "Словенія",
    "Сполучені Штати Америки",
    "Судан",
    "Таджикистан",
    "Таїланд",
    "Туніс",
    "Туреччина",
    "Туркменістан",
    "Угорщина",
    "Україна",
    "Узбекистан",
    "Уругвай",
    "Фінляндія",
    "Франція",
    "Хорватія",
    "Чад",
    "Чехія",
    "Чилі",
    "Чорногорія",
    "Швейцарія",
    "Швеція",
    "Шри-Ланка",
    "Ямайка",
    "Японія"
];

const languagesUkrainian = [
    "Англійська",
    "Арабська",
    "Бенгальська",
    "Болгарська",
    "Бурська",
    "Данська",
    "Естонська",
    "Гінді",
    "Грецька",
    "Грузинська",
    "Іврит",
    "Ісландська",
    "Іспанська",
    "Італійська",
    "Казахська",
    "Китайська",
    "Латвійська",
    "Литовська",
    "Малайзійська",
    "Мальтійська",
    "Нідерландська",
    "Німецька",
    "Перська",
    "Португальська",
    "Російська",
    "Румунська",
    "Свазі",
    "Сербська",
    "Сингальська",
    "Словацька",
    "Словенська",
    "Турецька",
    "Українська",
    "Уругвайська",
    "Фінська",
    "Французька",
    "Хорватська",
    "Чеська",
    "Чилійська",
    "Шведська",
    "Японська"
];


const countrySelect = $('#countrySelect');

countriesUkrainian.forEach(country => {
    countrySelect.append(`<option value="${country}">${country}</option>`);
});

const languageSelect = $('#languageSelect');

languagesUkrainian.forEach(language => {
    languageSelect.append(`<option value="${language}">${language}</option>`);
});

$(document).ready(function () {
    countrySelect.select2({
        theme: 'custom-theme',
        width: '100%'
    });

    languageSelect.select2({
        theme: 'custom-theme',
        width: '100%'
    });

    $('#select2-countrySelect-container').html('Виберіть ГЕО');
    $('#select2-languageSelect-container').html('Виберіть мову');
});

function getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const logoPosition = document.getElementById("logo-position");
    const logoWrapper = document.querySelector('.logo-wrapper');
    const info = document.getElementById("info-container");

    setTimeout(() => {
        logo.classList.add("expanded");
    }, 300);

    setTimeout(() => {
        logo.classList.add("place-header");
        logo.addEventListener("transitionend", function (event) {
            if (event.propertyName === "transform") {
                if (getWindowWidth() < 768) {
                    logoWrapper.classList.add("fix-position");
                    document.getElementById("mode-switch-mobile").classList.add("display");
                    document.getElementById("info-container-mobile").classList.add("display");
                    logoPosition.style.height = '18vh';
                } else {
                    info.classList.add("display");
                    logoPosition.style.height = '22vh';
                }
                document.getElementById("content").classList.add("display");
                document.getElementById("language-select").classList.add("display");
                logoWrapper.style.position = 'absolute';
            }
        });
    }, 3000);

    var helpIcons = document.querySelectorAll('.help-icon');

    helpIcons.forEach(function (helpIcon) {
        helpIcon.addEventListener('click', function () {
            openModal();
        });
    });
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

    document.querySelector('.top-lang').classList.remove('active');
    document.querySelector('.top-lang-items').style.width = '0px';
}

function openModal() {
    var modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modal.style.display = 'block';

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var modalHeight = modalContent.offsetHeight;
    var windowHeight = window.innerHeight;

    var topPosition = Math.max(0, (windowHeight - modalHeight) / 2 + scrollTop);

    modalContent.style.top = topPosition + 'px';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function (event) {
    console.log('Window clicked');
    var lang = document.getElementById("langSelect");
    var modal = document.getElementById('modal');
    var closeBtn = document.querySelector('.close');

    if (event.target === modal || event.target === closeBtn) {
        closeModal();
    }

    if (lang.contains(event.target)) {
        return;
    }

    closeAllSelect();
};

function changeColor(inputElement) {
    const wrapper = inputElement.closest('.wrapper');
    const inputCheckGroups = wrapper.querySelectorAll('.input-check-group');

    inputCheckGroups.forEach((inputCheckGroup) => {
        const input = inputCheckGroup.querySelector('.input-check');
        if (input === inputElement) {
            inputCheckGroup.classList.add('active');
            inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = '#d7d7d758';
        } else {
            inputCheckGroup.classList.remove('active');
            inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = 'rgba(0, 0, 0, 0.00)';
        }
    });
}

function changeMultiplyColor(inputElement) {
    const inputCheckGroup = inputElement.closest('.input-check-group');

    if (inputCheckGroup.classList.contains("active")) {
        inputCheckGroup.classList.remove('active');
        inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = 'rgba(0, 0, 0, 0.00)';
    } else {
        inputCheckGroup.classList.add('active');
        inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = '#d7d7d758';
    }
}

function changeColorLight(inputElement) {
    const wrapper = inputElement.closest('.wrapper');
    const inputCheckGroups = wrapper.querySelectorAll('.input-check-group');

    inputCheckGroups.forEach((inputCheckGroup) => {
        const input = inputCheckGroup.querySelector('.input-check');
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

document.getElementById('mode-switch').addEventListener('click', function () {
    var modeSwitch = document.getElementById('mode-switch');

    if (modeSwitch.classList.contains('night')) {
        window.location.href = "index-light.html"
    } else if (modeSwitch.classList.contains('sun')) {
        window.location.href = "index.html"
    }
});

document.querySelector('.top-lang').addEventListener('click', function (e) {
    var langBtn = this;
    var langItems = document.querySelector('.top-lang-items');
    console.log("PASHOL NAHUY FIRST");

    if (!langItems.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        if (!langBtn.classList.contains('active')) {
            console.log("PASHOL NAHUY");
            langBtn.classList.add('active');
            langItems.style.display = 'block';
            if (getWindowWidth() < 768) {
                langItems.style.width = '110px';
            } else {
                langItems.style.width = '185px';
            }

            langItems.style.left = '0px';
        } else {
            langBtn.classList.remove('active');
            langItems.style.width = '0px';
        }
    }

});

function getActiveSelectText(elementID) {
    const wrapper = document.getElementById(elementID);
    const activeElement = wrapper.querySelector('.active');

    if (!activeElement) {
        return;
    }

    const input = activeElement.querySelector('.input-check');

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