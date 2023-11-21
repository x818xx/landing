var langValue = document.documentElement.lang;

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

    openSuccessModal(15456465);
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

function toggleInput(radio) {
    const wrapper = radio.closest('.wrapper');

    wrapper.style.display = 'none';
    if (wrapper.classList.contains('app-link')) {
        document.getElementById("appLinkGroup").style.display = 'flex';
    } else {
        document.getElementById("offerLinkGroup").style.display = 'flex';
    }
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
    var modal = document.getElementById('modalExplain');
    // const modalContent = document.getElementById('modal-content');
    modal.style.display = 'block';

    // var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // var modalHeight = modalContent.offsetHeight;
    // var windowHeight = window.innerHeight;

    // var topPosition = Math.max(0, (windowHeight - modalHeight) / 2 + scrollTop);

    // modalContent.style.top = topPosition + 'px';
}

function openSuccessModal(id) {
    var modal = document.getElementById('modalSuccess');
    // document.getElementById("order_id").innerText = "#" + id;
    // const modalContent = document.getElementById('modal-success-content');
    modal.style.display = 'block';

    // var topPosition = Math.max(0, (window.innerHeight - modalContent.clientHeight) / 2 + window.pageYOffset);

    // modalContent.style.top = topPosition + 'px';
}

function closeModal() {
    document.getElementById('modalExplain').style.display = 'none';
    document.getElementById('modalSuccess').style.display = 'none';
}

window.onclick = function (event) {
    console.log('Window clicked');
    var lang = document.getElementById("langSelect");
    var modalExplain = document.getElementById('modalExplain')
    var modalSuccess = document.getElementById('modalSuccess')

    var closeBtn = document.querySelector('.close');

    if (event.target === modalExplain || event.target === modalSuccess || event.target === closeBtn) {
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

function handleBackButton(backImage) {
    const inputGroup = backImage.closest('.choose-input-group');
    inputGroup.style.display = "none";

    if (backImage.classList.contains('app-image')) {
        document.getElementById("appLinkSelect13").style.display = 'flex';
    } else {
        document.getElementById("offerLinkSelect14").style.display = 'flex';
    }
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

function changeMultiplyColorLight(inputElement) {
    const inputCheckGroup = inputElement.closest('.input-check-group');

    if (inputCheckGroup.classList.contains("active")) {
        inputCheckGroup.classList.remove('active');
        inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = 'rgba(0, 0, 0, 0.00)';
    } else {
        inputCheckGroup.classList.add('active');
        inputCheckGroup.querySelector(".input-check-name").style.backgroundColor = 'rgba(0, 0, 0, 0.150)';
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

document.getElementById('mode-switch').addEventListener('click', function () {
    var modeSwitch = document.getElementById('mode-switch');

    if (modeSwitch.classList.contains('night')) {
        window.location.href = "index-light.html"
    } else if (modeSwitch.classList.contains('sun')) {
        window.location.href = "index.html"
    }
});

document.getElementById('mode-switch-mobile').addEventListener('click', function () {
    var modeSwitch = document.getElementById('mode-switch-mobile');

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

function getMultiplyActiveSelectText(elementID) {
    const wrapper = document.getElementById(elementID);
    const activeElements = wrapper.querySelectorAll('.active');

    if (!activeElements || activeElements.length === 0) {
        return;
    }

    const texts = Array.from(activeElements).map(activeElement => {
        const input = activeElement.querySelector('.input-check');
        return input ? input.value : '';
    });

    return texts.join(', ');
}

function getChoiceActiveSelectText(inputGroupID, inputID, selectID) {
    const input = document.getElementById(inputID);
    const inputGroup = document.getElementById(inputGroupID);
    if (inputGroup.style.display == 'flex') {
        if (!(input.value) || input.value.length < 3) {
            return;
        } else {
            return input.value;
        }
    } else {
        return getActiveSelectText(selectID);
    }
}

var timeoutId;

document.querySelector('.close-btn').addEventListener('click', function () {
    closePopup();
    clearTimeout(timeoutId);
});

function showPopup(text) {
    const popup = document.getElementById('errorPopup');
    popup.classList.add('active');

    const errorText = document.getElementById('errorText');
    errorText.innerText = text;

    timeoutId = setTimeout(function () {
        closePopup("errorPopup");
    }, 3000);
}

function showSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.classList.add('active');

    timeoutId = setTimeout(function () {
        closePopup("successPopup");
    }, 3000);
}

function closePopup(id) {
    var popup = document.getElementById(id);
    popup.classList.remove('active');
}

document.getElementById("sendButton").addEventListener('click', function () {
    getInput();
});

function getInput() {
    const vertical = getActiveSelectText("verticalSelect1");
    if (!vertical) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть вертикаль.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const geoSelected = $('#countrySelect').val();
    if (geoSelected == null) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть ГЕО.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const languageSelected = $('#languageSelect').val();
    if (languageSelected == null) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть мову.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const traff = getActiveSelectText("traffSelect4");
    if (!traff) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть джерело трафіку.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const size = getMultiplyActiveSelectText("sizeSelect5");
    if (!size) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть розмір креативу.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const length = getActiveSelectText("lengthSelect6");
    if (!length) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть тривалість креативу.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const themaSelect = document.getElementById("themaSelect7");
    const themaSelected = themaSelect.options[themaSelect.selectedIndex];
    if (themaSelected.value == "0") {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть тему креативу.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const gameTypeSelect = document.getElementById("gameTypeSelect8");
    const gameTypeSelected = gameTypeSelect.options[gameTypeSelect.selectedIndex];
    if (gameTypeSelected.value == "0") {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть тип гри.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const os = getMultiplyActiveSelectText("osSelect9");
    if (!os) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть операційну систему.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const emotions = getActiveSelectText("emotionsSelect10");
    if (!emotions) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть чи показувати емоції виграшу.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const banking = getActiveSelectText("bankingSelect11");
    if (!banking) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть чи показувати скрін банкінгу.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const push_up = getActiveSelectText("pushUpSelect12");
    if (!push_up) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть чи показувати Push-Up сповіщення.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const app_link = getChoiceActiveSelectText("appLinkGroup", "appLinkInput13", "appLinkSelect13");
    if (!app_link) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Введіть посилання на додаток.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const offer = getChoiceActiveSelectText("offerLinkGroup", "offerLinkInput14", "offerLinkSelect14");
    if (!offer) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Введіть посилання на оффер.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    const deadline = getActiveSelectText("deadlineSelect15");
    if (!deadline) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Виберіть термін виконання.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }


    let tg_username = document.getElementById("tgUsernameInput").value;
    const usernameWithoutAt = tg_username.replace(/@/g, '');
    if (usernameWithoutAt.length < 3) {
        switch (langValue) {
            case 'ua':
                showPopup('Помилка! Введіть телеграм @username.');
                break;
            case 'ru':
                showPopup();
                break;
            case 'en':
                showPopup();
                break;
        }
        return;
    }

    let promocode = document.getElementById("promocodeInput").value;
    if (!promocode) {
        promocode = '-';
    }

    const data = {
        id: generateRandomNumber(),
        time: getFormattedTimeWithTimeZone(),
        vertical: vertical,
        geo: geoSelected,
        language: languageSelected,
        traff: traff,
        size: size,
        length: length,
        thema: themaSelected.value,
        game: gameTypeSelected.value,
        os: os,
        emotions: emotions,
        banking: banking,
        push_up: push_up,
        app_link: app_link,
        offer: offer,
        deadline: deadline,
        tg_username: usernameWithoutAt,
        promocode: promocode
    }

    console.log(data);

    axios.post('/order.php', data)
        .then((response) => {
            // showSuccessPopup();
            openSuccessModal(data.id);
        })
        .catch((error) => {
            window.location.reload();
        });

}

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